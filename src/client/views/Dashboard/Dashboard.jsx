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

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

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

class Dashboard extends React.Component {
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
      uniquePlayerList: [],
      gamesPlayedList: [],
      pitcherChangedPositionsList: [],
      honoredPlayersList: [],
      hitsPerSeasonList: [],
      averageTeamHitsList: [],
      playerSalariesYearList: [],
      managerSalariesYearList: [],
      postseasonWinsTeamList: [],
      postseasonRBIsList: [],
      postseasonSuperstarsList: [],
      customPostseasonStatsList: [],
      customPostseasonGraphList: [],
      // Filter must be integrated into
      filterText: '',
      teamInput: 'NYA',
      teamInputWS: 'NYA',
      open: false
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.onSubmitCustomPostseasonStats = this.handleSubmitCustomPostseasonStats.bind(this);
    this.onSubmitCustomPostseasonGraph = this.handleSubmitCustomPostseasonGraph.bind(this);
    // this.initDetailsList();
    // this.initTotalCountList();
    this.initUniquePlayerList();
    this.initGamesPlayedList();
    this.initPitcherChangedPositionsList();
    this.initHonoredPlayersList();
    this.initHitsPerSeasonList();
    this.initAverageTeamHitsList();
    this.initPlayerSalariesYearList();
    this.initManagerSalariesYearList();
    this.initPostseasonWinsTeamList();
    this.initPostseasonRBIsList();
    this.initPostseasonSuperstarsList();
  }

  initUniquePlayerList = () => {
    fetch('/api/getUniquePlayers')
      .then(results => results.json())
      .then((data) => {
        this.setState({ uniquePlayerList: data });
      });
  }

  initGamesPlayedList = () => {
    fetch('/api/getUniqueGamesPlayed')
      .then(results => results.json())
      .then((data) => {
        this.setState({ gamesPlayedList: data });
      });
  }

  initPitcherChangedPositionsList = () => {
    fetch('/api/getPitcherChangedPositions')
      .then(results => results.json())
      .then((data) => {
        this.setState({ pitcherChangedPositionsList: data });
      });
  }

  initHonoredPlayersList = () => {
    fetch('/api/getHonoredPlayersTotal')
      .then(results => results.json())
      .then((data) => {
        this.setState({ honoredPlayersList: data });
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

  initManagerSalariesYearList = () => {
    fetch('/api/getManagerSalariesYear')
      .then(results => results.json())
      .then((data) => {
        this.setState({ managerSalariesYearList: data });
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

  // handleChangeList = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  handleChangeList = name => event =>{
    this.setState({ [name]: event.target.value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleSubmitList = name => event => {
    e.preventDefault();
    this.handleSubmitCustomPostseasonGraph();
  };

  handleSubmitCustomPostseasonGraph(e) {
    // const params = { team: this.teamD.value };
    const params = { team: this.state.teamInput };
    const urlParams = new URLSearchParams(Object.entries(params));
    e.preventDefault();
    fetch('/api/postCustomPostseasonGraph?' + urlParams, {
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
        this.setState({ customPostseasonGraphList: data });
      });
  }

  handleSubmitCustomPostseasonStats(e) {
    // const params = { year: this.yearD.value };
    const params = { team: this.state.teamInputWS };
    const urlParams = new URLSearchParams(Object.entries(params));
    e.preventDefault();
    fetch('/api/postCustomPostseasonStats?' + urlParams, {
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
        this.setState({ customPostseasonStatsList: data });
      });
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;

    const customPostseasonGraph = this.state.customPostseasonGraphList.map((data, index) => (
      (data.AGE)
    ));

    const customPostseasonGraphLabel = this.state.customPostseasonGraphList.map((data, index) => (
      [data.YEAR]
    ));

    const customPostseasonStats = this.state.customPostseasonStatsList.map((data, index) => (
      [data.YEAR, data.TEAMNAME, data.TOTALRUNS, data.TOTALHITS, data.TOTALDBS, data.TOTALTRIPS, data.TOTALHRS, data.TOTALABS]
    ));

    const countPlayer = this.state.uniquePlayerList.map((data, index) => (
      [data.PLAYERS]
    ));

    const countGamesPlayed = this.state.gamesPlayedList.map((data, index) => (
      [data.GAMES]
    ));

    const countPitcherChangedPositionsTotal = this.state.pitcherChangedPositionsList.map((data, index) => (
      [data.PCHANGE]
    ));

    const countHonoredPlayers = this.state.honoredPlayersList.map((data, index) => (
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

    const countManagerSalariesYear = this.state.managerSalariesYearList.map((data, index) => (
      (data.SALARY)
    ));

    const countManagerSalariesYearLabel = this.state.managerSalariesYearList.map((data, index) => (
      [data.TEAMID]
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

    const hitsPerSeason = {
      data: {
        labels: countHitsPerSeasonLabel,
        // series: [[12, 17, 7, 177, 23, 18, 38]]
        series: [countHitsPerSeason]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 25500,
        high: 45500, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 12,
          right: 0,
          bottom: 0,
          left: 8
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

    const custGraphPostseason = {
      data: {
        labels: customPostseasonGraphLabel,
        // series: [[12, 17, 7, 177, 23, 18, 38]]
        series: [customPostseasonGraph]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 18,
        high: 28, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 12,
          right: 0,
          bottom: 0,
          left: 0
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

    const teamAvgSalary = {
      data: {
        labels: countPlayerSalariesYearLabel,
        series: [countPlayerSalariesYear]
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: 600000,
        high: 5750000,
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

    const managerAvgSalary = {
      data: {
        labels: countManagerSalariesYearLabel,
        series: [countManagerSalariesYear]
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

    const teamPostseasonWins = {
      data: {
        labels: countPostseasonWinsTeamLabel,
        series: [countPostseasonWinsTeam]
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: 3,
        high: 105,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
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

    const postseasonRBIs = {
      data: {
        labels: countPostseasonRBIsLabel,
        // series: [[12, 17, 7, 177, 23, 18, 38]]
        series: [countPostseasonRBIs]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 12,
        high: 360, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 12,
          right: 0,
          bottom: 0,
          left: 0
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
    // const realTable = this.state.detailsList.map((data, index) => (
    //   [data.DIVISIONID, data.DIVISIONNAME, data.CONFERENCEID]
    // ));

    return (
      <div>
        <GridContainer>
          <GridItem xs={4} sm={4} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <img src={logo} width="250" alt="..." />
                </CardIcon>
                <p className={classes.cardCategory}>Major League Baseball</p>
                <h3 className={classes.cardTitle}>Statistics Database</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Create />
                  {' '} A resource for derived statistics representing many aspects of Major League Baseball
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Players</p>
                <h3 className={classes.cardTitle}>{countPlayer}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Unique Players since 1962
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
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
                  Sum of max games in each season since 1968
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
                <p className={classes.cardCategory}>Changing Positions</p>
                <h3 className={classes.cardTitle}>{countPitcherChangedPositionsTotal}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Players who have appeared to pitch and play an infield/outfield position since 1962
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
                <h3 className={classes.cardTitle}>{countHonoredPlayers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Living Players who have received an award
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={hitsPerSeason.data}
                  type="Line"
                  options={hitsPerSeason.options}
                  listener={hitsPerSeason.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Hits Per Season</h4>
                <p className={classes.cardCategory}>
                  {/* <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '} */}
                  Total number of hits by players during each season
                </p>
              </CardBody>
              {/* <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={custGraphPostseason.data}
                  type="Line"
                  options={custGraphPostseason.options}
                  listener={custGraphPostseason.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Minimum Postseason Player Age</h4>
                <p className={classes.cardCategory}>
                  {/* <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '} */}
                  Minimum age of a player who played in the postseason for a specific team each year since 1962
                </p>
              </CardBody>
              <CardFooter chart>
                {/* <form onSubmit={this.onSubmitCustomPostseasonGraph}>
                  <input ref={(ref) => { this.teamD = ref; }} placeholder="Team" type="text" name="team" />
                  <input type="Submit" />
                </form> */}
                <form onSubmit={this.onSubmitCustomPostseasonGraph}>
                {/* <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                /> */}
                  <TextField
                    id="teamD"
                    select
                    label="All possible teams"
                    className={classes.textField}
                    value={this.state.teamInput}
                    // onChange={this.handleChangeList('teamOptions')}
                    onChange={this.handleChangeList('teamInput')}
                    ref={(ref) => { this.teamD = ref; }}
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
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose">
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
                            SELECT RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, RYBROOKS.TEAMS.TEAMNAME, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.R) AS TotalRuns, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.H) AS TotalHits, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.DOUBLES) AS TotalDBs, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.TRIPLES) AS TotalTRIPs, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.HR) AS TotalHRs, 
                            SUM(RYBROOKS.POSTSEASONBATTINGSTATS.AB) AS TotalABs 
                            FROM (RYBROOKS.POSTSEASONBATTINGSTATS 
                            INNER JOIN RYBROOKS.PLAYERS 
                            ON RYBROOKS.PLAYERS.PLAYERID = RYBROOKS.POSTSEASONBATTINGSTATS.PLAYERID) 
                            INNER JOIN RYBROOKS.TEAMS 
                            ON RYBROOKS.TEAMS.TEAMID = RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID 
                            WHERE RYBROOKS.POSTSEASONBATTINGSTATS.TEAMID = :team 
                            GROUP BY RYBROOKS.POSTSEASONBATTINGSTATS.YEAR, RYBROOKS.TEAMS.TEAMNAME 
                            ORDER BY TotalRuns DESC
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
                  title="Team Total Runs in World Series Ranked"
                  subheader="Ranking the total runs scored for each team in the World Series"
                />
              </CardHeader>
              <CardBody>
                <form onSubmit={this.onSubmitCustomPostseasonStats}>
                  <TextField
                    id="teamPost"
                    select
                    label="All possible teams"
                    className={classes.textField}
                    value={this.state.teamInputWS}
                    onChange={this.handleChangeList('teamInputWS')}
                    ref={(ref) => { this.teamWS = ref; }}
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
                </form>
                <Table
                  tableHeaderColor="success"
                  tableHead={['Year', 'Team', 'Runs Scored', 'Hits', 'Doubles', 'Triples', 'Homeruns', 'At Bats']}
                  // tableData={realTable}
                  tableData={customPostseasonStats}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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
              {/* <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter> */}
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={managerAvgSalary.data}
                  type="Bar"
                  options={managerAvgSalary.options}
                  responsiveOptions={managerAvgSalary.responsiveOptions}
                  listener={managerAvgSalary.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Manager Salaries</h4>
                <p className={classes.cardCategory}>
                  Average manager salary paid by each team since 1962
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
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
              {/* <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
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
                  RBIs in the Postseason since 1962
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
                  title="World Series Superstars"
                  subheader="Teams who swept the other team in the World Series"
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
        </GridContainer> */}
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
