import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const listAuditLogs = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 audit logs stub", tenant: req.tenant, data: [] });
});
