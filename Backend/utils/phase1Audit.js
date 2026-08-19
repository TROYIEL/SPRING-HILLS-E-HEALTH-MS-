import { AuditLog } from "../models/phase1/auditLogSchema.js";

export const logAuditEvent = async ({ action, entityType, entityId, req, details = {} }) => {
  const payload = {
    hospital_id: req?.tenant?.hospital_id || details.hospital_id || null,
    branch_id: req?.tenant?.branch_id || details.branch_id || null,
    actor_user_id: req?.phase1Auth?.userId || null,
    action,
    entity_type: entityType,
    entity_id: entityId || null,
    ip_address: req?.ip || null,
    meta: details,
  };

  // Placeholder persistence: best-effort for Mongo runtime while schema evolves.
  try {
    await AuditLog.create(payload);
  } catch (_error) {
    // No-op fallback keeps API stable when audit collection is unavailable.
  }
};
