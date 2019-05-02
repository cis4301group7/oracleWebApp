/* eslint-disable prefer-template */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';
// React plugin for creating charts
var Chartist = require("chartist");
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// @material-ui/icons
import Create from '@material-ui/icons/Create';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AccessTime from '@material-ui/icons/AccessTime';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Accessibility from '@material-ui/icons/Accessibility';
import Code from '@material-ui/icons/Code';
import FindInPage from '@material-ui/icons/FindInPage';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
// core components
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CardHeader1 from '@material-ui/core/CardHeader';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import { bugs, website, server } from '../../variables/general.jsx';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts.jsx';

import logo from '../../assets/img/mlb-logo.jpg';

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// TODO: Finish connecting functions to pull data for charts
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  paper: {
    position: 'absolute',
    color: "#000000",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const teamOptions = [
  {
    value: 'ARI',
    label: 'Arizona Diamondbacks',
  },
  {
    value: 'ATL',
    label: 'Atlanta Braves',
  },
  {
    value: 'BAL',
    label: 'Baltimore Orioles',
  },
  {
    value: 'BOS',
    label: 'Boston Red Sox',
  },
  {
    value: 'CHA',
    label: 'Chicago White Sox',
  },
  {
    value: 'CHN',
    label: 'Chicago Cubs',
  },
  {
    value: 'CIN',
    label: 'Cincinnati Reds',
  },
  {
    value: 'CLE',
    label: 'Cleveland Indians',
  },
  {
    value: 'COL',
    label: 'Colorado Rockies',
  },
  {
    value: 'DET',
    label: 'Detroit Tigers',
  },
  {
    value: 'HOU',
    label: 'Houston Astros',
  },
  {
    value: 'KCA',
    label: 'Kansas City Royals',
  },
  {
    value: 'CAL',
    label: 'LA Angels (older)',
  },
  {
    value: 'ANA',
    label: 'LA Angels (old)',
  },
  {
    value: 'LAA',
    label: 'LA Angels',
  },
  {
    value: 'LAN',
    label: 'LA Dodgers',
  },
  {
    value: 'FLO',
    label: 'Miami Marlins',
  },
  {
    value: 'ML4',
    label: 'Milwaukee Brewers (old)',
  },
  {
    value: 'MIL',
    label: 'Milwaukee Brewers',
  },
  {
    value: 'MIN',
    label: 'Minnesota Twins',
  },
  {
    value: 'NYA',
    label: 'NY Yankees',
  },
  {
    value: 'NYN',
    label: 'NY Mets',
  },
  {
    value: 'OAK',
    label: 'Oakland Athletics',
  },
  {
    value: 'PHI',
    label: 'Philadelphia Phillies',
  },
  {
    value: 'PIT',
    label: 'Pittsburgh Pirates',
  },
  {
    value: 'SDN',
    label: 'San Diego Padres',
  },
  {
    value: 'SFN',
    label: 'San Francisco Giants',
  },
  {
    value: 'SEA',
    label: 'Seattle Mariners',
  },
  {
    value: 'SLN',
    label: 'St Louis Cardinals',
  },
  {
    value: 'TBA',
    label: 'Tampa Bay Rays',
  },
  {
    value: 'TEX',
    label: 'Texas Rangers',
  },
  {
    value: 'TOR',
    label: 'Toronto Blue Jays',
  },
  {
    value: 'MON',
    label: 'Washington Nationals (old)',
  },
  {
    value: 'WAS',
    label: 'Washington Nationals',
  },
];

const yearOptions = [
  {
    value: '1962',
    label: '1962',
  },
  {
    value: '1963',
    label: '1963',
  },
  {
    value: '1964',
    label: '1964',
  },
  {
    value: '1965',
    label: '1965',
  },
  {
    value: '1966',
    label: '1966',
  },
  {
    value: '1967',
    label: '1967',
  },
  {
    value: '1968',
    label: '1968',
  },
  {
    value: '1969',
    label: '1969',
  },
  {
    value: '1970',
    label: '1970',
  },
  {
    value: '1971',
    label: '1971',
  },
  {
    value: '1972',
    label: '1972',
  },
  {
    value: '1973',
    label: '1973',
  },
  {
    value: '1974',
    label: '1974',
  },
  {
    value: '1975',
    label: '1975',
  },
  {
    value: '1976',
    label: '1976',
  },
  {
    value: '1977',
    label: '1977',
  },
  {
    value: '1978',
    label: '1978',
  },
  {
    value: '1979',
    label: '1979',
  },
  {
    value: '1980',
    label: '1980',
  },
  {
    value: '1981',
    label: '1981',
  },
  {
    value: '1982',
    label: '1982',
  },
  {
    value: '1983',
    label: '1983',
  },
  {
    value: '1984',
    label: '1984',
  },
  {
    value: '1985',
    label: '1985',
  },
  {
    value: '1986',
    label: '1986',
  },
  {
    value: '1987',
    label: '1987',
  },
  {
    value: '1988',
    label: '1988',
  },
  {
    value: '1989',
    label: '1989',
  },
  {
    value: '1990',
    label: '1990',
  },
  {
    value: '1991',
    label: '1991',
  },
  {
    value: '1992',
    label: '1992',
  },
  {
    value: '1993',
    label: '1993',
  },
  {
    value: '1994',
    label: '1994',
  },
  {
    value: '1995',
    label: '1995',
  },
  {
    value: '1996',
    label: '1996',
  },
  {
    value: '1997',
    label: '1997',
  },
  {
    value: '1998',
    label: '1998',
  },
  {
    value: '1999',
    label: '1999',
  },
  {
    value: '2000',
    label: '2000',
  },
  {
    value: '2001',
    label: '2001',
  },
  {
    value: '2002',
    label: '2002',
  },
  {
    value: '2003',
    label: '2003',
  },
  {
    value: '2004',
    label: '2004',
  },
  {
    value: '2005',
    label: '2005',
  },
  {
    value: '2006',
    label: '2006',
  },
  {
    value: '2007',
    label: '2007',
  },
  {
    value: '2008',
    label: '2008',
  },
  {
    value: '2009',
    label: '2009',
  },
  {
    value: '2010',
    label: '2010',
  },
  {
    value: '2011',
    label: '2011',
  },
  {
    value: '2012',
    label: '2012',
  },
  {
    value: '2013',
    label: '2013',
  },
  {
    value: '2014',
    label: '2014',
  },
  {
    value: '2015',
    label: '2015',
  },
];

class PositionStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueManagerList: [],
      gamesPlayedList: [],
      managerWasPlayerList: [],
      honoredManagersList: [],
      hitsPerSeasonList: [],
      averageTeamHitsList: [],
      postseasonWinsTeamList: [],
      postseasonRBIsList: [],
      postseasonSuperstarsList: [],
      specificYearManagerList: [],
      sumWinsManagerTopList: [],
      maxGamesManagerCoachedList: [],
      teamInput: 'NYA',
      yearInput: '2000',
      // Filter must be integrated into
      filterText: '',
      open: false,
      open1: false,
      open2: false
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.yearInput = React.createRef();
    this.onSubmitManagerYear = this.handleSubmitManagerYear.bind(this);
    this.onSubmitManagerMax = this.handleSubmitMaxManager.bind(this);
    this.initUniqueManagerList();
    this.initManagerWasPlayerList();
    this.initHonoredManagersList();
    this.initSumWinsManagerTopList();
  }

  initUniqueManagerList = () => {
    fetch('/api/getMaxplayers')
      .then(results => results.json())
      .then((data) => {
        this.setState({ uniqueManagerList: data });
      });
  }

  initManagerWasPlayerList = () => {
    fetch('/api/getMaxPosition')
      .then(results => results.json())
      .then((data) => {
        this.setState({ managerWasPlayerList: data });
      });
  }

  initHonoredManagersList = () => {
    fetch('/api/getMaxStrikeOuts')
      .then(results => results.json())
      .then((data) => {
        this.setState({ honoredManagersList: data });
      });
  }


  initSumWinsManagerTopList = () => {
    fetch('/api/posAppearances')
      .then(results => results.json())
      .then((data) => {
        this.setState({ sumWinsManagerTopList: data });
      });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleOpen1 = () => {
    this.setState({ open1: true });
  };

  handleOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeList = name => event =>{
    this.setState({ [name]: event.target.value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleSubmitManagerYear(e) {
    const params = { year: this.state.yearInput };
    const urlParams = new URLSearchParams(Object.entries(params));
    e.preventDefault();
    fetch('/api/posAvgHits?' + urlParams, {
      method: 'POST',
    })
      .then(results => results.json())
      .then((data) => {
        this.setState({ specificYearManagerList: data });
      });
  }

  handleSubmitMaxManager(e) {
    const params = { team: this.state.teamInput };
    const urlParams = new URLSearchParams(Object.entries(params));
    e.preventDefault();
    fetch('/api/avgsalary?' + urlParams, {
      method: 'POST',
    })
      .then(results => results.json())
      .then((data) => {
        this.setState({ maxGamesManagerCoachedList: data });
      });
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;

    const specificManagers = this.state.specificYearManagerList.map((data, index) => (
      [data.POSNAME, data.PLAYER, data.TEAM, data.AVGHITS]
    ));

    const countManagers = this.state.uniqueManagerList.map((data, index) => (
      [data.NUMPLAYERS]
    ));

    const countManagerWasPlayerTotal = this.state.managerWasPlayerList.map((data, index) => (
      [data.POSNAME]
    ));

    const countHonoredManagers = this.state.honoredManagersList.map((data, index) => (
      [data.YEARSO]
    ));


    const countWinsManagerTop = this.state.sumWinsManagerTopList.map((data, index) => (
      [data.POSID, data.POSNAME, data.PLAYERID, data.APPEARANCES]
    ));

    const countMaxGamesManagerCoached = this.state.maxGamesManagerCoachedList.map((data, index) => (
      [data.AVGSALARY, data.PLAYER, data.POSNAME]
    ));

    

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Max Players</p>
                <h3 className={classes.cardTitle}>{countManagers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Number of players in max position
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>warning</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Highest Losing Position</p>
                <h3 className={classes.cardTitle}>{countManagerWasPlayerTotal}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Position with the most game losses since 1962
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <SentimentSatisfiedAlt />
                </CardIcon>
                <p className={classes.cardCategory}>Max Strike Outs</p>
                <h3 className={classes.cardTitle}>{countHonoredManagers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Year of the max number of strike outs by pitchers since 1962
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
         
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <CardHeader1
                  classes={{
                    title: classes.cardTitleWhite,
                  }}
                  action={(
                    <div align="right">
                      <IconButton color="primary" onClick={this.handleOpen1}>
                        <Code />
                      </IconButton>
                      <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open1}
                        onClose={this.handleClose1}
                      >
                        <div style={getModalStyle()} className={classes.paper}>
                          <Typography variant="h4" id="modal-title">
                            SQL
                          </Typography>
                          <CardBody>
                            <Typography variant="subtitle4" id="simple-modal-description">
                            SELECT RYBROOKS.MANAGERS.PLAYERID AS PLAYERID, NAMEFIRST, NAMELAST, 
                            SUM(RYBROOKS.MANAGERS.W) AS WINS, SUM(RYBROOKS.MANAGERS.L) AS LOSSES, 
                            CAST(round(((SUM(RYBROOKS.MANAGERS.W)/SUM(RYBROOKS.MANAGERS.G))*100),2) as decimal(16,2)) AS WINPCT, 
                            RA, HA, WSWIN, LGWIN, DIVWIN, WCWIN 
                            FROM RYBROOKS.MANAGERS 
                            INNER JOIN RYBROOKS.PLAYERS 
                            ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID 
                            INNER JOIN RYBROOKS.TEAMSTATS 
                            ON RYBROOKS.TEAMSTATS.YEAR = RYBROOKS.MANAGERS.YEAR 
                            AND RYBROOKS.TEAMSTATS.TEAMID = RYBROOKS.MANAGERS.TEAMID 
                            WHERE RYBROOKS.MANAGERS.YEAR = :year 
                            GROUP BY RYBROOKS.MANAGERS.PLAYERID, 
                            NAMEFIRST, NAMELAST, RA, HA, WSWIN, LGWIN, DIVWIN, WCWIN 
                            ORDER BY WSWIN DESC, LGWIN DESC, DIVWIN DESC, 
                            WCWIN DESC, WINPCT DESC, RA ASC, HA ASC
                            </Typography>
                          </CardBody>
                          <GridContainer>
                            <a href="https://github.com/cis4301group7/oracleWebApp/blob/master/src/server/controllers/home/getPostseasonSuperstars.js" target="_blank" rel="noopener noreferrer">
                              <Button color="primary">
                                Source Code
                              </Button>
                            </a>
                          </GridContainer>
                        </div>
                      </Modal>
                    </div>
                  )
                  }
                  title="Best avg batting hits per year"
                  subheader="Beast batting averages by postition by year"
                />
              </CardHeader>
              <CardBody>
                <form onSubmit={this.onSubmitManagerYear}>
                  <TextField
                    id="yearD"
                    select
                    label="All possible years"
                    className={classes.textField}
                    value={this.state.yearInput}
                    // onChange={this.handleChangeList('teamOptions')}
                    onChange={this.handleChangeList('yearInput')}
                    ref={(ref) => { this.yearD = ref; }}
                    // onChange={this.onSubmitCustomPostseasonGraph}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    // helperText="Please select an option"
                    margin="normal"
                  >
                    {yearOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button color="primary" type="submit">
                    Update
                  </Button>
                  {/* <input type="Submit" /> */}
                </form>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Position Name', 'PlayerID', 'TeamID', 'Average Batting Hits']}
                  // tableData={realTable}
                  tableData={specificManagers}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
         
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <CardHeader1
                  classes={{
                    title: classes.cardTitleWhite,
                  }}
                  action={(
                    <div align="right">
                      <IconButton color="primary" onClick={this.handleOpen}>
                        <Code />
                      </IconButton>
                      <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                      >
                        <div style={getModalStyle()} className={classes.paper}>
                          <Typography variant="h4" id="modal-title">
                            SQL
                          </Typography>
                          <CardBody>
                            <Typography variant="subtitle4" id="simple-modal-description">
                            SELECT RYBROOKS.MANAGERS.PLAYERID AS PLAYERID, NAMEFIRST, NAMELAST, 
                            SUM(distinct(RYBROOKS.MANAGERS.W)) AS WINS, SUM(distinct(RYBROOKS.MANAGERS.L)) AS LOSSES, 
                            CAST(round(((SUM(W)/SUM(G))*100),1) as decimal(8,2)) AS WINPCT, 
                            COUNT(AWARDID) AS AWARDS 
                            FROM RYBROOKS.MANAGERS 
                            JOIN RYBROOKS.PLAYERS 
                            ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERS.PLAYERID 
                            JOIN RYBROOKS.MANAGERAWARDS 
                            ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.MANAGERAWARDS.PLAYERID 
                            JOIN RYBROOKS.HALLOFFAME 
                            ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.HALLOFFAME.PLAYERID 
                            JOIN RYBROOKS.TEAMS 
                            ON RYBROOKS.MANAGERS.TEAMID = RYBROOKS.TEAMS.TEAMID 
                            WHERE INDUCTED = 'Y' 
                            GROUP BY RYBROOKS.MANAGERS.PLAYERID, NAMEFIRST, NAMELAST 
                            ORDER BY WINS DESC, AWARDS DESC, SUM(G) DESC
                            </Typography>
                          </CardBody>
                          <GridContainer>
                            <a href="https://github.com/cis4301group7/oracleWebApp/blob/master/src/server/controllers/home/getPostseasonSuperstars.js" target="_blank" rel="noopener noreferrer">
                              <Button color="primary">
                                Source Code
                              </Button>
                            </a>
                          </GridContainer>
                        </div>
                      </Modal>
                    </div>
                  )
                  }
                  title="Players with most appearances in the same position"
                  subheader="Ranked List of top 25 players who have appeared in the same position more than 19 times"
                />
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="info"
                  tableHead={['PositionID', 'Position Name', 'Player ID', 'Number of Appearances']}
                  // tableData={realTable}
                  tableData={countWinsManagerTop}
                />
              </CardBody>
            </Card>
          </GridItem>
          
         
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <CardHeader1
                  classes={{
                    title: classes.cardTitleWhite,
                  }}
                  action={(
                    <div align="right">
                      <IconButton color="primary" onClick={this.handleOpen2}>
                        <Code />
                      </IconButton>
                      <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open2}
                        onClose={this.handleClose2}
                      >
                        <div style={getModalStyle()} className={classes.paper}>
                          <Typography variant="h4" id="modal-title">
                            SQL
                          </Typography>
                          <CardBody>
                            <Typography variant="subtitle4" id="simple-modal-description">
                            SELECT AVGSALARY, PLAYER, POSNAME FROM ((SELECT AVG(SALARY) AS AVGSALARY, APPEARANCES.PLAYERID AS PLAYER, APPEARANCES.POSITIONID AS POSID
                            FROM RYBROOKS.SALARIES JOIN RYBROOKS.APPEARANCES 
                            ON SALARIES.PLAYERID = APPEARANCES.PLAYERID
                            WHERE APPEARANCES.TEAMID = :team
                            GROUP BY APPEARANCES.PLAYERID, APPEARANCES.POSITIONID
                            ORDER BY AVG(SALARY) FETCH NEXT 10 ROWS ONLY) JOIN 
                            (SELECT POSITIONS.POSITIONNAME AS POSNAME, POSITIONS.POSITIONID AS POSID2 FROM RYBROOKS.POSITIONS) 
                            ON POSID2 = POSID)
                            </Typography>
                          </CardBody>
                          <GridContainer>
                            <a href="https://github.com/cis4301group7/oracleWebApp/blob/master/src/server/controllers/home/getPostseasonSuperstars.js" target="_blank" rel="noopener noreferrer">
                              <Button color="primary">
                                Source Code
                              </Button>
                            </a>
                          </GridContainer>
                        </div>
                      </Modal>
                    </div>
                  )
                  }
                  title="Average player salary per position"
                  subheader="Top 10 highest player salary according to their position and team"
                />
              </CardHeader>
              <CardBody>
                <form onSubmit={this.onSubmitManagerMax}>
                  <TextField
                    id="teamD"
                    select
                    label="All possible teams"
                    className={classes.textField}
                    value={this.state.teamInput}
                    // onChange={this.handleChangeList('teamOptions')}
                    onChange={this.handleChangeList('teamInput')}
                    ref={(ref) => { this.yearD = ref; }}
                    // onChange={this.onSubmitCustomPostseasonGraph}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    // helperText="Please select an option"
                    margin="normal"
                  >
                    {teamOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button color="primary" type="submit">
                    Update
                  </Button>
                  {/* <input type="Submit" /> */}
                </form>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['Average Salary', 'Player ID', 'Position Name']}
                  // tableData={realTable}
                  tableData={countMaxGamesManagerCoached}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

PositionStats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PositionStats);
