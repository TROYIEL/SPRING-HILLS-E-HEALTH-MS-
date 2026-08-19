import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const getDailyCollections = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Phase 1 daily collections report stub",
    tenant: req.tenant,
    data: { total_invoices: 0, total_payments: 0, currency: "USD" },
  });
});
