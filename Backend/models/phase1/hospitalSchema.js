import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Phase1Hospital", hospitalSchema);
