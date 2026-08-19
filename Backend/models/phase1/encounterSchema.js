import mongoose from "mongoose";

const encounterSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    branch_id: { type: String, default: null, index: true },
    appointment_id: { type: String, required: true },
    patient_id: { type: String, required: true },
    doctor_user_id: { type: String, required: true },
    soap_subjective: { type: String, default: null },
    soap_objective: { type: String, default: null },
    soap_assessment: { type: String, default: null },
    soap_plan: { type: String, default: null },
    diagnosis_text: { type: String, default: null },
    icd10_code: { type: String, default: null },
  },
  { timestamps: true }
);

export const Encounter = mongoose.model("Phase1Encounter", encounterSchema);
