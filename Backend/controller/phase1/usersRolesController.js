import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { ROLES, PERMISSIONS } from "../../constants/phase1Rbac.js";

export const listUsers = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Phase 1 users list stub",
    tenant: req.tenant,
    data: [],
  });
});

export const createUser = catchAsyncErrors(async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Phase 1 user create stub",
    tenant: req.tenant,
    payload: req.body,
  });
});

export const listRoles = catchAsyncErrors(async (_req, res) => {
  res.status(200).json({
    success: true,
    roles: Object.values(ROLES),
    permissions: Object.values(PERMISSIONS),
  });
});

export const createRole = catchAsyncErrors(async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Phase 1 role create stub",
    payload: req.body,
  });
});

export const assignRole = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Phase 1 user role assignment stub",
    userId: req.params.userId,
    payload: req.body,
  });
});
