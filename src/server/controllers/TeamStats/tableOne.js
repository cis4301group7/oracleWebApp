/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.tableOne = async function (req, res) {
  const bin = req.query.year;

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
        'SELECT TEAMNAME, SUM(SALARY) AS ANNUALSALARY FROM RYBROOKS.TEAMS INNER JOIN RYBROOKS.SALARIES \
        ON TEAMS.TEAMID = SALARIES.TEAMID WHERE YEAR = :year \
        GROUP BY SALARY, TEAMNAME ORDER BY SUM(SALARY) DESC, TEAMNAME FETCH NEXT 10 ROWS ONLY', { year: bin }, {
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
                console.log('POST /tableOne : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
