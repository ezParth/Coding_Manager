import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import App from "./App";
import Home from "./pages/landing_page/Home"
import Project_Dashboard from "./pages/Project/Project_Dashboard";
import Resume from "./pages/Resume/Resume";
import ResumeComp from "./pages/Resume/Components/CreateResume";
import ViewResume from "./pages/Resume/Components/ViewResume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "",
        element: <Dashboard />,
        children: [
          { path: "", element: <Home /> },
          {path: "/upload", element: <Project_Dashboard />},
          { path: "login", element: <Login /> },
          { path: "signup", element: <Login /> },
          { path: "/resume", element: <Resume />, children: [
            {path: "upload", element: <ResumeComp />},
            {path: "", element: <ViewResume />},
          ] }
        ]
      },
    ],
  },
]);

export default router;
