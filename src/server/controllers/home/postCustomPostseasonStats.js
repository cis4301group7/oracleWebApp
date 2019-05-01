/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.postCustomPostseasonStats = async function (req, res) {
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
        'SELECT RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, RYBROOKS.TEAMS.TEAMNAME, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.R) AS TotalRuns, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.H) AS TotalHits, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.DOUBLES) AS TotalDBs, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.TRIPLES) AS TotalTRIPs, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.HR) AS TotalHRs, \
          SUM(RYBROOKS.POSTSEASONBATTINGSTATS.AB) AS TotalABs \
          FROM (RYBROOKS.POSTSEASONBATTINGSTATS \
          INNER JOIN RYBROOKS.PLAYERS \
          ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.POSTSEASONBATTINGSTATS.PLAYERID) \
          INNER JOIN RYBROOKS.TEAMS \
          ON RYBROOKS.TEAMS.TEAMID = RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID \
          WHERE RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID = :team \
          GROUP BY RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, RYBROOKS.TEAMS.TEAMNAME \
          ORDER BY TotalRuns DESC', { team: bin }, {
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
                console.log('POST /CustomPostseasonStats : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
