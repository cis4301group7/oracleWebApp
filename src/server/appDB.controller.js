const oracledb = require('oracledb');
const config = require('./config/config');

// const tableUser = 'RYBROOKS';

// oracledb.getConnection(config.db.uri);

// Possible change to: https://stackoverflow.com/questions/29846188/node-js-express-oracle-connection-pooling-ora-24418-cannot-open-further-sess

// function doRelease(connection) {
//   connection.close(
//     (err) => {
//       if (err) { console.error(err.message); }
//     }
//   );
// }

// oracledb.getConnection(
//   {
//     user: config.db.user,
//     password: config.db.password,
//     connectString: config.db.connectString
//   },
//   (e, connection) => {
//     if (e) {
//       console.error(e.message);
//       return;
//     }
//     connection.execute(
//       `SELECT manager_id, department_id, department_name
//        FROM departments
//        WHERE manager_id = :id`,
//       [103], // bind value for :id
//       (err, result) => {
//         if (err) {
//           console.error(err.message);
//           doRelease(connection);
//           return;
//         }
//         console.log(result.rows);
//         doRelease(connection);
//       }
//     );
//   }
// );

// oracledb.getConnection(
//   {
//     user: config.db.user,
//     password: config.db.password,
//     connectString: config.db.connectString
//   },
//   (err, connection) => {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     connection.execute(
//       'SELECT * '
//           + 'FROM BOS_course',
//       (err, result) => {
//         if (err) {
//           console.error(err.message);
//           doRelease(connection);
//           return;
//         }
//         console.log(result.rows);
//         doRelease(connection);
//       }
//     );
//   }
// );

// mongoose.connect(config.db.uri);
// var myModel = mongoose.model('Project', Project.Project);


exports.getDetails = async function (req, res) {

  oracledb.getConnection(
    {
      user: config.db.user,
      password: config.db.password,
      connectString: config.db.connectString
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

      connection.execute('SELECT * FROM RYBROOKS.COLLEGE', {}, {
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

module.exports = {
  oracledb
};
