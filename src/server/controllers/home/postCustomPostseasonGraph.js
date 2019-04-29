/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.postCustomPostseasonGraph = async function (req, res) {
  // const bin = req.query.year;
  const bin = req.query.agg;

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
        'SELECT RYBROOKS.POSTSEASONBATTINGSTATS.YEAR AS YEAR, AVG(RYBROOKS.POSTSEASONBATTINGSTATS.H) AS XD \
          FROM RYBROOKS.POSTSEASONBATTINGSTATS \
          INNER JOIN RYBROOKS.POSTSEASONFIELDINGSTATS \
          ON RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID = RYBROOKS.POSTSEASONFIELDINGSTATS.TEAMID \
          INNER JOIN RYBROOKS.POSTSEASONPITCHINGSTATS \
          ON RYBROOKS.POSTSEASONFIELDINGSTATS.TEAMID = RYBROOKS.POSTSEASONPITCHINGSTATS.TEAMID \
          WHERE RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID  = :agg \
          GROUP BY RYBROOKS.POSTSEASONBATTINGSTATS.YEAR \
          ORDER BY YEAR ASC', { agg: bin }, {
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
                console.log('POST /CustomPostseasonGraph : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
