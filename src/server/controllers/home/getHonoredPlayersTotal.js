const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getHonoredPlayersTotal = async function (req, res) {
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
          (SELECT * FROM RYBROOKS.PLAYERS \
          INNER JOIN RYBROOKS.PLAYERAWARDS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.PLAYERAWARDS.PLAYERID \
          WHERE DEATHYEAR IS NOT NULL)', {}, {
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
                console.log('GET /HonoredPlayersTotal : Connection released');
              }
            }
          );
        }
);
    }
  );
};