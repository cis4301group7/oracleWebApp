const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.getTotalCount = async function (req, res) {
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
        'SELECT (SELECT COUNT(*) FROM RYBROOKS.ALLSTARROSTERS) + \
          (SELECT COUNT(*) FROM RYBROOKS.APPEARANCES) + \
          (SELECT COUNT(*) FROM RYBROOKS.BATTINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.COLLEGE) + \
          (SELECT COUNT(*) FROM RYBROOKS.CONFERENCES) + \
          (SELECT COUNT(*) FROM RYBROOKS.DIVISIONS) + \
          (SELECT COUNT(*) FROM RYBROOKS.FIELDINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.HALLOFFAME) + \
          (SELECT COUNT(*) FROM RYBROOKS.MANAGERAWARDS) +\
          (SELECT COUNT(*) FROM RYBROOKS.MANAGERAWARDSSHARE) + \
          (SELECT COUNT(*) FROM RYBROOKS.MANAGERS) + \
          (SELECT COUNT(*) FROM RYBROOKS.PARKS) + \
          (SELECT COUNT(*) FROM RYBROOKS.PITCHINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.PLAYERAWARDS) + \
          (SELECT COUNT(*) FROM RYBROOKS.PLAYERAWARDSSHARE) + \
          (SELECT COUNT(*) FROM RYBROOKS.PLAYERS) + \
          (SELECT COUNT(*) FROM RYBROOKS.POSITIONS) + \
          (SELECT COUNT(*) FROM RYBROOKS.POSTSEASONBATTINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.POSTSEASONFIELDINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.POSTSEASONPITCHINGSTATS) + \
          (SELECT COUNT(*) FROM RYBROOKS.POSTSEASONSERIES) + \
          (SELECT COUNT(*) FROM RYBROOKS.SALARIES) + \
          (SELECT COUNT(*) FROM RYBROOKS.SCHOOLS) + \
          (SELECT COUNT(*) FROM RYBROOKS.TEAMS) AS FISH FROM dual', {}, {
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
                console.log('GET /TotalCount : Connection released');
              }
            }
          );
        }
);
    }
  );
};
