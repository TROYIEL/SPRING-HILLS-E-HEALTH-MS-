import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, default: null },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Branch = mongoose.model("Phase1Branch", branchSchema);
