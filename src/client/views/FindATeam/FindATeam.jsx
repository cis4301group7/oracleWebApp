import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import Accessibility from '@material-ui/icons/Accessibility';
import Done from '@material-ui/icons/Done';
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
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
  }
});

const agreementLevels = [
  {
    value: 'SA',
    label: 'Strongly Agree',
  },
  {
    value: 'A',
    label: 'Agree',
  },
  {
    value: 'N',
    label: 'Neutral',
  },
  {
    value: 'D',
    label: 'Disagree',
  },
  {
    value: 'SD',
    label: 'Strongly Disagree',
  },
];

const projectNames = [
  {
    value: 'CL',
    label: 'Car Loans',
  },
  {
    value: 'ND',
    label: 'National Defense',
  },
  {
    value: 'PS',
    label: 'Puppy Store',
  },
  {
    value: 'EMAP',
    label: 'Environmental Map',
  }
];


class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: [],
      // Filter must be integrated into
      filterText: ''
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initTeamList();
  }

  initTeamList = () => {
    // Replace with call to endpoint
    const teamArray = [];

    // Example data (endpoint will not return email of member)
    const firstTeam = {
      teamName: 'Team 1',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const secondTeam = {
      teamName: 'Team 2',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const thirdTeam = {
      teamName: 'Team 3',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const fourthTeam = {
      teamName: 'Team 4',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    teamArray.push(firstTeam);
    teamArray.push(secondTeam);
    teamArray.push(thirdTeam);
    teamArray.push(fourthTeam);

    this.state.teamList = teamArray;
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    let teamList = <Card><CardBody><h4>No Archived Projects</h4></CardBody></Card>;
    if (this.state.teamList.length > 0) {
      // Filter the results
      const filteredTeams = this.state.teamList.filter(element => element.teamName.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1);

      // Format the results
      teamList = filteredTeams.map(project => (
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h3 className={classes.cardTitleWhite}>{project.teamName}</h3>
            </CardHeader>
            <CardBody>
              {project.groupMembers.map(memberSet => <h4 className={classes.cardTitle}>{memberSet.name}</h4>)}
              <p>{project.description}</p>
              <a href="contactteam">
                <Button color="info">
                  Contact Team
                </Button>
              </a>{' '}
              <TextField
                id="rating-selector"
                select
                //label="Project"
                className={classes.textField}
                value={this.state.teamList}
                onChange={this.handleChange('teamList')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Want to work with"
                margin="dense"
              >
                {agreementLevels.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {' '}
              <TextField
                id="assign-team-selector"
                select
                //label="Project"
                className={classes.textField}
                value={this.state.teamList}
                onChange={this.handleChange('teamList')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Project to work on"
                margin="dense"
              >
                {projectNames.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* <a href="findateam">
                <Done />
              </a> */}
            </CardBody>
          </Card>
        </GridItem>
      ));
    }

    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Available Teams</p>
              <h3 className={classes.cardTitle}> {this.state.teamList.length}</h3>
            </CardHeader>
          </Card>
        </GridItem>
        {teamList}
      </GridContainer>
    );
  }
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableList);
