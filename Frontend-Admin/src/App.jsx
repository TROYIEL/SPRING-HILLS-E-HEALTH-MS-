import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Login from "./components/Login";
import Doctors from "./components/Doctors";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";
import Loading from "./components/loading";
import RoleRoute from "./phase1/RoleRoute";
import { ADMIN_PHASE1_ROLES } from "./phase1/rbac";
import AuthPlaceholder from "./phase1/pages/AuthPlaceholder";
import DashboardPlaceholder from "./phase1/pages/DashboardPlaceholder";
import PatientsPlaceholder from "./phase1/pages/PatientsPlaceholder";
import AppointmentsPlaceholder from "./phase1/pages/AppointmentsPlaceholder";
import BillingPlaceholder from "./phase1/pages/BillingPlaceholder";
import AuditLogsPlaceholder from "./phase1/pages/AuditLogsPlaceholder";
import "./App.css";


const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const currentRole = (user?.role || "hospital_admin").toLowerCase();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [isAuthenticated,setIsAuthenticated, setUser]);


  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/phase1/auth" element={<AuthPlaceholder />} />
          <Route
            path="/phase1/dashboard"
            element={
              <RoleRoute
                allowedRoles={[
                  ADMIN_PHASE1_ROLES.SUPER_ADMIN,
                  ADMIN_PHASE1_ROLES.HOSPITAL_ADMIN,
                  ADMIN_PHASE1_ROLES.DOCTOR,
                  ADMIN_PHASE1_ROLES.FRONTDESK,
                  ADMIN_PHASE1_ROLES.BILLING,
                ]}
                currentRole={currentRole}
              >
                <DashboardPlaceholder />
              </RoleRoute>
            }
          />
          <Route path="/phase1/patients" element={<PatientsPlaceholder />} />
          <Route path="/phase1/appointments" element={<AppointmentsPlaceholder />} />
          <Route path="/phase1/billing" element={<BillingPlaceholder />} />
          <Route path="/phase1/audit-logs" element={<AuditLogsPlaceholder />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
