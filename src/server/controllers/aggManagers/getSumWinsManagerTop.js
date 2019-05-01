const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getSumWinsManagerTop = async function (req, res) {
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
          SUM(distinct(RYBROOKS.MANAGERS.W)) AS WINS, SUM(distinct(RYBROOKS.MANAGERS.L)) AS LOSSES, \
          CAST(round(((SUM(W)/SUM(G))*100),2) as decimal(8,2)) AS WINPCT, \
          COUNT(AWARDID) AS AWARDS \
          FROM RYBROOKS.MANAGERS \
          JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID \
          JOIN RYBROOKS.MANAGERAWARDS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERAWARDS.PLAYERID \
          JOIN RYBROOKS.HALLOFFAME \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.HALLOFFAME.PLAYERID \
          JOIN RYBROOKS.TEAMS \
          ON RYBROOKS.MANAGERS.TEAMID = RYBROOKS.TEAMS.TEAMID \
          WHERE INDUCTED = \'Y\' \
          GROUP BY RYBROOKS.MANAGERS.PLAYERID, NAMEFIRST, NAMELAST \
          ORDER BY WINS DESC, AWARDS DESC, SUM(G) DESC', {}, {
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
                console.log('GET /SumWinsManagerTop : Connection released');
              }
            }
          );
        }
);
    }
  );
};
