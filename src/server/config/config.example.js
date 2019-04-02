// This file holds any configuration variables we may need
// 'config.js' is ignored by git to protect sensitive information,
// such as your database's username and password
// copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  user: process.env.NODE_ORACLEDB_USER || 'username',

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password: process.env.NODE_ORACLEDB_PASSWORD || 'password',

  // For information on connection strings see:
  // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || '(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= orcl)))',

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://oracle.github.io/node-oracledb/doc/api.html#extauth
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false

};
