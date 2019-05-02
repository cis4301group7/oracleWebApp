const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.posAppearances = async function (req, res) {
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
        'SELECT APPEARANCES.POSITIONID AS POSID, POSITIONS.POSITIONNAME AS POSNAME, \
        APPEARANCES.PLAYERID AS PLAYERID, COUNT(APPEARANCES.TEAMID) AS APPEARANCES\
        FROM RYBROOKS.APPEARANCES JOIN RYBROOKS.HALLOFFAME \
        ON HALLOFFAME.PLAYERID = APPEARANCES.PLAYERID \
        JOIN RYBROOKS.PLAYERS ON PLAYERS.PLAYERID = APPEARANCES.PLAYERID \
        JOIN RYBROOKS.POSITIONS ON POSITIONS.POSITIONID = APPEARANCES.POSITIONID \
        WHERE DEATHCITY IS NULL GROUP BY APPEARANCES.POSITIONID, APPEARANCES.PLAYERID, \
        POSITIONS.POSITIONNAME HAVING COUNT(APPEARANCES.TEAMID) > 19 \
        ORDER BY COUNT(APPEARANCES.TEAMID) DESC FETCH NEXT 25 ROWS ONLY ', {}, {
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
                console.log('GET /PositionAppearances : Connection released');
              }
            }
          );
        }
);
    }
  );
};
