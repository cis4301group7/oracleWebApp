const express = require('express');
const path = require('path');

// var projectController = require('./projects.controller');
// const appDBController = require('./appDB.controller');
const detailsController = require('./controllers/details/getDetails');
const totalCountController = require('./controllers/details/getTotalCount');
const uniquePlayerController = require('./controllers/home/getUniquePlayers');
const uniqueGamesPlayedController = require('./controllers/home/getUniqueGamesPlayed');
const pitcherChangedPositionsTotalController = require('./controllers/home/getPitcherChangedPositions');
const honoredPlayersTotalController = require('./controllers/home/getHonoredPlayersTotal');
const hitsPerSeasonController = require('./controllers/home/getHitsPerSeason');
const averageTeamHitsController = require('./controllers/home/getAverageTeamHits');
const playerSalariesYearController = require('./controllers/home/getPlayerSalariesYear');
const managerSalariesYearController = require('./controllers/home/getManagerSalariesYear');
const postseasonWinsTeamController = require('./controllers/home/getPostseasonWinsTeam');
const postseasonRBIsController = require('./controllers/home/getPostseasonRBIs');
const postseasonSuperstarsController = require('./controllers/home/getPostseasonSuperstars');

const app = express();
// const PORT = process.env.PORT || 8080;

// app.get("/api/getAllProposedProjects", projectController.getAllProposedProjects);
// app.get("/api/getAllCurrentProjects", projectController.getAllCurrentProjects);
// app.get("/api/getAllArchivedProjects", projectController.getAllArchivedProjects);
// app.get("/api/getSelectedProject", projectController.getSelectedProject);

// app.get('/api/getAllData', appDBController.getAllData);
app.get('/api/getDetails', detailsController.getDetails);
app.get('/api/getTotalCount', totalCountController.getTotalCount);
app.get('/api/getUniquePlayers', uniquePlayerController.getUniquePlayers);
app.get('/api/getUniqueGamesPlayed', uniqueGamesPlayedController.getUniqueGamesPlayed);
app.get('/api/getPitcherChangedPositions', pitcherChangedPositionsTotalController.getPitcherChangedPositionsTotal);
app.get('/api/getHonoredPlayersTotal', honoredPlayersTotalController.getHonoredPlayersTotal);
app.get('/api/getHitsPerSeason', hitsPerSeasonController.getHitsPerSeason);
app.get('/api/getAverageTeamHits', averageTeamHitsController.getAverageTeamHits);
app.get('/api/getPlayerSalariesYear', playerSalariesYearController.getPlayerSalariesYear);
app.get('/api/getManagerSalariesYear', managerSalariesYearController.getManagerSalariesYear);
app.get('/api/getPostseasonWinsTeam', postseasonWinsTeamController.getPostseasonWinsTeam);
app.get('/api/getPostseasonRBIs', postseasonRBIsController.getPostseasonRBIs);
app.get('/api/getPostseasonSuperstars', postseasonSuperstarsController.getPostseasonSuperstars);

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
