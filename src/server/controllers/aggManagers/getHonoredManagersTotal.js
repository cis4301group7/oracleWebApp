const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getHonoredManagersTotal = async function (req, res) {
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
        'SELECT COUNT(*) AS LIVING FROM \
          (SELECT COUNT(RYBROOKS.PLAYERS.PLAYERID) FROM RYBROOKS.PLAYERS \
          INNER JOIN RYBROOKS.MANAGERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID \
          INNER JOIN RYBROOKS.MANAGERAWARDS \
          ON RYBROOKS.MANAGERS.PLAYERID = RYBROOKS.MANAGERAWARDS.PLAYERID \
          WHERE DEATHYEAR IS NOT NULL \
          GROUP BY RYBROOKS.PLAYERS.PLAYERID)', {}, {
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
                console.log('GET /HonoredManagersTotal : Connection released');
              }
            }
          );
        }
);
    }
  );
};
