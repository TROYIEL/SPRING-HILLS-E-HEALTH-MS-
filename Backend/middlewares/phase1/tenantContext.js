import ErrorHandler from "../errorMiddleware.js";

export const withTenantContext = (req, _res, next) => {
  const hospitalHeader = process.env.TENANCY_HOSPITAL_HEADER || "x-hospital-id";
  const branchHeader = process.env.TENANCY_BRANCH_HEADER || "x-branch-id";

  const hospitalId = req.headers[hospitalHeader] || req.headers["x-hospital-id"];
  const branchId = req.headers[branchHeader] || req.headers["x-branch-id"];

  if (!hospitalId) {
    return next(new ErrorHandler("hospital_id context is required", 400));
  }

  req.tenant = {
    hospital_id: String(hospitalId),
    branch_id: branchId ? String(branchId) : null,
  };

  next();
};
