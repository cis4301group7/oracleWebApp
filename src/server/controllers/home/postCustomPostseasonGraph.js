/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.postCustomPostseasonGraph = async function (req, res) {
  // const bin = req.query.year;
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
        'SELECT RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, \
          CAST(MIN(RYBROOKS.POSTSEASONBATTINGSTATS.YEAR-RYBROOKS.PLAYERS.BIRTHYEAR)as Int) AS AGE, \
          RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID \
          FROM (RYBROOKS.POSTSEASONBATTINGSTATS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.POSTSEASONBATTINGSTATS.PLAYERID) \
          JOIN (RYBROOKS.POSTSEASONFIELDINGSTATS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.POSTSEASONFIELDINGSTATS.PLAYERID) \
          ON RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID = RYBROOKS.POSTSEASONFIELDINGSTATS.TEAMID \
          JOIN (RYBROOKS.POSTSEASONPITCHINGSTATS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.POSTSEASONPITCHINGSTATS.PLAYERID) \
          ON RYBROOKS.POSTSEASONFIELDINGSTATS.TEAMID = RYBROOKS.POSTSEASONPITCHINGSTATS.TEAMID \
          WHERE RYBROOKS.POSTSEASONPITCHINGSTATS.TEAMID = :team \
          GROUP BY RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, \
          RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID \
          ORDER BY RYBROOKS.POSTSEASONBATTINGSTATS.YEAR ASC,  \
          RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID ASC', { team: bin }, {
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
