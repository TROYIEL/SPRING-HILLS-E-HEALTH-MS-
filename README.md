# SPRING HILLS UHMS - Phase 1 Foundation

This repository now includes a **Phase 1 foundation** for a universal, multi-hospital management system while preserving existing backend/frontend behavior.

## Repository Structure
- `Backend/` - Existing Node.js/Express API + Phase 1 API scaffolding
- `Frontend-Admin/` - Existing admin app + Phase 1 role-aware placeholders
- `Frontend-Patient/` - Existing patient app + Phase 1 portal placeholders
- `docs/` - Phase 1 roadmap, architecture, RBAC matrix, API contract
- `nginx/` - Optional local reverse proxy config

## Phase 1 Highlights
- Auth + RBAC foundation (`roles`, `permissions`, middleware scaffolding)
- Multi-hospital tenancy pattern (`hospital_id`, `branch_id`)
- Core API slices under `/api/v1/*`
- Patient/appointment/billing/encounter/audit contract scaffolding
- SQL schema blueprint for enterprise migration
- Seed strategy with **hashed** demo user credentials only

## Quick Start (Local Node)
### Backend
```bash
cd Backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Admin
```bash
cd Frontend-Admin
npm install
cp .env.example .env
npm run dev
```

### Frontend Patient
```bash
cd Frontend-Patient
npm install
cp .env.example .env
npm run dev
```

## Quick Start (Docker Compose)
```bash
docker compose up --build
```

Services:
- Backend: `http://localhost:4000`
- Frontend Admin: `http://localhost:5174`
- Frontend Patient: `http://localhost:5175`
- Nginx Gateway: `http://localhost:8080`

## Demo Seed Users (credential reference)
Credential pairs are documented for operational convenience; seed artifacts store only hashed password values.

- superadmin@uhms.com / SuperAdmin@2026
- admin@hospital.com / Admin@2026
- doctor@hospital.com / Doctor@2026
- frontdesk@hospital.com / FrontDesk@2026
- patient@hospital.com / Patient@2026
- nurse@hospital.com / Nurse@2026
- pharmacy@hospital.com / Pharmacy@2026
- lab@hospital.com / Lab@2026
- billing@hospital.com / Billing@2026

## Documentation
- `docs/PHASE1_ROADMAP.md`
- `docs/ARCHITECTURE.md`
- `docs/RBAC_MATRIX.md`
- `docs/API_PHASE1.md`

## Current Limitations
- Phase 1 endpoints are scaffolded with placeholder handlers where implementation is pending.
- Existing Mongo-backed modules remain active; SQL assets provide migration-ready foundation for PostgreSQL-oriented rollout.
