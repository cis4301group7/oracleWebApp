/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.avgSalary = async function (req, res) {
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
        'SELECT AVGSALARY, PLAYER, POSNAME FROM ((SELECT CAST(AVG(SALARY) AS INT) AS AVGSALARY, \
        APPEARANCES.PLAYERID AS PLAYER, APPEARANCES.POSITIONID AS POSID\
        FROM RYBROOKS.SALARIES JOIN RYBROOKS.APPEARANCES \
        ON SALARIES.PLAYERID = APPEARANCES.PLAYERID \
        WHERE APPEARANCES.TEAMID = :team \
        GROUP BY APPEARANCES.PLAYERID, APPEARANCES.POSITIONID \
        ORDER BY AVG(SALARY) DESC FETCH NEXT 10 ROWS ONLY) JOIN \
        (SELECT POSITIONS.POSITIONNAME AS POSNAME, POSITIONS.POSITIONID AS POSID2 FROM RYBROOKS.POSITIONS) \
        ON POSID2 = POSID)', { team: bin }, {
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
                console.log('POST /AvgSalary : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
