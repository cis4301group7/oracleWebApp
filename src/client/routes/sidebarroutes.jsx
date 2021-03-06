// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from '@material-ui/icons/BubbleChart';
import Book from "@material-ui/icons/Book";
import Propose from "@material-ui/icons/NoteAdd";
import Find from "@material-ui/icons/FindInPage";
import PastProj from "@material-ui/icons/ViewCarousel";
import Survey from "@material-ui/icons/Assessment";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import LocationOn from "@material-ui/icons/LocationOn";
import RecentActors from "@material-ui/icons/RecentActors";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Typography from "../views/Typography/Typography.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Maps from "../views/Maps/Maps.jsx";
import NotificationsPage from "../views/Notifications/Notifications.jsx";
import CurrentProjects from "../views/CurrentProjects/CurrentProjects.jsx";
import ProjectProposals from "../views/ProjectProposals/ProjectProposals.jsx";
import FindATeam from "../views/FindATeam/FindATeam.jsx";
import PastProjectGallery from "../views/PastProjectGallery/PastProjectGallery.jsx";
import Surveys from "../views/Surveys/Surveys.jsx";
import OGDashboardPage from "../views/OGDashboard/OGDashboard.jsx";
import TeamStats from '../views/TeamStats/TeamStats.jsx';
import PositionStats from '../views/PositionStats/PositionStats.jsx';
import IndividualStats from '../views/IndividualStats/IndividualStats.jsx';
import AggregatePlayerStats from '../views/AggregatePlayerStats/AggregatePlayerStats.jsx';
import ManagerStats from '../views/ManagerStats/ManagerStats.jsx';
import AggregateManagerStats from '../views/AggregateManagerStats/AggregateManagerStats.jsx';
import HonorsAwards from '../views/HonorsAwards/HonorsAwards.jsx';
import Details from '../views/Details/Details.jsx';

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Homepage",
    navbarName: "MLB Homepage",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/ogdashboard",
    sidebarName: "OG Dashboard",
    navbarName: "OG Dashboard",
    icon: Dashboard,
    component: OGDashboardPage
  },
  {
    path: '/teamstats',
    sidebarName: 'Teams',
    navbarName: 'Team Stats',
    icon: RecentActors,
    component: TeamStats
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
    path: '/managerstats',
    sidebarName: 'Managers',
    navbarName: 'Manager Stats',
    icon: Survey,
    component: ManagerStats
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
  // {
  //   path: "/user",
  //   sidebarName: "User Profile",
  //   navbarName: "Profile",
  //   icon: Person,
  //   component: UserProfile
  // },
  // {
  //   path: "/currentprojects",
  //   sidebarName: "Current Projects",
  //   navbarName: "Currently Active Projects",
  //   icon: Book,
  //   component: CurrentProjects
  // },
  // {
  //   path: "/projectproposals",
  //   sidebarName: "Project Proposals",
  //   navbarName: "Propose a Project",
  //   icon: Propose,
  //   component: ProjectProposals
  // },
  // {
  //   path: "/findateam",
  //   sidebarName: "Find a team",
  //   navbarName: "Find a team for a project",
  //   icon: Find,
  //   component: FindATeam
  // },
  // {
  //   path: "/pastprojectgallery",
  //   sidebarName: "Past Projects",
  //   navbarName: "Gallery of Past Projects",
  //   icon: PastProj,
  //   component: PastProjectGallery
  // },
  // {
  //   path: "/surveys",
  //   sidebarName: "Surveys",
  //   navbarName: "Survey Management",
  //   icon: Survey,
  //   component: Surveys
  // },
  // {
  //   path: "/table",
  //   sidebarName: "Table List",
  //   navbarName: "Table List",
  //   icon: "content_paste",
  //   component: TableList
  // },
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
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
