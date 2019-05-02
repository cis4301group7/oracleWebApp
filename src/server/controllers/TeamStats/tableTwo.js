const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.tableTwo = async function (req, res) {
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
        'SELECT UNIQUE(TEAMNAME) AS TEAMNAME, POSTSEASONSERIES.WINS AS POSTSEASONWINS, \
        CAST((TEAMSTATS.W/TEAMSTATS.G)*100 AS INT) AS WINS, \
        CAST((TEAMSTATS.L/TEAMSTATS.G)*100 AS INT) AS LOSSES \
        FROM RYBROOKS.TEAMS INNER JOIN RYBROOKS.TEAMSTATS \
        ON TEAMS.TEAMID = TEAMSTATS.TEAMID INNER JOIN RYBROOKS.POSTSEASONSERIES \
        ON TEAMS.TEAMID = POSTSEASONSERIES.TEAMIDWINNER \
        WHERE TEAMSTATS.WCWIN = \'Y\' AND POSTSEASONSERIES.WINS > 0 AND (TEAMSTATS.W/TEAMSTATS.G)*100 > (TEAMSTATS.L/TEAMSTATS.G)*100', {}, {
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
                console.log('GET /tableTwo : Connection released');
              }
            }
          );
        }
);
    }
  );
};
