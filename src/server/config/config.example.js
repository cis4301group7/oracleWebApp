// This file holds any configuration variables we may need
// 'config.js' is ignored by git to protect sensitive information,
// such as your database's username and password
// copy this file's contents to another file 'config.js' and store your MongoLab uri there

// module.exports = {
//   db: {
//     uri: ''// place the URI of your mongo database here.
//   },
// };

module.exports = {
  user: process.env.NODE_ORACLEDB_USER || 'hr',

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password: process.env.NODE_ORACLEDB_PASSWORD,

  // For information on connection strings see:
  // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost/orclpdb',

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://oracle.github.io/node-oracledb/doc/api.html#extauth
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
