-- Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE technicians ENABLE ROW LEVEL SECURITY;
ALTER TABLE technician_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- ==================== USERS TABLE POLICIES ====================

-- Users can read their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Owners and admins can view all users
CREATE POLICY "Owners can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== PROFILES TABLE POLICIES ====================

-- Users can view and update their own profile
CREATE POLICY "Users can view own profile data" ON profiles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (user_id = auth.uid());

-- Owners and technicians can view customer profiles
CREATE POLICY "Staff can view customer profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin', 'technician')
    )
  );

-- ==================== ADDRESSES TABLE POLICIES ====================

-- Users can manage their own addresses
CREATE POLICY "Users can view own addresses" ON addresses
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert own addresses" ON addresses
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own addresses" ON addresses
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete own addresses" ON addresses
  FOR DELETE USING (user_id = auth.uid());

-- Staff can view customer addresses for jobs
CREATE POLICY "Staff can view job addresses" ON addresses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin', 'technician')
    )
  );

-- ==================== TECHNICIANS TABLE POLICIES ====================

-- Technicians can view their own data
CREATE POLICY "Technicians can view own data" ON technicians
  FOR SELECT USING (user_id = auth.uid());

-- Owners can manage all technician data
CREATE POLICY "Owners can view all technicians" ON technicians
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

CREATE POLICY "Owners can manage technicians" ON technicians
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== JOBS TABLE POLICIES ====================

-- Customers can view their own jobs
CREATE POLICY "Customers can view own jobs" ON jobs
  FOR SELECT USING (customer_id = auth.uid());

-- Technicians can view and update assigned jobs
CREATE POLICY "Technicians can view assigned jobs" ON jobs
  FOR SELECT USING (
    technician_id IN (
      SELECT id FROM technicians WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Technicians can update assigned jobs" ON jobs
  FOR UPDATE USING (
    technician_id IN (
      SELECT id FROM technicians WHERE user_id = auth.uid()
    )
  );

-- Owners can manage all jobs
CREATE POLICY "Owners can manage all jobs" ON jobs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== BOOKINGS TABLE POLICIES ====================

-- Customers can manage their own bookings
CREATE POLICY "Customers can view own bookings" ON bookings
  FOR SELECT USING (customer_id = auth.uid());

CREATE POLICY "Customers can create bookings" ON bookings
  FOR INSERT WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Customers can update own bookings" ON bookings
  FOR UPDATE USING (customer_id = auth.uid());

-- Owners can manage all bookings
CREATE POLICY "Owners can manage all bookings" ON bookings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== INVOICES TABLE POLICIES ====================

-- Customers can view their own invoices
CREATE POLICY "Customers can view own invoices" ON invoices
  FOR SELECT USING (customer_id = auth.uid());

-- Owners can manage all invoices
CREATE POLICY "Owners can manage all invoices" ON invoices
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== PAYMENTS TABLE POLICIES ====================

-- Customers can view their own payments
CREATE POLICY "Customers can view own payments" ON payments
  FOR SELECT USING (customer_id = auth.uid());

-- Customers can create payments for their invoices
CREATE POLICY "Customers can make payments" ON payments
  FOR INSERT WITH CHECK (
    customer_id = auth.uid() AND
    invoice_id IN (
      SELECT id FROM invoices WHERE customer_id = auth.uid()
    )
  );

-- Owners can manage all payments
CREATE POLICY "Owners can manage all payments" ON payments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== NOTIFICATIONS TABLE POLICIES ====================

-- Users can manage their own notifications
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE USING (user_id = auth.uid());

-- System can create notifications for any user
CREATE POLICY "System can create notifications" ON notifications
  FOR INSERT WITH CHECK (true);

-- ==================== MESSAGES TABLE POLICIES ====================

-- Users can view messages they sent or received
CREATE POLICY "Users can view own messages" ON messages
  FOR SELECT USING (
    sender_id = auth.uid() OR recipient_id = auth.uid()
  );

-- Users can send messages
CREATE POLICY "Users can send messages" ON messages
  FOR INSERT WITH CHECK (sender_id = auth.uid());

-- Users can update read status of received messages
CREATE POLICY "Users can mark messages as read" ON messages
  FOR UPDATE USING (recipient_id = auth.uid());

-- ==================== REVIEWS TABLE POLICIES ====================

-- Anyone can view published reviews
CREATE POLICY "Public can view published reviews" ON reviews
  FOR SELECT USING (is_published = true);

-- Customers can create reviews for their completed jobs
CREATE POLICY "Customers can create reviews" ON reviews
  FOR INSERT WITH CHECK (
    customer_id = auth.uid() AND
    job_id IN (
      SELECT id FROM jobs 
      WHERE customer_id = auth.uid() 
      AND status = 'completed'
    )
  );

-- Owners can manage all reviews
CREATE POLICY "Owners can manage reviews" ON reviews
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== SERVICES TABLE POLICIES ====================

-- Anyone can view active services
CREATE POLICY "Public can view active services" ON services
  FOR SELECT USING (is_active = true);

-- Owners can manage services
CREATE POLICY "Owners can manage services" ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== SETTINGS TABLE POLICIES ====================

-- Only owners and admins can manage settings
CREATE POLICY "Owners can manage settings" ON settings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- ==================== AUDIT LOGS POLICIES ====================

-- Only owners and admins can view audit logs
CREATE POLICY "Owners can view audit logs" ON audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('owner', 'admin')
    )
  );

-- System can create audit logs
CREATE POLICY "System can create audit logs" ON audit_logs
  FOR INSERT WITH CHECK (true);