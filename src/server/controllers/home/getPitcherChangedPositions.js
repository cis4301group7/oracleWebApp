const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getPitcherChangedPositionsTotal = async function (req, res) {
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
        'SELECT COUNT(*) AS PCHANGE FROM \
          (SELECT * FROM RYBROOKS.APPEARANCES \
          WHERE PITCHERAPPEARANCES > 0 \
          AND( CATCHERAPPEARANCES <> 0 \
          OR FIRSTAPPEARANCES<> 0 \
          OR SECONDAPPEARANCES <> 0 \
          OR THIRDAPPEARANCES <> 0 \
          OR SSAPPEARANCES <> 0 \
          OR LFAPPEARANCES <> 0 \
          OR CFAPPEARANCES <> 0 \
          OR RFAPPEARANCES <> 0))', {}, {
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
                console.log('GET /PitcherChangedPositions : Connection released');
              }
            }
          );
        }
);
    }
  );
};
