import jwt from "jsonwebtoken";
import ErrorHandler from "../errorMiddleware.js";
import { ROLE_PERMISSIONS } from "../../constants/phase1Rbac.js";

const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.replace("Bearer ", "");
  }

  return req.cookies?.adminToken || req.cookies?.patientToken || null;
};

export const requireAuth = (req, _res, next) => {
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      return next(new ErrorHandler("Authentication required", 401));
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.phase1Auth = {
      userId: payload.id,
      role: payload.role || "patient",
      hospital_id: payload.hospital_id || req.tenant?.hospital_id || null,
      branch_id: payload.branch_id || req.tenant?.branch_id || null,
      permissions: payload.permissions || ROLE_PERMISSIONS[payload.role] || [],
    };

    return next();
  } catch (_error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
};

export const requireRoles = (...allowedRoles) => (req, _res, next) => {
  if (!req.phase1Auth?.role || !allowedRoles.includes(req.phase1Auth.role)) {
    return next(new ErrorHandler("Forbidden role", 403));
  }

  return next();
};

export const requirePermissions = (...requiredPermissions) => (req, _res, next) => {
  const granted = req.phase1Auth?.permissions || [];
  const missing = requiredPermissions.filter((permission) => !granted.includes(permission));

  if (missing.length > 0) {
    return next(new ErrorHandler(`Missing permissions: ${missing.join(", ")}`, 403));
  }

  return next();
};
