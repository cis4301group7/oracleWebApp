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
const postPostseasonGraphController = require('./controllers/home/postCustomPostseasonGraph');
const postPostseasonStatsController = require('./controllers/home/postCustomPostseasonStats');
const postseasonSuperstarsController = require('./controllers/home/getPostseasonSuperstars');
// Managers Page Controllers
const avgManagerSalariesTeamController = require('./controllers/aggManagers/getAvgManagerSalariesTeam');
const avgManagerSalariesYearController = require('./controllers/aggManagers/getAvgManagerSalariesYear');
const avgManagerAgeYearController = require('./controllers/aggManagers/getAvgManagerAgeYear');
const sumWinsManagerTopController = require('./controllers/aggManagers/getSumWinsManagerTop');
const avgLengthTeamKeepsManagerController = require('./controllers/aggManagers/getAvgLengthTeamKeepsManager');
const uniqueManagersController = require('./controllers/aggManagers/getUniqueManagers');
const managerWasPlayerController = require('./controllers/aggManagers/getManagerWasPlayer');
const honoredManagersTotalController = require('./controllers/aggManagers/getHonoredManagersTotal');
const specificManagerYearController = require('./controllers/aggManagers/postSpecificManagerYear');
const maxGamesManagerCoachedController = require('./controllers/aggManagers/postMaxGamesManagerCoached');
const sumDifferentManagersPerTeamController = require('./controllers/aggManagers/getSumDifferentManagersPerTeam');
//Teams page controllers 
const cardOneController = require('./controllers/TeamStats/cardOne');
const cardTwoController = require('./controllers/TeamStats/cardTwo');
const cardThreeController = require('./controllers/TeamStats/cardThree');
const graphOneController = require('./controllers/TeamStats/graphOne');
const tableTwoController = require('./controllers/TeamStats/tableTwo');
const tableThreeController = require('./controllers/TeamStats/tableThree');
const tableOneController = require('./controllers/TeamStats/tableOne');
//Positions page controllers
const posAppearancescontroller = require('./controllers/positions/posAppearances');
const avgSalaryeController = require('./controllers/positions/avgSalary');
const posAvgHitsController = require('./controllers/positions/posAvgHits');
const getMaxPlayerscontroller = require('./controllers/positions/getMaxPlayers');
const getMaxPositionController = require('./controllers/positions/getMaxPosition');
const getMaxStrikeOutsController = require('./controllers/positions/getMaxStrikeOuts');

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
app.get('/api/getAvgManagerAgeYear', avgManagerAgeYearController.getAvgManagerAgeYear);
app.get('/api/getSumWinsManagerTop', sumWinsManagerTopController.getSumWinsManagerTop);
app.get('/api/getAvgLengthTeamKeepsManager', avgLengthTeamKeepsManagerController.getAvgLengthTeamKeepsManager);
app.get('/api/getUniqueManagers', uniqueManagersController.getUniqueMangers);
app.get('/api/getManagerWasPlayer', managerWasPlayerController.getManagerWasPlayer);
app.get('/api/getHonoredManagersTotal', honoredManagersTotalController.getHonoredManagersTotal);
app.get('/api/getSumDifferentManagersPerTeam', sumDifferentManagersPerTeamController.getSumDifferentManagersPerTeam);
app.post('/api/postSpecificManagerYear', specificManagerYearController.postSpecificManagerYear);
app.post('/api/postMaxGamesManagerCoached', maxGamesManagerCoachedController.postMaxGamesManagerCoached);
//Teams
app.get('/api/cardOne', cardOneController.cardOne);
app.get('/api/cardTwo', cardTwoController.cardTwo);
app.get('/api/cardThree', cardThreeController.cardThree);
app.get('/api/graphOne', graphOneController.graphOne);
app.get('/api/tableTwo', tableTwoController.tableTwo);
app.post('/api/tableThree', tableThreeController.tableThree);
app.post('/api/tableOne', tableOneController.tableOne);
//Positions
app.get('/api/posAppearances', posAppearancescontroller.posAppearances);
app.get('/api/getMaxPlayers', getMaxPlayerscontroller.getMaxPlayers);
app.post('/api/avgSalary', avgSalaryeController.avgSalary);
app.post('/api/posAvgHits', posAvgHitsController.posAvgHits);
app.get('/api/getMaxPosition', getMaxPositionController.getMaxPosition);
app.get('/api/getMaxStrikeOuts', getMaxStrikeOutsController.getMaxStrikeOuts);

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
