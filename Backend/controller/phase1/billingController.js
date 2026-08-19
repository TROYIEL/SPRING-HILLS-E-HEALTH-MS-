import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const listInvoices = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 invoices list stub", tenant: req.tenant, data: [] });
});

export const createInvoice = catchAsyncErrors(async (req, res) => {
  res.status(201).json({ success: true, message: "Phase 1 invoice create stub", tenant: req.tenant, payload: req.body });
});

export const listPayments = catchAsyncErrors(async (req, res) => {
  res.status(200).json({ success: true, message: "Phase 1 payments list stub", tenant: req.tenant, data: [] });
});

export const createPayment = catchAsyncErrors(async (req, res) => {
  res.status(201).json({ success: true, message: "Phase 1 payment create stub", tenant: req.tenant, payload: req.body });
});
