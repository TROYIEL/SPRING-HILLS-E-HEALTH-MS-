import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    hospital_id: { type: String, required: false, index: true },
    branch_id: { type: String, default: null, index: true },
    actor_user_id: { type: String, default: null },
    action: { type: String, required: true },
    entity_type: { type: String, required: true },
    entity_id: { type: String, default: null },
    ip_address: { type: String, default: null },
    meta: { type: Object, default: {} },
  },
  { timestamps: true }
);

export const AuditLog = mongoose.model("Phase1AuditLog", auditLogSchema);
