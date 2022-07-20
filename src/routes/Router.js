import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

const AIML = lazy(() => import("../views/AIML.js"));
const AIML_user_management = lazy(() => import ("../views/AIML/AIML_user_management"));
const AIML_data_to_AWS = lazy(() => import ("../views/AIML/AIML_data_to_AWS"));
const AIML_prepare_engine_run = lazy(() => import ("../views/AIML/AIML_prepare_engine_run"));
const AIML_engine_run = lazy(() => import ("../views/AIML/AIML_engine_run"));
const AIML_output = lazy(() => import ("../views/AIML/AIML_output"));
const AIML_data_to_client= lazy(() => import ("../views/AIML/AIML_data_to_client"));

const Appdev = lazy(() => import("../views/Appdev.js"));
const Appdev_user_management = lazy(() => import ("../views/Appdev/Appdev_user_management"));
const Appdev_data_to_AWS = lazy(() => import ("../views/Appdev/Appdev_data_to_AWS"));
const Appdev_prepare_engine_run = lazy(() => import ("../views/Appdev/Appdev_prepare_engine_run"));
const Appdev_engine_run = lazy(() => import ("../views/Appdev/Appdev_engine_run"));
const Appdev_output = lazy(() => import ("../views/Appdev/Appdev_output"));
const Appdev_data_to_client= lazy(() => import ("../views/Appdev/Appdev_data_to_client"));

const Acme = lazy(() => import("../views/Acme.js"));
const Acme_user_management = lazy(() => import ("../views/Acme/Acme_user_management"));
const Acme_data_to_AWS = lazy(() => import ("../views/Acme/Acme_data_to_AWS"));
const Acme_prepare_engine_run = lazy(() => import ("../views/Acme/Acme_prepare_engine_run"));
const Acme_engine_run = lazy(() => import ("../views/Acme/Acme_engine_run"));
const Acme_output = lazy(() => import ("../views/Acme/Acme_output"));
const Acme_data_to_client= lazy(() => import ("../views/Acme/Acme_data_to_client"));

const Smithco = lazy(() => import("../views/Smithco.js"));
const Smithco_user_management = lazy(() => import ("../views/Smithco/Smithco_user_management"));
const Smithco_data_to_AWS = lazy(() => import ("../views/Smithco/Smithco_data_to_AWS"));
const Smithco_prepare_engine_run = lazy(() => import ("../views/Smithco/Smithco_prepare_engine_run"));
const Smithco_engine_run = lazy(() => import ("../views/Smithco/Smithco_engine_run"));
const Smithco_output = lazy(() => import ("../views/Smithco/Smithco_output"));
const Smithco_data_to_client= lazy(() => import ("../views/Smithco/Smithco_data_to_client"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
	  
	  { path: "/AIML", exact: true, element: <AIML /> },
	  { path: "/AIML/AIML_user_management", exact: true, element: <AIML_user_management /> },
	  { path: "/AIML/AIML_data_to_AWS", exact: true, element: <AIML_data_to_AWS /> },
	  { path: "/AIML/AIML_prepare_engine_run", exact: true, element: <AIML_prepare_engine_run /> },
	  { path: "/AIML/AIML_engine_run", exact: true, element: <AIML_engine_run /> },
	  { path: "/AIML/AIML_output", exact: true, element: <AIML_output /> },
	  { path: "/AIML/AIML_data_to_client", exact: true, element: <AIML_data_to_client /> },
	  
	  { path: "/Appdev", exact: true, element: <Appdev /> },
	  { path: "/Appdev/Appdev_user_management", exact: true, element: <Appdev_user_management /> },
	  { path: "/Appdev/Appdev_data_to_AWS", exact: true, element: <Appdev_data_to_AWS /> },
	  { path: "/Appdev/Appdev_prepare_engine_run", exact: true, element: <Appdev_prepare_engine_run /> },
	  { path: "/Appdev/Appdev_engine_run", exact: true, element: <Appdev_engine_run /> },
	  { path: "/Appdev/Appdev_output", exact: true, element: <Appdev_output /> },
	  { path: "/Appdev/Appdev_data_to_client", exact: true, element: <Appdev_data_to_client /> },
	  
	  { path: "/Acme", exact: true, element: <Acme /> },
	  { path: "/Acme/Acme_user_management", exact: true, element: <Acme_user_management /> },
	  { path: "/Acme/Acme_data_to_AWS", exact: true, element: <Acme_data_to_AWS /> },
	  { path: "/Acme/Acme_prepare_engine_run", exact: true, element: <Acme_prepare_engine_run /> },
	  { path: "/Acme/Acme_engine_run", exact: true, element: <Acme_engine_run /> },
	  { path: "/Acme/Acme_output", exact: true, element: <Acme_output /> },
	  { path: "/Acme/Acme_data_to_client", exact: true, element: <Acme_data_to_client /> },
	  
	  { path: "/Smithco", exact: true, element: <Smithco /> },
	  { path: "/Smithco/Smithco_user_management", exact: true, element: <Smithco_user_management /> },
	  { path: "/Smithco/Smithco_data_to_AWS", exact: true, element: <Smithco_data_to_AWS /> },
	  { path: "/Smithco/Smithco_prepare_engine_run", exact: true, element: <Smithco_prepare_engine_run /> },
	  { path: "/Smithco/Smithco_engine_run", exact: true, element: <Smithco_engine_run /> },
	  { path: "/Smithco/Smithco_output", exact: true, element: <Smithco_output /> },
	  { path: "/Smithco/Smithco_data_to_client", exact: true, element: <Smithco_data_to_client /> },
    ],
  },
];

export default ThemeRoutes;
