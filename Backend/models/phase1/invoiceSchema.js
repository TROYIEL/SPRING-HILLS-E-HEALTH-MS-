import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    branch_id: { type: String, default: null, index: true },
    invoice_number: { type: String, required: true, unique: true },
    patient_id: { type: String, required: true },
    encounter_id: { type: String, default: null },
    amount_subtotal: { type: Number, required: true, default: 0 },
    amount_tax: { type: Number, required: true, default: 0 },
    amount_total: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ["draft", "issued", "paid", "void"], default: "draft" },
    currency: { type: String, default: "USD" },
  },
  { timestamps: true }
);

export const Invoice = mongoose.model("Phase1Invoice", invoiceSchema);
