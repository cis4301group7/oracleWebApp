const oracledb = require('oracledb');
const config = require('./config/config');

// oracledb.getConnection(config.db.uri);

oracledb.getConnection(
  {
    user: config.db.user,
    password: config.db.password,
    connectString: config.db.connectString
  },
  (err, connection) => {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      'SELECT * '
          + 'FROM BOS_course',
      (err, result) => {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      }
    );
  }
);

module.exports = {
  oracledb
};

// mongoose.connect(config.db.uri);
// var myModel = mongoose.model('Project', Project.Project);


// exports.getSelectedProject = async function(req, res) { //{_id: "something..."}
//     myModel.findOne({_id : req.query.projid}, function(err, proj) {
//         if (err) {
//             res.send(err);
//         }
//         console.log(req.query.projid);
//         console.log(proj);
//         res.json(proj);
//     });
// };
