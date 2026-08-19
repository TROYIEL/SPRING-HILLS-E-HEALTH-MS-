import { Navigate } from "react-router-dom";

const RoleRoute = ({ allowedRoles, currentRole, children }) => {
  if (!allowedRoles.includes(currentRole)) {
    return <Navigate to="/phase1/auth" replace />;
  }

  return children;
};

export default RoleRoute;
