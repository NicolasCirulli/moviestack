import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function AuthGuard(props) {
  const user = useSelector((store) => store.user);
  return user.name ? props.children : <Navigate to={`/login`} />;
}

export default AuthGuard;
