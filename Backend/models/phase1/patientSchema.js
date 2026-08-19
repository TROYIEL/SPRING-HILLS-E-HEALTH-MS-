import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    branch_id: { type: String, default: null, index: true },
    patient_code: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    phone: { type: String, default: null },
    email: { type: String, default: null },
  },
  { timestamps: true }
);

export const Phase1Patient = mongoose.model("Phase1Patient", patientSchema);
