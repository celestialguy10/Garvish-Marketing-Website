import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Seo from "./pages/Seo/index.jsx";
import WebDevelopment from "./pages/WebDevelopment/index.jsx";
import DigitalAdvertising from "./pages/DigitalAdvertising/index.jsx";
import InfluencerMarketing from "./pages/InfluencerMarketing/index.jsx";
import AnimatedAds from "./pages/AnimatedAds/index.jsx";
import Login from "./pages/Login/index.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Logout from "./pages/Logout/index.jsx";
import TaskManager from "./pages/TaskManager/index.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import Privacy from "./pages/PrivacyPolicy/Privacy.jsx";
import TermsAndConditions from "./pages/Terms/TermsAndConditions.jsx";
import Mainform2 from "./pages/MainForm2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/seo",
        element: <Seo />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/digital-advertising",
        element: <DigitalAdvertising />,
      },
      {
        path: "/influencer-marketing",
        element: <InfluencerMarketing />,
      },
      {
        path: "/animated-ads",
        element: <AnimatedAds />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form",
    element: <Mainform2 />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "task-manager",
        element: <TaskManager />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Handles all unknown routes
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
