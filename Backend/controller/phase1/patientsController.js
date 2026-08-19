import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const listPatients = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 patients list stub", tenant: req.tenant, data: [] });
});

export const createPatient = catchAsyncErrors(async (req, res) => {
  res.status(201).json({ success: true, message: "Phase 1 patient create stub", tenant: req.tenant, payload: req.body });
});

export const getPatient = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 patient detail stub", tenant: req.tenant, patientId: req.params.patientId });
});

export const updatePatient = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 patient update stub", tenant: req.tenant, patientId: req.params.patientId, payload: req.body });
});
