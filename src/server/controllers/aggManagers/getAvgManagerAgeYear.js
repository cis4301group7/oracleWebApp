const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getAvgManagerAgeYear = async function (req, res) {
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
        'SELECT YEAR, Cast(MAX(AGE) as Int) AS MAGE FROM ( \
          SELECT RYBROOKS.MANAGERS.YEAR, (YEAR-BIRTHYEAR) AS AGE \
          FROM RYBROOKS.MANAGERS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.MANAGERS.PLAYERID = RYBROOKS.PLAYERS.PLAYERID \
          GROUP BY RYBROOKS.MANAGERS.YEAR, (YEAR-BIRTHYEAR) \
          ORDER BY RYBROOKS.MANAGERS.YEAR ASC) \
          GROUP BY YEAR ORDER BY YEAR ASC', {}, {
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
                console.log('GET /AvgManagerAgeYear : Connection released');
              }
            }
          );
        }
);
    }
  );
};
