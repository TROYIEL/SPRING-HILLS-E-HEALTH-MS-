import apiClient from "../api/client";

export const fetchPhase1Profile = () => apiClient.get("/auth/me");
export const fetchPhase1Patients = () => apiClient.get("/patients");
export const fetchPhase1Appointments = () => apiClient.get("/appointments");
export const fetchPhase1Invoices = () => apiClient.get("/billing/invoices");
