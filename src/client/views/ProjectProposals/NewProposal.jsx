import React from 'react';
import PropTypes from 'prop-types';
import GridFS from 'gridfs-stream';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components

import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 0,
    width: 200,
  },
  headerButton: {
    float: 'right',
    marginLeft: '20000px',
    color: '#000000'
  }
});

class NewProposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      // Filter must be integrated into
      filterText: ''
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initProjList();
  }

  initProjList = () => {
    // Replace with call to endpoint
    const projArray = [];

    // Example data (Note that the db should actually store as much info for the project as possible, but endpoints should only return what is necessary)
    const firstProject = {
      projTitle: 'Proposed project 1',
      companyName: 'Sample Inc',
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const secondProject = {
      projTitle: 'Proposed project 2',
      companyName: 'Fake LLC',
      description: 'This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project.'
    };
    const thirdProject = {
      projTitle: 'Proposed project 3',
      companyName: 'Test Co.',
      description: 'This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project.'
    };
    projArray.push(firstProject);
    projArray.push(secondProject);
    projArray.push(thirdProject);

    this.state.projectList = projArray;
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="success">
            <h2 className={classes.cardTitleWhite}>Create a New Proposal</h2>
          </CardHeader>
          <CardBody>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Project Name"
                  id="project-name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Start By"
                    type="date"
                    defaultValue="2019-01-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Due By"
                    type="date"
                    defaultValue="2019-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CustomInput
                  labelText="Company"
                  id="company"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Project Leader"
                  id="project-leader"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Estimated Team Size"
                  id="team-size"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Location"
                  id="Location"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Preferred Contact Method"
                  id="preferred-method"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Difficulty"
                  id="difficulty"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: '#AAAAAA' }} />
                <CustomInput
                  labelText="Project Summary:"
                  id="project-description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: '#AAAAAA' }} />
                <CustomInput
                  labelText="Features Requested:"
                  id="features-requested"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: '#AAAAAA' }} />
                <CustomInput
                  labelText="Skills Requested:"
                  id="requested-skills"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: '#AAAAAA' }} />
                <CustomInput
                  labelText="Other information:"
                  id="other-information"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <a href="projectproposals">
              <Button color="warning">Save Changes</Button>
            </a>
          </CardFooter>
        </Card>
      </GridItem>
    );
  }
}

NewProposal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewProposal);
