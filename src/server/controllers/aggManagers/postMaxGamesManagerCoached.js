/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.postMaxGamesManagerCoached = async function (req, res) {
  const bin = req.query.team;

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
        'SELECT RYBROOKS.MANAGERS.PLAYERID AS PLAYERID, NAMEFIRST, NAMELAST, SUM(G) AS TENURE, \
          SUM(W) AS WINS, SUM(L) AS LOSSES, CAST(round(((SUM(W)/SUM(G))*100),2) as decimal(8,2)) AS WINPCT \
          FROM RYBROOKS.MANAGERS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID \
          WHERE TEAMID = :team \
          GROUP BY RYBROOKS.MANAGERS.TEAMID, RYBROOKS.MANAGERS.PLAYERID, \
          NAMEFIRST, NAMELAST \
          ORDER BY SUM(G) DESC', { team: bin }, {
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
                console.log('POST /MaxGamesManagerCoached : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
