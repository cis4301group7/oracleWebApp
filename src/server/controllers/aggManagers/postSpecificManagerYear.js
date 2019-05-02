/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.postSpecificManagerYear = async function (req, res) {
  const bin = req.query.year;

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
        'SELECT RYBROOKS.MANAGERS.PLAYERID AS PLAYERID, NAMEFIRST, NAMELAST, \
          SUM(RYBROOKS.MANAGERS.W) AS WINS, SUM(RYBROOKS.MANAGERS.L) AS LOSSES, \
          CAST(round(((SUM(RYBROOKS.MANAGERS.W)/SUM(RYBROOKS.MANAGERS.G))*100),1) as decimal(16,1)) AS WINPCT, \
          RA, HA, WSWIN, LGWIN, DIVWIN, WCWIN \
          FROM RYBROOKS.MANAGERS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID \
          INNER JOIN RYBROOKS.TEAMSTATS \
          ON RYBROOKS.TEAMSTATS.YEAR = RYBROOKS.MANAGERS.YEAR \
          AND RYBROOKS.TEAMSTATS.TEAMID = RYBROOKS.MANAGERS.TEAMID \
          WHERE RYBROOKS.MANAGERS.YEAR = :year \
          GROUP BY RYBROOKS.MANAGERS.PLAYERID, \
          NAMEFIRST, NAMELAST, RA, HA, WSWIN, LGWIN, DIVWIN, WCWIN \
          ORDER BY WSWIN DESC, LGWIN DESC, DIVWIN DESC, \
          WCWIN DESC, WINPCT DESC, RA ASC, HA ASC', { year: bin }, {
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
            // console.log(result.rows);
          }
          // Release the connection
          connection.release(
            (err) => {
              if (err) {
                console.error(err.message);
              } else {
                console.log('POST /SpecificManagerYear : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
