import express from "express";
import { login, logout, me, refresh } from "../../controller/phase1/authController.js";
import {
  assignRole,
  createRole,
  createUser,
  listRoles,
  listUsers,
} from "../../controller/phase1/usersRolesController.js";
import {
  createPatient,
  getPatient,
  listPatients,
  updatePatient,
} from "../../controller/phase1/patientsController.js";
import {
  createAppointment,
  listAppointments,
  updateAppointment,
} from "../../controller/phase1/appointmentsController.js";
import { createEncounter, listEncounters } from "../../controller/phase1/encountersController.js";
import {
  createInvoice,
  createPayment,
  listInvoices,
  listPayments,
} from "../../controller/phase1/billingController.js";
import { getDailyCollections } from "../../controller/phase1/reportsController.js";
import { listAuditLogs } from "../../controller/phase1/auditLogsController.js";
import { withTenantContext } from "../../middlewares/phase1/tenantContext.js";
import { requireAuth, requirePermissions } from "../../middlewares/phase1/authz.js";
import { PERMISSIONS } from "../../constants/phase1Rbac.js";

const router = express.Router();

router.post("/auth/login", login);
router.post("/auth/logout", withTenantContext, requireAuth, logout);
router.post("/auth/refresh", refresh);
router.get("/auth/me", withTenantContext, requireAuth, me);

router.get("/users", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.USERS_READ), listUsers);
router.post("/users", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.USERS_MANAGE), createUser);
router.get("/roles", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.ROLES_READ), listRoles);
router.post("/roles", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.ROLES_MANAGE), createRole);
router.post(
  "/users/:userId/roles",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.ROLES_MANAGE),
  assignRole
);

router.get("/patients", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.PATIENTS_READ), listPatients);
router.post(
  "/patients",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.PATIENTS_MANAGE),
  createPatient
);
router.get(
  "/patients/:patientId",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.PATIENTS_READ),
  getPatient
);
router.put(
  "/patients/:patientId",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.PATIENTS_MANAGE),
  updatePatient
);

router.get(
  "/appointments",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.APPOINTMENTS_READ),
  listAppointments
);
router.post(
  "/appointments",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.APPOINTMENTS_MANAGE),
  createAppointment
);
router.put(
  "/appointments/:appointmentId",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.APPOINTMENTS_MANAGE),
  updateAppointment
);

router.get("/encounters", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.ENCOUNTERS_READ), listEncounters);
router.post(
  "/encounters",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.ENCOUNTERS_MANAGE),
  createEncounter
);

router.get("/billing/invoices", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.BILLING_READ), listInvoices);
router.post(
  "/billing/invoices",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.BILLING_MANAGE),
  createInvoice
);
router.get("/billing/payments", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.BILLING_READ), listPayments);
router.post(
  "/billing/payments",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.PAYMENTS_MANAGE),
  createPayment
);

router.get(
  "/reports/daily-collections",
  withTenantContext,
  requireAuth,
  requirePermissions(PERMISSIONS.REPORTS_DAILY_COLLECTIONS),
  getDailyCollections
);

router.get("/audit-logs", withTenantContext, requireAuth, requirePermissions(PERMISSIONS.AUDIT_READ), listAuditLogs);

export default router;
