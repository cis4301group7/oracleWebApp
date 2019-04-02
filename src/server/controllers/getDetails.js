// const oracleDatabase = require('../oracleDB');

// async function getDetails(req, res, next) {
//   try {
//     // const start_date = req.query.start_date;
//     // const end_date = req.query.end_date;

//     const binds = {};
//     // binds.start_date = start_date;
//     // binds.end_date = end_date;

//     const query = `
//             SELECT * FROM RYBROOKS.DIVISIONS;
//         `;

//     const result = oracleDatabase.executeSQLStatement(query, binds);

//     console.log(result); // <- undefined
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports.getDetails = getDetails;

const oracledb = require('oracledb');
const dbConfig = require('../config/config');

// function getDetails(empId) {
//   oracledb.createPool({
//     user: dbConfig.user,
//     password: dbConfig.password,
//     connectString: dbConfig.connectString
//   });
//   oracledb.getConnection((err, conn) => {
//     if (err) {
//       console.log('Error getting connection', err);
//       // getDetailsCallback(err);
//       return;
//     }

//     console.log('Connected to database');

//     conn.execute(
//       'SELECT * FROM RYBROOKS.DIVISIONS',
//       [empId],
//       {
//         outFormat: oracledb.OBJECT
//       },
//       (err, result) => {
//         if (err) {
//           console.log('Error executing query', err);

//           // getDetailsCallback(err);

//           conn.close((err) => {
//             if (err) {
//               console.log('Error closing connection', err);
//             } else {
//               console.log('Connection closed');
//             }
//           });

//           return;
//         }

//         console.log('Query executed');

//         // getDetailsCallback(null, result.rows[0]);

//         conn.close((err) => {
//           if (err) {
//             console.log('Error closing connection', err);
//           } else {
//             console.log('Connection closed');
//           }
//         });
//       }
//     );
//   });
// }

exports.getDetails = async function (req, res) {

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

      connection.execute('SELECT * FROM RYBROOKS.DIVISIONS', {}, {
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
          function (err) {
            if (err) {
              console.error(err.message);
            } else {
              console.log('GET /details : Connection released');
            }
          }
        );
      });
    }
  );
};

// module.exports.getDetails = getDetails;

// https://jsao.io/2015/07/relational-to-json-with-node-js/