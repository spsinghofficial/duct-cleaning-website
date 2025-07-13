-- Sample data for testing
-- Note: Run this after the schema is created

-- Insert owner user
INSERT INTO auth.users (id, email) VALUES 
  ('11111111-1111-1111-1111-111111111111', 'owner@ductclean.ca');

INSERT INTO users (id, email, role, email_verified, is_active) VALUES
  ('11111111-1111-1111-1111-111111111111', 'owner@ductclean.ca', 'owner', true, true);

INSERT INTO profiles (user_id, first_name, last_name, phone) VALUES
  ('11111111-1111-1111-1111-111111111111', 'John', 'Owner', '416-555-0001');

-- Insert technicians
INSERT INTO auth.users (id, email) VALUES 
  ('22222222-2222-2222-2222-222222222222', 'tech1@ductclean.ca'),
  ('33333333-3333-3333-3333-333333333333', 'tech2@ductclean.ca');

INSERT INTO users (id, email, role, email_verified, is_active) VALUES
  ('22222222-2222-2222-2222-222222222222', 'tech1@ductclean.ca', 'technician', true, true),
  ('33333333-3333-3333-3333-333333333333', 'tech2@ductclean.ca', 'technician', true, true);

INSERT INTO profiles (user_id, first_name, last_name, phone) VALUES
  ('22222222-2222-2222-2222-222222222222', 'Mike', 'Johnson', '416-555-0002'),
  ('33333333-3333-3333-3333-333333333333', 'Sarah', 'Williams', '416-555-0003');

INSERT INTO technicians (user_id, employee_id, hire_date, hourly_rate, commission_rate, specializations) VALUES
  ('22222222-2222-2222-2222-222222222222', 'TECH001', '2023-01-15', 25.00, 5.00, ARRAY['residential', 'commercial']),
  ('33333333-3333-3333-3333-333333333333', 'TECH002', '2023-03-20', 22.00, 5.00, ARRAY['residential']);

-- Insert technician schedules (Monday-Friday 8AM-5PM)
INSERT INTO technician_schedules (technician_id, day_of_week, start_time, end_time) 
SELECT 
  t.id,
  day_num,
  '08:00'::TIME,
  '17:00'::TIME
FROM technicians t
CROSS JOIN generate_series(1, 5) AS day_num;

-- Insert sample customers
INSERT INTO auth.users (id, email) VALUES 
  ('44444444-4444-4444-4444-444444444444', 'customer1@gmail.com'),
  ('55555555-5555-5555-5555-555555555555', 'customer2@gmail.com');

INSERT INTO users (id, email, role, email_verified, is_active) VALUES
  ('44444444-4444-4444-4444-444444444444', 'customer1@gmail.com', 'customer', true, true),
  ('55555555-5555-5555-5555-555555555555', 'customer2@gmail.com', 'customer', true, true);

INSERT INTO profiles (user_id, first_name, last_name, phone) VALUES
  ('44444444-4444-4444-4444-444444444444', 'Alice', 'Smith', '905-555-0101'),
  ('55555555-5555-5555-5555-555555555555', 'Bob', 'Brown', '905-555-0102');

-- Insert customer addresses
INSERT INTO addresses (user_id, type, is_primary, address_line1, city, province, postal_code) VALUES
  ('44444444-4444-4444-4444-444444444444', 'service', true, '123 Main St', 'Brampton', 'ON', 'L6R 1A1'),
  ('55555555-5555-5555-5555-555555555555', 'service', true, '456 Oak Ave', 'Mississauga', 'ON', 'L5B 2C3');

-- Insert services
INSERT INTO services (name, slug, description, category, base_price, duration_minutes) VALUES
  ('Residential Duct Cleaning', 'residential-duct-cleaning', 'Complete cleaning of all air ducts in residential properties', 'Residential', 299.99, 120),
  ('Dryer Vent Cleaning', 'dryer-vent-cleaning', 'Professional dryer vent cleaning service', 'Residential', 99.99, 45),
  ('Commercial Duct Cleaning', 'commercial-duct-cleaning', 'Comprehensive duct cleaning for commercial properties', 'Commercial', 599.99, 240),
  ('Furnace Cleaning', 'furnace-cleaning', 'Deep cleaning of furnace components', 'Residential', 149.99, 60);

-- Insert service add-ons
INSERT INTO service_add_ons (service_id, name, price, duration_minutes) VALUES
  ((SELECT id FROM services WHERE slug = 'residential-duct-cleaning'), 'Sanitization Treatment', 79.99, 30),
  ((SELECT id FROM services WHERE slug = 'residential-duct-cleaning'), 'Additional Vents (per vent)', 15.00, 10);

-- Insert sample bookings
INSERT INTO bookings (customer_id, service_id, address_id, preferred_date, preferred_time_slot, status, source) VALUES
  ('44444444-4444-4444-4444-444444444444', 
   (SELECT id FROM services WHERE slug = 'residential-duct-cleaning'),
   (SELECT id FROM addresses WHERE user_id = '44444444-4444-4444-4444-444444444444' LIMIT 1),
   CURRENT_DATE + INTERVAL '3 days',
   '9:00 AM - 11:00 AM',
   'confirmed',
   'website'),
  ('55555555-5555-5555-5555-555555555555', 
   (SELECT id FROM services WHERE slug = 'dryer-vent-cleaning'),
   (SELECT id FROM addresses WHERE user_id = '55555555-5555-5555-5555-555555555555' LIMIT 1),
   CURRENT_DATE + INTERVAL '5 days',
   '2:00 PM - 4:00 PM',
   'pending',
   'phone');

-- Insert sample jobs for confirmed bookings
INSERT INTO jobs (
  booking_id, 
  customer_id, 
  technician_id, 
  service_id, 
  address_id, 
  scheduled_date, 
  scheduled_time,
  estimated_duration,
  status
) 
SELECT 
  b.id,
  b.customer_id,
  (SELECT id FROM technicians ORDER BY RANDOM() LIMIT 1),
  b.service_id,
  b.address_id,
  b.preferred_date,
  '09:00'::TIME,
  s.duration_minutes,
  'scheduled'
FROM bookings b
JOIN services s ON s.id = b.service_id
WHERE b.status = 'confirmed';

-- Insert sample quotes
INSERT INTO quotes (
  quote_number,
  customer_id,
  service_id,
  address_id,
  items,
  subtotal,
  tax_rate,
  tax_amount,
  total,
  valid_until,
  status
) VALUES
  ('202401-0001',
   '44444444-4444-4444-4444-444444444444',
   (SELECT id FROM services WHERE slug = 'commercial-duct-cleaning'),
   (SELECT id FROM addresses WHERE user_id = '44444444-4444-4444-4444-444444444444' LIMIT 1),
   '[{"service": "Commercial Duct Cleaning", "quantity": 1, "price": 599.99}]'::jsonb,
   599.99,
   13.00,
   78.00,
   677.99,
   CURRENT_DATE + INTERVAL '30 days',
   'sent');

-- Insert settings
INSERT INTO settings (key, value, category) VALUES
  ('business_hours', '{"monday": {"open": "08:00", "close": "18:00"}, "tuesday": {"open": "08:00", "close": "18:00"}, "wednesday": {"open": "08:00", "close": "18:00"}, "thursday": {"open": "08:00", "close": "18:00"}, "friday": {"open": "08:00", "close": "18:00"}, "saturday": {"open": "09:00", "close": "14:00"}, "sunday": {"closed": true}}'::jsonb, 'schedule'),
  ('booking_buffer_days', '2'::jsonb, 'booking'),
  ('service_area_postal_codes', '["L6R", "L6S", "L6T", "L6P", "L6V", "L6W", "L6X", "L6Y", "L6Z", "L5B", "L5C", "L5V"]'::jsonb, 'service'),
  ('tax_rate', '13.00'::jsonb, 'financial'),
  ('payment_terms_days', '30'::jsonb, 'financial');

-- Insert sample reviews
INSERT INTO reviews (customer_id, job_id, technician_id, rating, comment, is_published) 
SELECT 
  j.customer_id,
  j.id,
  j.technician_id,
  5,
  'Excellent service! The technician was professional and thorough.',
  true
FROM jobs j
WHERE j.status = 'completed'
LIMIT 1;

-- Insert sample notifications
INSERT INTO notifications (user_id, type, title, message) VALUES
  ('44444444-4444-4444-4444-444444444444', 'booking', 'Booking Confirmed', 'Your duct cleaning service has been confirmed for ' || TO_CHAR(CURRENT_DATE + INTERVAL '3 days', 'Mon DD, YYYY')),
  ('22222222-2222-2222-2222-222222222222', 'booking', 'New Job Assigned', 'You have been assigned a new duct cleaning job for ' || TO_CHAR(CURRENT_DATE + INTERVAL '3 days', 'Mon DD, YYYY'));