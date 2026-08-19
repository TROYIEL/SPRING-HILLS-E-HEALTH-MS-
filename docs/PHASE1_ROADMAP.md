# UHMS Phase 1 Roadmap

## Scope
Phase 1 delivers a production-oriented foundation on the existing Node.js + React repository while keeping a clear migration path for deeper enterprise modules.

## Modules
1. Auth and RBAC foundation
2. Multi-hospital tenancy foundation (`hospital_id`, `branch_id`)
3. Patient management basics
4. Appointment management basics
5. Billing basics
6. Audit logging foundation

## Acceptance Criteria
- `/api/v1/*` Phase 1 route map exists for auth, users/roles, patients, appointments, encounters, billing/payments, reports, and audit logs.
- Role/permission constants and authorization middleware are available and reusable.
- Tenancy context middleware enforces `hospital_id` and supports optional `branch_id`.
- Core Phase 1 data model definitions are present (schema SQL + backend model stubs).
- Seed strategy artifacts include hashed demo user credentials only.
- Admin and patient frontends expose migration-ready, role-aware placeholder routes and module screens.
- Local baseline stack is runnable with Docker Compose.
- CI performs practical install/lint/build checks using existing scripts.

## Out of Scope (Next Phases)
- Complete clinical workflows (LIS, Radiology, Pharmacy, Inpatient)
- Insurance and telemedicine workflows
- AI assistants and predictive analytics
