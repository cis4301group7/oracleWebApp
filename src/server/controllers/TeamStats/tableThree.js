/* eslint-disable func-names */
const oracledb = require('oracledb');
const dbConfig = require('../../config/config');

exports.tableThree = async function (req, res) {
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
        'SELECT NAMEFIRST AS FIRSTNAME, NAMELAST AS LASTNAME \
        FROM RYBROOKS.APPEARANCES \
        JOIN RYBROOKS.PLAYERS ON APPEARANCES.PLAYERID = PLAYERS.PLAYERID \
        WHERE BIRTHSTATE = DEATHSTATE AND TEAMID = :team', { team: bin }, {
          outFormat: oracledb.OBJECT // Return the r esult as Object
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
                console.log('POST /tableThree : Connection released');
              }
            }
          );
        }
      );
    }
  );
};
