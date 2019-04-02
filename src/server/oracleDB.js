const oracledb = require('oracledb');
const dbConfig = require('./config/config');

async function initialization() {
  try {
    // Create a connection pool which will later be accessed via the
    // pool cache as the 'default' pool.
    await oracledb.createPool({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString
    });
    console.log('Connection pool started');

    // Now the pool is running, it can be used
    // await executeSQLStatement();
  } catch (err) {
    console.error('init() error: ' + err.message);
  // } finally {
  //   await closePoolAndExit();
  // }
  }
}

module.exports.initialization = initialization;

// async function executeSQLStatement(query, binds = [], options = {}) {
//   // return new Promise(async (resolve, reject) => {
//   //   let connection;

//   //   options.outFormat = oracledb.OBJECT;
//   //   options.autoCommit = true;

//   //   try {
//   //     connection = await oracledb.getConnection();
//   //     const result = await connection.execute(query, binds, options);
//   //     console.log(result);
//   //     resolve(result);
//   //   } catch (error) {
//   //     console.error(error);
//   //     reject(error);
//   //   } finally {
//   //     if (connection) {
//   //       try {
//   //         await connection.close();
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     }
//   //   }
//   // });

//   let connection;

//   try {
//     // Get a connection from the default pool
//     connection = await oracledb.getConnection();
//     let sql = `SELECT * FROM RYBROOKS.DIVISIONS`;
//     let binds = [];
//     let options = { outFormat: oracledb.OBJECT };
//     // let result = await connection.execute(sql, binds, options);
//     let result = await connection.execute(query, binds, options);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     if (connection) {
//       try {
//         // Put the connection back in the pool
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }

function executeSQLStatement(query, binds = [], options = {}) {
  return new Promise(async (resolve, reject) => {
    let connection;

    options.outFormat = oracledb.OBJECT;
    options.autoCommit = true;

    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(query, binds, options);
      return resolve(result);
    } catch (err) {
      return reject(err);
    // } finally {
    //   if (connection) {
    //     try {
    //       await connection.close();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    }
  });
}

module.exports.executeSQLStatement = executeSQLStatement;
