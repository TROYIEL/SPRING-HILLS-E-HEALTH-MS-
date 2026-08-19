# UHMS Architecture (Phase 1 Foundation)

## Current Runtime Baseline
- **Backend**: Node.js + Express + MongoDB (existing)
- **Frontend Admin**: React + Vite
- **Frontend Patient**: React + Vite

## Phase 1 Foundation Architecture
- **API Namespace**: `/api/v1/*`
- **Security**: JWT auth foundation + role/permission middleware
- **Tenancy**: shared-data pattern with explicit `hospital_id` and `branch_id`
- **Auditing**: request-level audit logging contract
- **DevOps baseline**: Docker Compose + CI checks

## Data Layer Strategy
To preserve compatibility with current code while enabling enterprise migration:
1. Existing Mongo-backed endpoints remain intact.
2. New Phase 1 artifacts define tenant-aware domain models and SQL schema blueprint.
3. SQL artifacts provide a practical migration path for PostgreSQL-first multi-tenant deployment.

## Logical Modules
- Auth
- Users / Roles / Permissions
- Patients
- Appointments
- Encounters
- Billing / Payments
- Reports
- Audit Logs

## Tenancy Conventions
- Every tenant-bound entity includes:
  - `hospital_id` (required)
  - `branch_id` (nullable when record is hospital-wide)
- API expects tenancy headers:
  - `x-hospital-id` (required)
  - `x-branch-id` (optional)

## Deployment View (Local/Dev)
- Nginx (reverse proxy)
- Frontend Admin
- Frontend Patient
- Backend API
- Redis
- PostgreSQL
- MongoDB (for compatibility with current backend runtime)
