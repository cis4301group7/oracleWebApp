/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import GridFS from 'gridfs-stream';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
import Clear from '@material-ui/icons/Clear';
import Archive from '@material-ui/icons/Archive';
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

class Surveys extends React.Component {
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
                <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Surveys to complete</p>
                <h3 className={classes.cardTitle}> 4</h3>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <SentimentSatisfiedAlt />
                </CardIcon>
                <p className={classes.cardCategory}>Review Student Surveys</p>
                <h3 className={classes.cardTitle}>3</h3>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <Button color="default" className={classes.title}>
                  <a href="currentprojects">
                    <h3 className={classes.cardTitleWhite}>Completed Projects</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Team Members', 'Completed on', 'Complete Survey', 'View Project', 'Archive']}
                  tableData={[
                    ['1', 'Candy Labeling Visualizer', '3', 'October 15th, 2018', <a href='newsurvey'> <ArrowUpward /> </a>, <a href='projectmanagement'> <KeyboardArrowRight /></a>, <a href='pastprojectgallery'> <Archive /></a>],
                    ['2', 'Marble Table Local Polishing Service', '4', 'May 1st, 2018', <a href='newsurvey'> <ArrowUpward /> </a>, <a href='projectmanagement'> <KeyboardArrowRight /></a>, <a href='pastprojectgallery'> <Archive /></a>],
                    ['3', 'Bandwith Reduction Test', '2','June 1st, 2018', <a href='newsurvey'> <ArrowUpward /> </a>, <a href='projectmanagement'> <KeyboardArrowRight /></a>, <a href='pastprojectgallery'> <Archive /></a>],
                    ['4', 'National Defense Spending Tracker', '2', 'January 15th, 2018', <a href='newsurvey'> <ArrowUpward /> </a>, <a href='projectmanagement'> <KeyboardArrowRight /></a>, <a href='pastprojectgallery'> <Archive /></a>]
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
                    <h3 className={classes.cardTitleWhite}>Review Student Surveys</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Project Name', 'Submitted on', 'Review', 'Delete']}
                  tableData={[
                    ['1', 'Christopher Nolan', 'Candy Labeling Visualizer', 'October 21st @ 21:34 GMT', <a href='surveyresults'><KeyboardArrowRight /></a>, <a href='surveys'> <Clear /></a>],
                    ['2', 'Hussan Keibotep', 'Marble Table Local Polishing Service', 'May 13th @ 14:22 GMT', <a href='surveyresults'><KeyboardArrowRight /></a>, <a href='surveys'> <Clear /></a>],
                    ['3', 'Rachel Knowlingsby', 'Bandwith Reduction Test', 'June 14th @ 4:33 GMT', <a href='surveyresults'><KeyboardArrowRight /></a>, <a href='surveys'> <Clear /></a>]
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

Surveys.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Surveys);
