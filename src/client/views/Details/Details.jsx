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
// @material-ui/icons
import Storage from '@material-ui/icons/Storage';
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

import { bugs, website, server } from '../../variables/general.jsx';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts.jsx';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsList: [],
      totalCountList: [],
      // Filter must be integrated into
      filterText: ''
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

export default withStyles(dashboardStyle)(Details);
