const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getPlayerSalariesYear = async function (req, res) {
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
        'SELECT TEAMID, Cast(AVG(SALARY)as Int) AS SALARY FROM RYBROOKS.PLAYERS \
        INNER JOIN RYBROOKS.SALARIES \
        ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.SALARIES.PLAYERID \
        GROUP BY TEAMID ORDER BY TEAMID ASC', {}, {
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
                console.log('GET /PlayerSalariesYear : Connection released');
              }
            }
          );
        }
);
    }
  );
};
