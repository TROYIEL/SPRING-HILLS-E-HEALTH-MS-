import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Appointment from "./pages/Appointment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Context } from "./main";
import axios from "axios";
import Footer from "./components/Footer";
import Loading from "./components/loading"; 
import PatientRoute from "./phase1/PatientRoute";
import AuthPlaceholder from "./phase1/pages/AuthPlaceholder";
import DashboardPlaceholder from "./phase1/pages/DashboardPlaceholder";
import AppointmentsPlaceholder from "./phase1/pages/AppointmentsPlaceholder";
import BillingPlaceholder from "./phase1/pages/BillingPlaceholder";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [isAuthenticated, setIsAuthenticated, setUser]);

  if (loading) {
    return <Loading />; 
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal/auth" element={<AuthPlaceholder />} />
          <Route
            path="/portal/dashboard"
            element={
              <PatientRoute isAuthenticated={isAuthenticated}>
                <DashboardPlaceholder />
              </PatientRoute>
            }
          />
          <Route
            path="/portal/appointments"
            element={
              <PatientRoute isAuthenticated={isAuthenticated}>
                <AppointmentsPlaceholder />
              </PatientRoute>
            }
          />
          <Route
            path="/portal/billing"
            element={
              <PatientRoute isAuthenticated={isAuthenticated}>
                <BillingPlaceholder />
              </PatientRoute>
            }
          />
        </Routes>
        <Footer/>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
