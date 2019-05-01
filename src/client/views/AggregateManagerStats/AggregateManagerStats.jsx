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
import Button from '@material-ui/core/Button';
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
import CardHeader1 from '@material-ui/core/CardHeader';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';

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
  }
});

class AggregateManagerStats extends React.Component {
  // state = {
  //   value: 0
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  // handleChangeIndex = (index) => {
  //   this.setState({ value: index });
  // };
  constructor(props) {
    super(props);
    this.state = {
      uniqueManagerList: [],
      gamesPlayedList: [],
      managerWasPlayerList: [],
      honoredManagersList: [],
      hitsPerSeasonList: [],
      averageTeamHitsList: [],
      playerSalariesYearList: [],
      avgManagerSalariesYearList: [],
      avgManagerSalariesTeamList: [],
      postseasonWinsTeamList: [],
      postseasonRBIsList: [],
      postseasonSuperstarsList: [],
      specificYearManagerList: [],
      // Filter must be integrated into
      filterText: '',
      open: false
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.yearInput = React.createRef();
    this.onSubmitManagerYear = this.handleSubmitManagerYear.bind(this);
    this.initUniqueManagerList();
    // this.initGamesPlayedList();
    this.initManagerWasPlayerList();
    this.initHonoredManagersList();
    // this.initHitsPerSeasonList();
    // this.initAverageTeamHitsList();
    // this.initPlayerSalariesYearList();
    this.initAvgManagerSalariesYearList();
    this.initAvgManagerSalariesTeamList();
    // this.initPostseasonWinsTeamList();
    // this.initPostseasonRBIsList();
    // this.initPostseasonSuperstarsList();
  }

  initUniqueManagerList = () => {
    fetch('/api/getUniqueManagers')
      .then(results => results.json())
      .then((data) => {
        this.setState({ uniqueManagerList: data });
      });
  }

  initGamesPlayedList = () => {
    fetch('/api/getUniqueGamesPlayed')
      .then(results => results.json())
      .then((data) => {
        this.setState({ gamesPlayedList: data });
      });
  }

  initManagerWasPlayerList = () => {
    fetch('/api/getManagerWasPlayer')
      .then(results => results.json())
      .then((data) => {
        this.setState({ managerWasPlayerList: data });
      });
  }

  initHonoredManagersList = () => {
    fetch('/api/getHonoredManagersTotal')
      .then(results => results.json())
      .then((data) => {
        this.setState({ honoredManagersList: data });
      });
  }

  initHitsPerSeasonList = () => {
    fetch('/api/getHitsPerSeason')
      .then(results => results.json())
      .then((data) => {
        this.setState({ hitsPerSeasonList: data });
      });
  }

  initAverageTeamHitsList = () => {
    fetch('/api/getAverageTeamHits')
      .then(results => results.json())
      .then((data) => {
        this.setState({ averageTeamHitsList: data });
      });
  }

  initPlayerSalariesYearList = () => {
    fetch('/api/getPlayerSalariesYear')
      .then(results => results.json())
      .then((data) => {
        this.setState({ playerSalariesYearList: data });
      });
  }

  initAvgManagerSalariesTeamList = () => {
    fetch('/api/getAvgManagerSalariesTeam')
      .then(results => results.json())
      .then((data) => {
        this.setState({ avgManagerSalariesTeamList: data });
      });
  }

  initAvgManagerSalariesYearList = () => {
    fetch('/api/getAvgManagerSalariesYear')
      .then(results => results.json())
      .then((data) => {
        this.setState({ avgManagerSalariesYearList: data });
      });
  }

  initPostseasonWinsTeamList = () => {
    fetch('/api/getPostseasonWinsTeam')
      .then(results => results.json())
      .then((data) => {
        this.setState({ postseasonWinsTeamList: data });
      });
  }

  initPostseasonRBIsList = () => {
    fetch('/api/getPostseasonRBIs')
      .then(results => results.json())
      .then((data) => {
        this.setState({ postseasonRBIsList: data });
      });
  }

  initPostseasonSuperstarsList = () => {
    fetch('/api/getPostseasonSuperstars')
      .then(results => results.json())
      .then((data) => {
        this.setState({ postseasonSuperstarsList: data });
      });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleSubmitManagerYear(e) {
    const params = { year: this.yearD.value };
    const urlParams = new URLSearchParams(Object.entries(params));
    e.preventDefault();
    fetch('/api/postSpecificManagerYear?' + urlParams, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // body: {
      //   year: this.yearD.value
      // }
      // data: {
      //   year: this.yearD.value
      // }
    })
      // .then(function(response) {
      //   return response.json()
      // }).then(function(body) {
      //   console.log(body);
      // });
      .then(results => results.json())
      .then((data) => {
        this.setState({ specificYearManagerList: data });
      });
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;

    const specificManagers = this.state.specificYearManagerList.map((data, index) => (
      [data.MANAGERS]
    ));

    const countManagers = this.state.uniqueManagerList.map((data, index) => (
      [data.MANAGERS]
    ));

    const countGamesPlayed = this.state.gamesPlayedList.map((data, index) => (
      [data.GAMES]
    ));

    const countManagerWasPlayerTotal = this.state.managerWasPlayerList.map((data, index) => (
      [data.MCHANGE]
    ));

    const countHonoredManagers = this.state.honoredManagersList.map((data, index) => (
      [data.LIVING]
    ));

    const countHitsPerSeason = this.state.hitsPerSeasonList.map((data, index) => (
      (data.HITS)
    ));

    const countHitsPerSeasonLabel = this.state.hitsPerSeasonList.map((data, index) => (
      [data.YEAR]
    ));

    const countAverageTeamHits = this.state.averageTeamHitsList.map((data, index) => (
      [data.FISH]
    ));

    const countPlayerSalariesYear = this.state.playerSalariesYearList.map((data, index) => (
      (data.SALARY)
    ));

    const countPlayerSalariesYearLabel = this.state.playerSalariesYearList.map((data, index) => (
      [data.TEAMID]
    ));

    const countAvgManagerSalariesTeam = this.state.avgManagerSalariesTeamList.map((data, index) => (
      (data.SALARY)
    ));

    const countAvgManagerSalariesTeamLabel = this.state.avgManagerSalariesTeamList.map((data, index) => (
      [data.TEAMID]
    ));

    const countAvgManagerSalariesYear = this.state.avgManagerSalariesYearList.map((data, index) => (
      (data.SALARY)
    ));

    const countAvgManagerSalariesYearLabel = this.state.avgManagerSalariesYearList.map((data, index) => (
      [data.YEAR]
    ));

    const countPostseasonWinsTeam = this.state.postseasonWinsTeamList.map((data, index) => (
      (data.WINS)
    ));

    const countPostseasonWinsTeamLabel = this.state.postseasonWinsTeamList.map((data, index) => (
      [data.TEAMID]
    ));

    const countPostseasonRBIs = this.state.postseasonRBIsList.map((data, index) => (
      (data.RBI)
    ));

    const countPostseasonRBIsLabel = this.state.postseasonRBIsList.map((data, index) => (
      [data.YEAR]
    ));

    const countPostseasonSuperstars = this.state.postseasonSuperstarsList.map((data, index) => (
      [data.YEAR, data.ROUND, data.WINTEAM, data.LOSETEAM]
    ));

    const managerAvgSalaryYear = {
      data: {
        labels: countAvgManagerSalariesYearLabel,
        // series: [[12, 17, 7, 177, 23, 18, 38]]
        series: [countAvgManagerSalariesYear]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 350000,
        high: 2000000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 12,
          right: 0,
          bottom: 0,
          left: 16
        }
      },
      // for animation
      animation: {
        draw: function(data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };

    const managerAvgSalaryTeam = {
      data: {
        labels: countAvgManagerSalariesTeamLabel,
        series: [countAvgManagerSalariesTeam]
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: 150000,
        high: 5300000,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 16
        }
      },
      responsiveOptions: [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ],
      animation: {
        draw: function(data) {
          if (data.type === "bar") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };

    return (
      <div>
        {/* <GridContainer>
          <GridItem xs={8} sm={8} md={8}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <img src={logo} width="250" alt="..." />
                </CardIcon>
                <p className={classes.cardCategory}>Major League Baseball</p>
                <h3 className={classes.cardTitle}>Statistics Database</h3>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer> */}
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Managers</p>
                <h3 className={classes.cardTitle}>{countManagers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Unique Managers since 1962
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>spa</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Games</p>
                <h3 className={classes.cardTitle}> {countGamesPlayed}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Total of max games in a season since 1968
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>warning</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Once a Player</p>
                <h3 className={classes.cardTitle}>{countManagerWasPlayerTotal}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Managers who were once a player
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
                <p className={classes.cardCategory}>Honored</p>
                <h3 className={classes.cardTitle}>{countHonoredManagers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Living Managers who have received an award
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
                            SELECT YEAR, ROUND, x.TEAMNAME AS WINTEAM, y.TEAMNAME AS LOSETEAM 
                            FROM RYBROOKS.POSTSEASONSERIES c 
                            INNER JOIN RYBROOKS.TEAMS x 
                            ON x.TEAMID = c.TEAMIDWINNER 
                            INNER JOIN RYBROOKS.TEAMS y 
                            ON y.TEAMID = c.TEAMIDLOSER 
                            WHERE WINS >= 4 AND LOSSES = 0 AND ROUND = 'WS'
                            ORDER BY YEAR ASC
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
                  title="Managers in a Specific Year"
                  subheader="Managers who were active in the year given"
                />
              </CardHeader>
              <CardBody>
                {/* <form onSubmit={this.onSubmitManagerYear}>
                  <input type="text" placeholder="Year" ref={this.yearInput} />
                  <input type="submit" />
                </form> */}
                <form onSubmit={this.onSubmitManagerYear}>
                  <input ref={(ref) => { this.yearD = ref; }} placeholder="YEAR" type="text" name="year" />
                  <input type="Submit" />
                </form>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Year', 'Round', 'Winning Team', 'Losing Team']}
                  // tableData={realTable}
                  tableData={specificManagers}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="rose">
                <ChartistGraph
                  className="ct-chart"
                  data={managerAvgSalaryYear.data}
                  type="Line"
                  options={managerAvgSalaryYear.options}
                  listener={managerAvgSalaryYear.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Average Manager Salaries</h4>
                <p className={classes.cardCategory}>
                  {/* <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '} */}
                  The average of all manager salaries paid each year since 1984
                </p>
              </CardBody>
              {/* <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter> */}
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={teamAvgSalary.data}
                  type="Bar"
                  options={teamAvgSalary.options}
                  responsiveOptions={teamAvgSalary.responsiveOptions}
                  listener={teamAvgSalary.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Team Player Salaries</h4>
                <p className={classes.cardCategory}>
                  Average salary paid by each team to players since 1962
                </p>
              </CardBody>
            </Card>
          </GridItem> */}
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={managerAvgSalaryTeam.data}
                  type="Bar"
                  options={managerAvgSalaryTeam.options}
                  responsiveOptions={managerAvgSalaryTeam.responsiveOptions}
                  listener={managerAvgSalaryTeam.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Team Manager Salaries</h4>
                <p className={classes.cardCategory}>
                  Average manager salaries paid by each team since 1974
                </p>
              </CardBody>
              {/* <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={teamPostseasonWins.data}
                  type="Bar"
                  options={teamPostseasonWins.options}
                  responsiveOptions={teamPostseasonWins.responsiveOptions}
                  listener={teamPostseasonWins.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Postseason Wins by Team</h4>
                <p className={classes.cardCategory}>
                  Total Wins in the Postseason by each team since 1962
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={postseasonRBIs.data}
                  type="Line"
                  options={postseasonRBIs.options}
                  listener={postseasonRBIs.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Postseason RBIs</h4>
                <p className={classes.cardCategory}>
                  RBIs in the Postseason since 1980
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
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
                            SELECT YEAR, ROUND, x.TEAMNAME AS WINTEAM, y.TEAMNAME AS LOSETEAM 
                            FROM RYBROOKS.POSTSEASONSERIES c 
                            INNER JOIN RYBROOKS.TEAMS x 
                            ON x.TEAMID = c.TEAMIDWINNER 
                            INNER JOIN RYBROOKS.TEAMS y 
                            ON y.TEAMID = c.TEAMIDLOSER 
                            WHERE WINS >= 4 AND LOSSES = 0 AND ROUND = 'WS'
                            ORDER BY YEAR ASC
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
                  title="Longest Serving Managers"
                  subheader="Managers ranked in order of how long they served in the league"
                />
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Year', 'Round', 'Winning Team', 'Losing Team']}
                  // tableData={realTable}
                  tableData={countPostseasonSuperstars}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
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
                            SELECT YEAR, ROUND, x.TEAMNAME AS WINTEAM, y.TEAMNAME AS LOSETEAM 
                            FROM RYBROOKS.POSTSEASONSERIES c 
                            INNER JOIN RYBROOKS.TEAMS x 
                            ON x.TEAMID = c.TEAMIDWINNER 
                            INNER JOIN RYBROOKS.TEAMS y 
                            ON y.TEAMID = c.TEAMIDLOSER 
                            WHERE WINS >= 4 AND LOSSES = 0 AND ROUND = 'WS'
                            ORDER BY YEAR ASC
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
                  title="Shortest Serving Managers"
                  subheader="Managers ranked in order by how short they served in the league"
                />
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Year', 'Round', 'Winning Team', 'Losing Team']}
                  // tableData={realTable}
                  tableData={countPostseasonSuperstars}
                />
              </CardBody>
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
                            SELECT YEAR, ROUND, x.TEAMNAME AS WINTEAM, y.TEAMNAME AS LOSETEAM 
                            FROM RYBROOKS.POSTSEASONSERIES c 
                            INNER JOIN RYBROOKS.TEAMS x 
                            ON x.TEAMID = c.TEAMIDWINNER 
                            INNER JOIN RYBROOKS.TEAMS y 
                            ON y.TEAMID = c.TEAMIDLOSER 
                            WHERE WINS >= 4 AND LOSSES = 0 AND ROUND = 'WS'
                            ORDER BY YEAR ASC
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
                  title="Multiple Managers in a Year"
                  subheader="Teams that had multiple managers in the same year"
                />
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Year', 'Round', 'Winning Team', 'Losing Team']}
                  // tableData={realTable}
                  tableData={countPostseasonSuperstars}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <Button color="default" className={classes.title}>
                  <a href="currentprojects">
                    <h3 className={classes.cardTitleWhite}>Projects In Progress</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Team Members', 'Started', 'Due by', 'Days Remaining', 'Go to']}
                  tableData={[
                    ['1', 'Environmental Cleanup', '3', 'June 31st', 'December 5th', '31', <a href='currentprojects'> <KeyboardArrowRight /></a>],
                    ['2', 'Fishing Location Detection', '4', 'September 15th', 'February 14th', '110', <a href='currentprojects'> <KeyboardArrowRight /></a>],
                    ['3', 'Electronic Recycle Program', '0', 'October 1st', 'December 30th', '45', <a href='currentprojects'> <KeyboardArrowRight /></a>],
                    ['4', 'National Defense Spending Tracker', '2', 'November 2nd', 'January 7th', '54', <a href='currentprojects'> <KeyboardArrowRight /></a>]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <Button color="default" className={classes.title}>
                  <a href="projectproposals">
                    <h3 className={classes.cardTitleWhite}>Active Project Proposals</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Estimated Members', 'Workload', 'Need by', 'Start by', 'Go to']}
                  tableData={[
                    ['1', 'Candy Preference Survey', '3', 'Medium', 'December 24th', 'November 18th',<a href='projectproposals'> <KeyboardArrowRight /></a>],
                    ['2', 'Home Improvement Resource Finder', '4', 'Large', 'February 2nd', 'December 1st', <a href='projectproposals'> <KeyboardArrowRight /></a>],
                    ['3', 'Las Vegas Petting Sitting Matcher', '4', 'Medium', 'March 25th', 'December 5th', <a href='projectproposals'> <KeyboardArrowRight /></a>]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

AggregateManagerStats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AggregateManagerStats);
