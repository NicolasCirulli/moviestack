import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import AuthGuard from "./Auth.guard.jsx";
import PublicGuard from "./Public.guard.jsx";
import Docs from "../pages/Docs/Docs.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <AuthGuard>
            <Docs />
          </AuthGuard>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicGuard>
            <Login />
          </PublicGuard>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicGuard>
            <Register />
          </PublicGuard>
        ),
      },
    ],
  },
]);

export default Router;
