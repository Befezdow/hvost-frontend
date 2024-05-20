import { Navigate } from "react-router-dom";
import { useIsAuthorized } from "../../services/auth";

const Authorized = (component) => {
  const isAuthorized = useIsAuthorized();

  if (!isAuthorized) {
    return <Navigate to="/login"></Navigate>;
  }

  return component;
};

export default Authorized;
