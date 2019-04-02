const express = require('express');
const path = require('path');

// var projectController = require('./projects.controller');
// const appDBController = require('./appDB.controller');
const detailsController = require('./controllers/getDetails');
const totalCountController = require('./controllers/getTotalCount');

const app = express();
// const PORT = process.env.PORT || 8080;

// app.get("/api/getAllProposedProjects", projectController.getAllProposedProjects);
// app.get("/api/getAllCurrentProjects", projectController.getAllCurrentProjects);
// app.get("/api/getAllArchivedProjects", projectController.getAllArchivedProjects);
// app.get("/api/getSelectedProject", projectController.getSelectedProject);

// app.get('/api/getAllData', appDBController.getAllData);
app.get('/api/getDetails', detailsController.getDetails);
app.get('/api/getTotalCount', totalCountController.getTotalCount);

// app.post("/api/addProjectProposal", projectController.addProjectProposal);

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../dist/index.html'));
// });

// app.listen(8080, () => console.log('Listening on port 8080!'));


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
