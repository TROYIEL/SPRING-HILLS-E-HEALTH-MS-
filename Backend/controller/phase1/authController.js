import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { logAuditEvent } from "../../utils/phase1Audit.js";

export const login = catchAsyncErrors(async (req, res) => {
  await logAuditEvent({
    action: "auth.login.attempt",
    entityType: "auth",
    entityId: null,
    req,
    details: { email: req.body?.email || null },
  });

  // Placeholder login contract for Phase 1 route stabilization.
  res.status(200).json({
    success: true,
    message: "Phase 1 auth login stub ready",
    data: {
      token_type: "Bearer",
      access_token: "phase1-stub-token",
      expires_in: 3600,
    },
  });
});

export const logout = catchAsyncErrors(async (req, res) => {
  await logAuditEvent({ action: "auth.logout", entityType: "auth", entityId: null, req });
  res.status(200).json({ success: true, message: "Phase 1 auth logout stub ready" });
});

export const refresh = catchAsyncErrors(async (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Phase 1 token refresh stub ready",
    data: { access_token: "phase1-refreshed-stub-token", expires_in: 3600 },
  });
});

export const me = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Phase 1 auth me stub ready",
    user: req.phase1Auth || null,
    tenant: req.tenant || null,
  });
});
