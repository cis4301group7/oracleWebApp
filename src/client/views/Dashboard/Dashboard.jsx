/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';
// React plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import Create from '@material-ui/icons/Create';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Accessibility from '@material-ui/icons/Accessibility';
import FindInPage from '@material-ui/icons/FindInPage';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
// core components
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

// TODO: Finish connecting functions to pull data for charts

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>spa</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Welcome Back!</p>
                <h3 className={classes.cardTitle}> User</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Create />
                  <a href="user"> Edit your profile</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Project Proposals Needing a Team</p>
                <h3 className={classes.cardTitle}>3</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <FindInPage />
                  <a href="findateam"> Find a Team</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>warning</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Projects In Progress</p>
                <h3 className={classes.cardTitle}>4</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  <a href="currentprojects">Current Projects</a>
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
                <p className={classes.cardCategory}>Surveys</p>
                <h3 className={classes.cardTitle}>7</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <FindInPage />  
                  <a href="surveys">Surveys</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
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
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
