import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import App from "./App"; // Import App if you want it as a layout wrapper
import Home from "./pages/landing_page/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap all pages inside App if needed
    children: [
      { path: "", 
        element: <Dashboard />,
        children: [
          { path: "", element: <Home /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Login /> },
        ]
      },
    ],
  },
]);

export default router;
