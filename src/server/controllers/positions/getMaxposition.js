const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getMaxPosition = async function (req, res) {
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
        'sELECT POSNAME FROM ((SELECT POSITIONID AS POSID1, COUNT(L)\
        FROM RYBROOKS.APPEARANCES JOIN RYBROOKS.TEAMSTATS\
        ON APPEARANCES.TEAMID = TEAMSTATS.TEAMID\
        GROUP BY POSITIONID \
        ORDER BY COUNT(L) DESC FETCH NEXT 1 ROW ONLY) \
        JOIN (SELECT POSITIONNAME AS POSNAME, POSITIONID AS POSID2 FROM RYBROOKS.POSITIONS)\
        ON POSID1 = POSID2)', {}, {
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
                console.log('GET /MaxPosition : Connection released');
              }
            }
          );
        }
);
    }
  );
};
