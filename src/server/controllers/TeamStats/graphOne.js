const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.graphOne = async function (req, res) {
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
        'SELECT COUNT(ALLSTARROSTERS.TEAMID) AS TIMESINALLSTAR, \
        TEAMS.TEAMID AS TEAMID FROM RYBROOKS.ALLSTARROSTERS JOIN RYBROOKS.TEAMS \
        ON TEAMS.TEAMID = ALLSTARROSTERS.TEAMID GROUP BY TEAMS.TEAMID HAVING COUNT(ALLSTARROSTERS.TEAMID) > 3', {}, {
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
                console.log('GET /graphOne : Connection released');
              }
            }
          );
        }
);
    }
  );
};
