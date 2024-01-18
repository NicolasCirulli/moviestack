import { useEffect } from "react";
import Router from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import authService from "./services/auth.service.js";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/reducer/user.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authService.loginWithToken().then((res) => dispatch(loadUser(res)));
    }
  }, []);
  return <RouterProvider router={Router} />;
}

export default App;
