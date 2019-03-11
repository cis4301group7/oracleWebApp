// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Book from "@material-ui/icons/Book";
import Propose from "@material-ui/icons/NoteAdd";
import Find from "@material-ui/icons/FindInPage";
import PastProj from "@material-ui/icons/ViewCarousel";
import Survey from "@material-ui/icons/Assessment";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import LocationOn from "@material-ui/icons/LocationOn";
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
import NewSurvey from "../views/Surveys/NewSurvey.jsx";
import SurveyResults from "../views/Surveys/SurveyResults.jsx";
import OGDashboardPage from "../views/OGDashboard/OGDashboard.jsx";

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
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/currentprojects",
    sidebarName: "Current Projects",
    navbarName: "Currently Active Projects",
    icon: Book,
    component: CurrentProjects
  },
  {
    path: "/projectproposals",
    sidebarName: "Project Proposals",
    navbarName: "Propose a Project",
    icon: Propose,
    component: ProjectProposals
  },
  {
    path: "/findateam",
    sidebarName: "Find a team",
    navbarName: "Find a team for a project",
    icon: Find,
    component: FindATeam
  },
  {
    path: "/pastprojectgallery",
    sidebarName: "Past Projects",
    navbarName: "Gallery of Past Projects",
    icon: PastProj,
    component: PastProjectGallery
  },
  {
    path: "/surveys",
    sidebarName: "Surveys",
    navbarName: "Survey Management",
    icon: Survey,
    component: Surveys
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
