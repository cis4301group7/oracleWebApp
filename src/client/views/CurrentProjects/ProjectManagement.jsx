import React from 'react';
import PropTypes from 'prop-types';
import Gridfs from 'gridfs-stream';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Grid from '@material-ui/core/Grid';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
// import JSFileManager, { JSFile } from 'js-file-manager';
var JSFileManager = require("js-file-manager");
var JSFile = JSFileManager.JSFile;
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import Build from '@material-ui/icons/Build';

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

// TODO: Pull additional data functions
class ProjectManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      open: false,
      // Filter must be integrated into
      filterText: ''
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initProjList();
  }

  initProjList = () => {
    // Replace with call to endpoint
    const projArray = [];

    // Example data
    const firstProject = {
      projTitle: 'Current project 1',
      teamName: 'Test Team',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    projArray.push(firstProject);

    this.state.projectList = projArray;
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;
    let projList = <Card><CardBody><h4>No Archived Projects</h4></CardBody></Card>;
    if (this.state.projectList.length > 0) {
      // Filter the results
      const filteredProjects = this.state.projectList.filter(element => element.projTitle.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1);

      // Format the results
      projList = filteredProjects.map(project => (
        <GridContainer>
          <GridItem xs={6} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardTitleWhite}>{project.projTitle}</h3>
                  </GridItem>
                </GridContainer>
              </CardHeader>
              <CardBody>
                <div align="right">
                  <Button color="rose" onClick={this.handleOpen}>
                    File Management
                  </Button>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <div style={getModalStyle()} className={classes.paper}>
                      <Typography variant="h6" id="modal-title">
                        Download & Upload Project Files
                      </Typography>
                      <Typography variant="subtitle4" id="simple-modal-description">
                        File exchange between Clients and Development Team
                      </Typography>
                      <GridContainer>
                        <a href="projectmanagement">
                          <Button color="primary">
                            Upload
                          </Button>
                        </a>
                        <a href="projectmanagement">
                          <Button color="info">
                            Download
                          </Button>
                        </a>
                        </GridContainer>
                      {/* <div id='test01' class='button'>Pick a file</div>
                      <script>
                        document.querySelector("test01").addEventListener("click", function(event) {
                          JSFileManager.pick({ event: event }).then(function(file) {
                          })
                        });
                      </script>
                      */}
                      {/* <SimpleModalWrapped /> */}
                    </div>
                    
                  </Modal>
                  <a href="contactteam">
                    <Button color="success">
                      Team Chat
                    </Button>
                  </a>
                  {' '}
                  <a href="newsurvey">
                    <Button color="info">
                      Take Survey
                    </Button>
                  </a>
                  {' '}
                  <a href="pastprojectgallery">
                    <Button color="primary">
                      Archive Project
                    </Button>
                  </a>
                  {' '}
                  <a href="currentprojects">
                    <Button color="danger">
                      Delete Project
                    </Button>
                  </a>
                </div>
                <h4 className={classes.cardTitle}>{project.teamName}</h4>
                {project.groupMembers.map((memberSet) =>{
                  return <p>{memberSet.name} - <a href="mailto:{memberSet.email}">{memberSet.email}</a></p>;
                })}
                <p className={classes.cardCategory}>{project.description}</p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={7} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <h3 className={classes.cardTitleWhite}>Features In Progress</h3>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Feature', 'Level', 'Status', 'Due by', 'Approve', 'Improve', 'Delete']}
                  tableData={[
                    ['1', 'Design Front Page', 'High', 'In-Progress', 'December 25th', <a href='currentprojects'> <Done /></a>, <a href='currentprojects'> <Build /></a>, <a href='currentprojects'> <Clear /></a>],
                    ['2', 'Add Google Maps API', 'Medium', 'Started', 'February 14th', <a href='currentprojects'> <Done /></a>, <a href='currentprojects'> <Build /></a>, <a href='currentprojects'> <Clear /></a>],
                    ['3', 'Customer Feedback on Products', 'Medium', 'Finished', 'December 30th', <a href='currentprojects'> <Done /></a>, <a href='currentprojects'> <Build /></a>, <a href='currentprojects'> <Clear /></a>],
                    ['4', 'New Logo', 'Low', 'New', 'January 7th', <a href='currentprojects'> <Done /></a>, <a href='currentprojects'> <Build /></a>, <a href='currentprojects'> <Clear /></a>]
                  ]}
                />
                {' '} 
                <a href="newsurvey">
                  <Button color="info">
                    New Feature
                  </Button>
                </a>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      ));
    }

    return (
      <GridContainer>
        {projList}
      </GridContainer>
    );
  }
}

ProjectManagement.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(ProjectManagement);

export default withStyles(styles)(ProjectManagement);
