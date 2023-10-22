import { useEffect } from "react";
import Router from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import authService from "./services/auth.service.js";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/reducer/user.js";
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
