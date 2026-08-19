# UHMS RBAC Matrix (Phase 1)

## Roles
- super_admin
- hospital_admin
- doctor
- frontdesk
- patient
- nurse
- pharmacy
- lab
- billing

## Permission Matrix
| Permission | super_admin | hospital_admin | doctor | frontdesk | patient | nurse | pharmacy | lab | billing |
|---|---|---|---|---|---|---|---|---|---|
| auth.login | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| users.read | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| users.manage | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| roles.read | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| roles.manage | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| patients.read | ✅ | ✅ | ✅ | ✅ | self | ✅ | ❌ | ❌ | ✅ |
| patients.manage | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| appointments.read | ✅ | ✅ | ✅ | ✅ | self | ✅ | ❌ | ❌ | ✅ |
| appointments.manage | ✅ | ✅ | ✅ | ✅ | self-limited | ✅ | ❌ | ❌ | ❌ |
| encounters.read | ✅ | ✅ | ✅ | ❌ | self | ✅ | ❌ | ✅ | ❌ |
| encounters.manage | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| billing.read | ✅ | ✅ | ✅ | ✅ | self | ❌ | ❌ | ❌ | ✅ |
| billing.manage | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| payments.manage | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| reports.daily_collections | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| audit.read | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
