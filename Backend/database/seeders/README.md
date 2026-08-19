# Phase 1 Seed Strategy

This folder provides placeholder seed artifacts for a multi-hospital Phase 1 baseline.

## Security rule
- Never store plaintext passwords in seed files.
- Seed files in this folder contain **bcrypt hashes only**.

## Recommended order
1. Seed hospitals and branches
2. Seed roles and permissions
3. Seed users with password hashes
4. Seed user-role links
