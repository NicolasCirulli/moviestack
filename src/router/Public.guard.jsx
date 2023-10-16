import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicGuard(props) {
  const user = useSelector((store) => store.user);
  return !user.name ? props.children : <Navigate to={`/`} />;
}

export default PublicGuard;
