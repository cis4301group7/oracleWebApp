const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getAvgManagerSalariesTeam = async function (req, res) {
  oracledb.getConnection(
    {
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString
    },
    (err, connection) => {
      if (err) {
      // Error connecting to DB
        res.set('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({
          status: 500,
          message: 'Error connecting to DB',
          detailed_message: err.message
        }));
        return;
      }

      connection.execute(
        'SELECT RYBROOKS.MANAGERS.TEAMID AS TEAMID, Cast(AVG(SALARY)as Int) AS SALARY \
          FROM RYBROOKS.SALARIES \
          INNER JOIN RYBROOKS.MANAGERS \
          ON RYBROOKS.SALARIES.PLAYERID = RYBROOKS.MANAGERS.PLAYERID \
          GROUP BY RYBROOKS.MANAGERS.TEAMID ORDER BY RYBROOKS.MANAGERS.TEAMID ASC', {}, {
          outFormat: oracledb.OBJECT // Return the result as Object
        }, (err, result) => {
          if (err) {
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
              status: 500,
              message: 'Error getting the table details',
              detailed_message: err.message
            }));
          } else {
            res.contentType('application/json').status(200);
            res.send(JSON.stringify(result.rows));
          }
          // Release the connection
          connection.release(
            (err) => {
              if (err) {
                console.error(err.message);
              } else {
                console.log('GET /AvgManagerSalariesTeam : Connection released');
              }
            }
          );
        }
);
    }
  );
};
