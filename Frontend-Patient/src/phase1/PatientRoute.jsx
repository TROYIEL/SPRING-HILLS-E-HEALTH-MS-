import { Navigate } from "react-router-dom";

const PatientRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/portal/auth" replace />;
  }

  return children;
};

export default PatientRoute;
