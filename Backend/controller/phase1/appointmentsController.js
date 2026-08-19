import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const listAppointments = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 appointments list stub", tenant: req.tenant, data: [] });
});

export const createAppointment = catchAsyncErrors(async (req, res) => {
  res.status(201).json({ success: true, message: "Phase 1 appointment create stub", tenant: req.tenant, payload: req.body });
});

export const updateAppointment = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 appointment update stub", tenant: req.tenant, payload: req.body });
});
