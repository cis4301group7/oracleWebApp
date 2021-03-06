// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from '@material-ui/icons/BubbleChart';
import Book from '@material-ui/icons/Book';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Propose from '@material-ui/icons/NoteAdd';
import Find from '@material-ui/icons/FindInPage';
import PastProj from '@material-ui/icons/ViewCarousel';
import Survey from '@material-ui/icons/Assessment';
// core components/views
import DashboardPage from '../views/Dashboard/Dashboard.jsx';
import UserProfile from '../views/UserProfile/UserProfile.jsx';
import TableList from '../views/TableList/TableList.jsx';
import Typography from '../views/Typography/Typography.jsx';
import Icons from '../views/Icons/Icons.jsx';
import Maps from '../views/Maps/Maps.jsx';
import NotificationsPage from '../views/Notifications/Notifications.jsx';
import CurrentProjects from '../views/CurrentProjects/CurrentProjects.jsx';
import ProjectManagement from '../views/CurrentProjects/ProjectManagement.jsx';
import ProjectProposals from '../views/ProjectProposals/ProjectProposals.jsx';
import NewProposal from '../views/ProjectProposals/NewProposal.jsx';
import EditProposal from '../views/ProjectProposals/EditProposal.jsx';
import FindATeam from '../views/FindATeam/FindATeam.jsx';
import ContactTeam from '../views/ContactTeam/ContactTeam.jsx';
import PastProjectGallery from '../views/PastProjectGallery/PastProjectGallery.jsx';
import ViewPastProject from '../views/PastProjectGallery/ViewPastProject.jsx';
import Surveys from '../views/Surveys/Surveys.jsx';
import NewSurvey from '../views/Surveys/NewSurvey.jsx';
import SurveyResults from '../views/Surveys/SurveyResults.jsx';
import OGDashboardPage from '../views/OGDashboard/OGDashboard.jsx';
import TeamStats from '../views/TeamStats/TeamStats.jsx';
import SpecificTeamStats from '../views/SpecificTeamStats/SpecificTeamStats.jsx';
import PositionStats from '../views/PositionStats/PositionStats.jsx';
import IndividualStats from '../views/IndividualStats/IndividualStats.jsx';
import AggregatePlayerStats from '../views/AggregatePlayerStats/AggregatePlayerStats.jsx';
import SpecificPlayerStats from '../views/SpecificPlayerStats/SpecificPlayerStats.jsx';
import ManagerStats from '../views/ManagerStats/ManagerStats.jsx';
import SpecificManagerStats from '../views/SpecificManagerStats/SpecificManagerStats.jsx';
import AggregateManagerStats from '../views/AggregateManagerStats/AggregateManagerStats.jsx';
import HonorsAwards from '../views/HonorsAwards/HonorsAwards.jsx';
import Details from '../views/Details/Details.jsx';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'MLB Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/dashboard:userID',
    sidebarName: 'Dashboard',
    navbarName: 'Client Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/ogdashboard',
    sidebarName: 'OGDashboard',
    navbarName: 'OGDashboard',
    icon: Dashboard,
    component: OGDashboardPage
  },
  {
    path: '/teamstats',
    sidebarName: 'Teams',
    navbarName: 'Team Stats',
    icon: Survey,
    component: TeamStats
  },
  {
    path: '/specificteamstats:ID',
    sidebarName: 'Specific Teams',
    navbarName: 'Specific Team Stats',
    icon: Survey,
    component: SpecificTeamStats
  },
  {
    path: '/positionstats',
    sidebarName: 'Positions',
    navbarName: 'Position Stats',
    icon: Survey,
    component: PositionStats
  },
  {
    path: '/individualstats',
    sidebarName: 'Individuals',
    navbarName: 'Individual Stats',
    icon: Survey,
    component: IndividualStats
  },
  {
    path: '/aggregateplayerstats',
    sidebarName: 'Aggregate Players',
    navbarName: 'Aggregate Player Stats',
    icon: Survey,
    component: AggregatePlayerStats
  },
  {
    path: '/specificplayerstats',
    sidebarName: 'Specific Player Stats',
    navbarName: 'Specific Player Stats',
    icon: Survey,
    component: SpecificPlayerStats
  },
  {
    path: '/specificplayerstats:ID',
    sidebarName: 'Specific Player Stats',
    navbarName: 'Specific Player Stats',
    icon: Survey,
    component: SpecificPlayerStats
  },
  {
    path: '/managerstats',
    sidebarName: 'Managers',
    navbarName: 'Manager Stats',
    icon: Survey,
    component: ManagerStats
  },
  {
    path: '/specificmanagerstats:ID',
    sidebarName: 'Specific Manager Stats',
    navbarName: 'Specific Manager Stats',
    icon: Survey,
    component: SpecificManagerStats
  },
  {
    path: '/aggregatemanagerstats',
    sidebarName: 'Aggregate Managers',
    navbarName: 'Aggregate Manager Stats',
    icon: Survey,
    component: AggregateManagerStats
  },
  {
    path: '/honorsawards',
    sidebarName: 'Honors',
    navbarName: 'Awards & Honors',
    icon: Survey,
    component: HonorsAwards
  },
  {
    path: '/details',
    sidebarName: 'Details',
    navbarName: 'Details',
    icon: Survey,
    component: Details
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile
  },
  {
    path: '/user/:userID',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile
  },
  {
    path: '/currentprojects',
    sidebarName: 'Current Projects',
    navbarName: 'Currently Active Projects',
    icon: Book,
    component: CurrentProjects
  },
  {
    path: '/currentprojects/:projectID',
    sidebarName: 'Current Projects',
    navbarName: 'Currently Active Projects',
    icon: Book,
    component: CurrentProjects
  },
  {
    path: '/projectmanagement',
    sidebarName: 'Project Management',
    navbarName: 'Manage Project',
    icon: Book,
    component: ProjectManagement
  },
  {
    path: '/projectmanagement/:projectID',
    sidebarName: 'Project Management',
    navbarName: 'Manage Project',
    icon: Book,
    component: ProjectManagement
  },
  {
    path: '/projectproposals',
    sidebarName: 'Project Proposals',
    navbarName: 'Propose a Project',
    icon: Propose,
    component: ProjectProposals
  },
  {
    path: '/projectproposals/:projectID',
    sidebarName: 'Project Proposals',
    navbarName: 'Propose a Project',
    icon: Propose,
    component: ProjectProposals
  },
  {
    path: '/newproposal',
    sidebarName: 'New Proposal',
    navbarName: 'Create a New Proposal',
    icon: Propose,
    component: NewProposal
  },
  {
    path: '/newproposal/:projectID',
    sidebarName: 'New Proposal',
    navbarName: 'Create a New Proposal',
    icon: Propose,
    component: NewProposal
  },
  {
    path: '/editproposal:projectID',
    sidebarName: 'Edit Proposal',
    navbarName: 'Edit a Proposal',
    icon: Propose,
    component: EditProposal
  },
  {
    path: '/editproposal:projectID',
    sidebarName: 'Edit Proposal',
    navbarName: 'Edit a Proposal',
    icon: Propose,
    component: EditProposal
  },
  {
    path: '/findateam',
    sidebarName: 'Find a team',
    navbarName: 'Find a team for a project',
    icon: Find,
    component: FindATeam
  },
  {
    path: '/contactteam',
    sidebarName: 'Contact Team',
    navbarName: 'Contact a Team',
    icon: Find,
    component: ContactTeam
  },
  {
    path: '/contactteam/:sessionID',
    sidebarName: 'Contact Team',
    navbarName: 'Contact a Team',
    icon: Find,
    component: ContactTeam
  },
  {
    path: '/pastprojectgallery',
    sidebarName: 'Past Projects',
    navbarName: 'Gallery of Past Projects',
    icon: PastProj,
    component: PastProjectGallery
  },
  {
    path: '/viewpastproject',
    sidebarName: 'View Past Project',
    navbarName: 'View Past Project',
    icon: PastProj,
    component: ViewPastProject
  },
  {
    path: '/viewpastproject/:projectID',
    sidebarName: 'View Past Project',
    navbarName: 'View Past Project',
    icon: PastProj,
    component: ViewPastProject
  },
  {
    path: '/newsurvey',
    sidebarName: 'Complete a Survey',
    navbarName: 'Complete a Survey',
    icon: BubbleChart,
    component: NewSurvey
  },
  {
    path: '/newsurvey/:projectID',
    sidebarName: 'Complete a Survey',
    navbarName: 'Complete a Survey',
    icon: BubbleChart,
    component: NewSurvey
  },
  {
    path: '/surveys',
    sidebarName: 'Surveys',
    navbarName: 'Survey Management',
    icon: Survey,
    component: Surveys
  },
  {
    path: '/surveyresults',
    sidebarName: 'Survey Results',
    navbarName: 'Results of Submitted Surveys',
    icon: Survey,
    component: SurveyResults
  },
  {
    path: '/surveyresults/:projectID',
    sidebarName: 'Survey Results',
    navbarName: 'Results of Submitted Surveys',
    icon: Survey,
    component: SurveyResults
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: '/icons',
    sidebarName: 'Icons',
    navbarName: 'Icons',
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
 redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' 
}
];

export default dashboardRoutes;
