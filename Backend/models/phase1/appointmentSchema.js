import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: true, index: true },
    branch_id: { type: String, default: null, index: true },
    patient_id: { type: String, required: true },
    doctor_user_id: { type: String, required: true },
    appointment_at: { type: Date, required: true },
    status: {
      type: String,
      enum: ["booked", "checked_in", "completed", "cancelled", "no_show"],
      default: "booked",
    },
    reason: { type: String, default: null },
  },
  { timestamps: true }
);

export const Phase1Appointment = mongoose.model("Phase1Appointment", appointmentSchema);
