const express = require('express');
const path = require('path');

// Homepage Controllers
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

// Managers Page Controllers
const postseasonSuperstarsController = require('./controllers/home/getPostseasonSuperstars');
const avgManagerSalariesTeamController = require('./controllers/aggManagers/getAvgManagerSalariesTeam');
const avgManagerSalariesYearController = require('./controllers/aggManagers/getAvgManagerSalariesYear');
const longTermManagersController = require('./controllers/aggManagers/getLongTermManagers');
const multipleManagersYearController = require('./controllers/aggManagers/getMultipleManagersYear');
const shortTermManagersController = require('./controllers/aggManagers/getShortTermManagers');
const uniqueManagersController = require('./controllers/aggManagers/getUniqueManagers');
const managerWasPlayerController = require('./controllers/aggManagers/getManagerWasPlayer');
const honoredManagersTotalController = require('./controllers/aggManagers/getHonoredManagersTotal');
const specificManagerYearController = require('./controllers/aggManagers/postSpecificManagerYear');
const postPostseasonGraphController = require('./controllers/home/postCustomPostseasonGraph');
const postPostseasonStatsController = require('./controllers/home/postCustomPostseasonStats');

const app = express();

// Details
app.get('/api/getDetails', detailsController.getDetails);
app.get('/api/getTotalCount', totalCountController.getTotalCount);
// Homepage
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
app.post('/api/postCustomPostseasonGraph', postPostseasonGraphController.postCustomPostseasonGraph);
app.post('/api/postCustomPostseasonStats', postPostseasonStatsController.postCustomPostseasonStats);
// Managers
app.get('/api/getAvgManagerSalariesTeam', avgManagerSalariesTeamController.getAvgManagerSalariesTeam);
app.get('/api/getAvgManagerSalariesYear', avgManagerSalariesYearController.getAvgManagerSalariesYear);
app.get('/api/getLongTermManagers', longTermManagersController.getLongTermManagers);
app.get('/api/getMultipleManagersYear', multipleManagersYearController.getMultipleManagersYear);
app.get('/api/getShortTermManagers', shortTermManagersController.getShortTermManagers);
app.get('/api/getUniqueManagers', uniqueManagersController.getUniqueMangers);
app.get('/api/getManagerWasPlayer', managerWasPlayerController.getManagerWasPlayer);
app.get('/api/getHonoredManagersTotal', honoredManagersTotalController.getHonoredManagersTotal);
app.post('/api/postSpecificManagerYear', specificManagerYearController.postSpecificManagerYear);

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
