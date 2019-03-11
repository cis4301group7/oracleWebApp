import React from 'react';
import PropTypes from 'prop-types';
import GridFS from 'gridfs-stream';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Icon from '@material-ui/core/Icon';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

const styles = {
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
};

class TableList extends React.Component {
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
    fetch('/api/getAllCurrentProjects')
    .then(results =>{
      return results.json();
    })
    .then(data => {
      this.setState({projectList: data});
    });
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;
    let projList = <Card><CardBody><h4>No Current Projects</h4></CardBody></Card>;
    if (this.state.projectList.length > 0) {
      // Filter the results
      const filteredProjects = this.state.projectList.filter(element => element.projTitle.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1);

      // Format the results  TODO: specific project URL
      projList = filteredProjects.map(project => (
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose">
              <GridContainer>
                <GridItem>
                  <h3 className={classes.cardTitleWhite}>{project.projTitle}</h3>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{project.teamName}</h4>
              {project.groupMembers &&
                project.groupMembers.map((memberSet) =>{
                return <p>{memberSet.firstName} {memberSet.lastName} - <a href="mailto:{memberSet.email}">{memberSet.email}</a></p>;
              })}
              <p className={classes.cardCategory}>{project.description}</p>
              <a href="projectmanagement">
                <Button color="primary">
                  Manage Project
                </Button>
              </a>{' '}
              <a href="contactteam">
                <Button color="info">
                  Contact Team
                </Button>
              </a>
            </CardBody>
          </Card> 
        </GridItem>
      ));
    }

    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>spa</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Current Projects</p>
              <h3 className={classes.cardTitle}> {this.state.projectList.length}</h3>
            </CardHeader>
          </Card>
        </GridItem>
        {projList}
      </GridContainer>
    );
  }
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableList);
