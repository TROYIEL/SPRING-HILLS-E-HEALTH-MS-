import apiClient from "../api/client";

export const fetchPortalProfile = () => apiClient.get("/auth/me");
export const fetchPortalAppointments = () => apiClient.get("/appointments");
export const fetchPortalBilling = () => apiClient.get("/billing/invoices");
