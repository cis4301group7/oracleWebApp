const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.posAvgHits = async function (req, res) {
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
        'SELECT POSNAME, PLAYER, TEAM, AVGHITS \
        FROM ((SELECT APPEARANCES.POSITIONID AS POSID, APPEARANCES.PLAYERID AS PLAYER, \
        APPEARANCES.TEAMID AS TEAM, CAST(AVG(H) AS INT) AS AVGHITS FROM RYBROOKS.BATTINGSTATS \
        JOIN RYBROOKS.APPEARANCES ON APPEARANCES.PLAYERID = BATTINGSTATS.PLAYERID \
        WHERE BATTINGSTATS.YEAR = :year \
        GROUP BY APPEARANCES.POSITIONID, \
        APPEARANCES.PLAYERID, APPEARANCES.TEAMID HAVING AVG(H) > 0) \
        JOIN (SELECT POSITIONS.POSITIONNAME AS POSNAME, POSITIONS.POSITIONID AS POSID2 FROM RYBROOKS.POSITIONS)\
        ON POSID = POSID2) ', {}, {
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
                console.log('GET /PositionAvgHits : Connection released');
              }
            }
          );
        }
);
    }
  );
};
