import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const listEncounters = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 encounters list stub", tenant: req.tenant, data: [] });
});

export const createEncounter = catchAsyncErrors(async (req, res) => {
  res.status(201).json({ success: true, message: "Phase 1 encounter create stub", tenant: req.tenant, payload: req.body });
});
