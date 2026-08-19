import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    branch_id: { type: String, default: null, index: true },
    invoice_id: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["cash", "card", "transfer", "other"], required: true },
    reference: { type: String, default: null },
    paid_at: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Phase1Payment", paymentSchema);
