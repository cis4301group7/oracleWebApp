/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';
// @material-ui/icons
import Storage from '@material-ui/icons/Storage';
import Search from '@material-ui/icons/Search';
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import Paper from '@material-ui/core/Paper';
import CardHeader1 from '@material-ui/core/CardHeader';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Tasks from '../../components/Tasks/Tasks.jsx';
import CustomTabs from '../../components/CustomTabs/CustomTabs.jsx';
import Danger from '../../components/Typography/Danger.jsx';
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
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsList: [],
      totalCountList: [],
      // Filter must be integrated into
      filterText: '',
      open: false
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initDetailsList();
    this.initTotalCountList();
  }

  initDetailsList = () => {
    fetch('/api/getDetails')
      .then(results => results.json())
      .then((data) => {
        this.setState({ detailsList: data });
      });
  }

  initTotalCountList = () => {
    fetch('/api/getTotalCount')
      .then(results => results.json())
      .then((data) => {
        this.setState({ totalCountList: data });
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

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;

    const divList = this.state.detailsList.map((data, index) => (
      <ul>
        <li key={index.DIVISIONID}>
          {data.DIVISIONID} - {data.DIVISIONNAME} - {data.CONFERENCEID}
        </li>
      </ul>
    ));

    const divTable = this.state.detailsList.map((data, index) => (
      <table>
        <tbody>
          <tr key={index.DIVISIONID}>
            <td>{data.DIVISIONID}</td>
            <td>{data.DIVISIONNAME}</td>
            <td>{data.CONFERENCEID}</td>
          </tr>
        </tbody>
      </table>
    ));

    const countVar = this.state.totalCountList.map((data, index) => (
      [data.FISH]
    ));

    const realTable = this.state.detailsList.map((data, index) => (
      [data.DIVISIONID, data.DIVISIONNAME, data.CONFERENCEID]
    ));

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Storage />
                </CardIcon>
                <p className={classes.cardCategory}>Oracle DB</p>
                <h3 className={classes.cardTitle}>
                  {countVar}
                  {' '}
                  <font size="2">Records</font>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />  
                  <a href="https://github.com/cis4301group7/oracleWebApp/src/server/config/readme.md" target="_blank" rel="noopener noreferrer">
                    Connection ReadMe
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>RYBROOKS.DIVISION</h4>
                <p className={classes.cardCategoryWhite}>
                  SELECT * FROM RYBROOKS.DIVISION;
                </p>
              </CardHeader>
              <CardBody>
                {divTable}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>RYBROOKS.DIVISION</h4>
                <p className={classes.cardCategoryWhite}>
                  SELECT * FROM RYBROOKS.DIVISION;
                </p>
              </CardHeader>
              <CardBody>
                {divList}
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
                              SELECT * FROM RYBROOKS.DIVISION
                            </Typography>
                          </CardBody>
                          <GridContainer>
                            <a href="https://github.com/cis4301group7/oracleWebApp/blob/master/src/server/controllers/details/getDetails.js" target="_blank" rel="noopener noreferrer">
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
                  title="RYBROOKS.DIVISION"
                  subheader="SELECT * FROM RYBROOKS.DIVISION"
                />
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['DIVISIONID', 'DIVISIONNAME', 'CONFERENCEID']}
                  tableData={realTable}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                color="success"
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
                            SELECT * FROM RYBROOKS.DIVISION
                          </Typography>
                        </CardBody>
                        <GridContainer>
                          <a href="https://github.com/cis4301group7/oracleWebApp/blob/master/src/server/controllers/details/getDetails.js" target="_blank" rel="noopener noreferrer">
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
                title="RYBROOKS.DIVISION"
                subheader="SELECT * FROM RYBROOKS.DIVISION"
              />
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['DIVISIONID', 'DIVISIONNAME', 'CONFERENCEID']}
                  tableData={realTable}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
