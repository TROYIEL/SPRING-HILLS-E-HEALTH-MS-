# UHMS Phase 1 API Contract

Base path: `/api/v1`

## Auth
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `GET /auth/me`

## Users / Roles
- `GET /users`
- `POST /users`
- `GET /roles`
- `POST /roles`
- `POST /users/:userId/roles`

## Patients
- `GET /patients`
- `POST /patients`
- `GET /patients/:patientId`
- `PUT /patients/:patientId`

## Appointments
- `GET /appointments`
- `POST /appointments`
- `PUT /appointments/:appointmentId`

## Encounters
- `GET /encounters`
- `POST /encounters`

## Billing / Payments
- `GET /billing/invoices`
- `POST /billing/invoices`
- `GET /billing/payments`
- `POST /billing/payments`

## Reports
- `GET /reports/daily-collections`

## Audit Logs
- `GET /audit-logs`

## Notes
- Endpoints are scaffolded for safe incremental implementation.
- Tenant-bound routes require `x-hospital-id` header.
