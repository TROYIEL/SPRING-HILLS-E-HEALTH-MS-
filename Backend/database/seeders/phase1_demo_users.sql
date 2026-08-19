-- Demo users for Phase 1 (bcrypt hashes only)

INSERT INTO users (id, hospital_id, branch_id, email, password_hash, first_name, last_name, status)
VALUES
  ('11111111-1111-1111-1111-111111111111', NULL, NULL, 'superadmin@uhms.com', '$2b$12$qtLBXLBjkqQ4VHY8sccKAeHzzPyfMiXQZ0do4mL75QEek6S9HPCC2', 'Super', 'Admin', 'active'),
  ('22222222-2222-2222-2222-222222222222', NULL, NULL, 'admin@hospital.com', '$2b$12$bmhFMz2XvqW8pntoitmNnuASQICCbN100ap4YckUQYlAvap59RcVW', 'Hospital', 'Admin', 'active'),
  ('33333333-3333-3333-3333-333333333333', NULL, NULL, 'doctor@hospital.com', '$2b$12$8Qx7MYkdbgmxayGSl5cJ9.lgTwrCi5wnuHA7UpGDqwXDKSDyiIuvm', 'Phase', 'Doctor', 'active'),
  ('44444444-4444-4444-4444-444444444444', NULL, NULL, 'frontdesk@hospital.com', '$2b$12$GCr1cg34XaYt8BfPkrOwYOokOUA2Ua9Ak7tixibUtIVfbHqhLm7q2', 'Front', 'Desk', 'active'),
  ('55555555-5555-5555-5555-555555555555', NULL, NULL, 'patient@hospital.com', '$2b$12$9q/b6W8g6DI2Vx5VDxZcnOLaYzmOaJIyWemywjSbgOfkv/QRqMk4u', 'Demo', 'Patient', 'active'),
  ('66666666-6666-6666-6666-666666666666', NULL, NULL, 'nurse@hospital.com', '$2b$12$kPvUzzG8EL79Ke2.tvMXfO7m22YfGaT/mDoDKuGMxlzt261mQmTK.', 'Phase', 'Nurse', 'active'),
  ('77777777-7777-7777-7777-777777777777', NULL, NULL, 'pharmacy@hospital.com', '$2b$12$ui8beGUwRLdWOeozO5HEA.FW6whWFWMF16ESiNrNV7LsNO2Cl0Re.', 'Phase', 'Pharmacy', 'active'),
  ('88888888-8888-8888-8888-888888888888', NULL, NULL, 'lab@hospital.com', '$2b$12$CoDBxXxfue1LFhkRCD9.f.3DsS5Kmp0dTcEIrkBLxUe9MczNc7l4G', 'Phase', 'Lab', 'active'),
  ('99999999-9999-9999-9999-999999999999', NULL, NULL, 'billing@hospital.com', '$2b$12$8EUt3Xhhs/9vUldy07mQj.EOPHSJWHpj4qcUKjXiaztFz.5ANuMKK', 'Phase', 'Billing', 'active');
