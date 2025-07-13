-- ==================== UTILITY FUNCTIONS ====================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==================== TRIGGERS ====================

-- Auto-update updated_at columns
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==================== BUSINESS LOGIC FUNCTIONS ====================

-- Function to create user profile after signup
CREATE OR REPLACE FUNCTION create_user_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO users (id, email, role)
  VALUES (NEW.id, NEW.email, 'customer');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_user_profile();

-- Function to calculate total hours in time log
CREATE OR REPLACE FUNCTION calculate_time_log_hours()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.clock_out IS NOT NULL THEN
    NEW.total_hours := EXTRACT(EPOCH FROM (NEW.clock_out - NEW.clock_in)) / 3600.0 - (NEW.break_duration / 60.0);
    NEW.status := 'completed';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to calculate hours
CREATE TRIGGER calculate_hours_on_clock_out
  BEFORE INSERT OR UPDATE ON time_logs
  FOR EACH ROW EXECUTE FUNCTION calculate_time_log_hours();

-- Function to generate unique numbers
CREATE OR REPLACE FUNCTION generate_quote_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  year_month TEXT;
  sequence_num INTEGER;
BEGIN
  year_month := TO_CHAR(NOW(), 'YYYYMM');
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(quote_number FROM 8) AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM quotes
  WHERE quote_number LIKE year_month || '-%';
  
  new_number := year_month || '-' || LPAD(sequence_num::TEXT, 4, '0');
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION generate_invoice_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  year_month TEXT;
  sequence_num INTEGER;
BEGIN
  year_month := TO_CHAR(NOW(), 'YYYYMM');
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(invoice_number FROM 8) AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM invoices
  WHERE invoice_number LIKE year_month || '-%';
  
  new_number := year_month || '-' || LPAD(sequence_num::TEXT, 4, '0');
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Function to check technician availability
CREATE OR REPLACE FUNCTION is_technician_available(
  p_technician_id UUID,
  p_date DATE,
  p_start_time TIME,
  p_duration_minutes INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
  day_of_week INTEGER;
  is_scheduled BOOLEAN;
  has_conflict BOOLEAN;
  end_time TIME;
BEGIN
  -- Get day of week (0 = Sunday)
  day_of_week := EXTRACT(DOW FROM p_date);
  
  -- Check if technician works on this day
  SELECT EXISTS(
    SELECT 1 FROM technician_schedules
    WHERE technician_id = p_technician_id
    AND day_of_week = day_of_week
    AND is_active = true
    AND start_time <= p_start_time
    AND end_time >= (p_start_time + (p_duration_minutes || ' minutes')::INTERVAL)
  ) INTO is_scheduled;
  
  IF NOT is_scheduled THEN
    RETURN false;
  END IF;
  
  -- Calculate end time
  end_time := p_start_time + (p_duration_minutes || ' minutes')::INTERVAL;
  
  -- Check for conflicts with existing jobs
  SELECT EXISTS(
    SELECT 1 FROM jobs
    WHERE technician_id = p_technician_id
    AND scheduled_date = p_date
    AND status NOT IN ('completed', 'cancelled')
    AND (
      (scheduled_time <= p_start_time AND (scheduled_time + (estimated_duration || ' minutes')::INTERVAL) > p_start_time)
      OR
      (scheduled_time < end_time AND scheduled_time >= p_start_time)
    )
  ) INTO has_conflict;
  
  RETURN NOT has_conflict;
END;
$$ LANGUAGE plpgsql;

-- Function to get next available slot for a technician
CREATE OR REPLACE FUNCTION get_next_available_slot(
  p_technician_id UUID,
  p_service_duration INTEGER,
  p_start_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE (
  available_date DATE,
  available_time TIME
) AS $$
DECLARE
  current_date DATE;
  current_day INTEGER;
  schedule_record RECORD;
  time_slot TIME;
  is_available BOOLEAN;
BEGIN
  current_date := p_start_date;
  
  -- Loop through next 30 days
  WHILE current_date <= p_start_date + INTERVAL '30 days' LOOP
    current_day := EXTRACT(DOW FROM current_date);
    
    -- Get schedule for this day
    FOR schedule_record IN 
      SELECT start_time, end_time 
      FROM technician_schedules 
      WHERE technician_id = p_technician_id 
      AND day_of_week = current_day 
      AND is_active = true
    LOOP
      time_slot := schedule_record.start_time;
      
      -- Check each 30-minute slot
      WHILE time_slot + (p_service_duration || ' minutes')::INTERVAL <= schedule_record.end_time LOOP
        is_available := is_technician_available(p_technician_id, current_date, time_slot, p_service_duration);
        
        IF is_available THEN
          available_date := current_date;
          available_time := time_slot;
          RETURN NEXT;
          RETURN; -- Return first available slot
        END IF;
        
        time_slot := time_slot + INTERVAL '30 minutes';
      END LOOP;
    END LOOP;
    
    current_date := current_date + INTERVAL '1 day';
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate invoice totals
CREATE OR REPLACE FUNCTION calculate_invoice_total()
RETURNS TRIGGER AS $$
BEGIN
  -- Calculate subtotal from items
  NEW.subtotal := (
    SELECT COALESCE(SUM((item->>'price')::DECIMAL * (item->>'quantity')::INTEGER), 0)
    FROM jsonb_array_elements(NEW.items) AS item
  );
  
  -- Calculate tax
  NEW.tax_amount := ROUND(NEW.subtotal * (NEW.tax_rate / 100), 2);
  
  -- Calculate total
  NEW.total := NEW.subtotal + NEW.tax_amount - COALESCE(NEW.discount_amount, 0);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for invoice calculations
CREATE TRIGGER calculate_invoice_total_trigger
  BEFORE INSERT OR UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION calculate_invoice_total();

-- Function to update booking status when job is created
CREATE OR REPLACE FUNCTION update_booking_on_job_creation()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE bookings 
  SET status = 'confirmed'
  WHERE id = NEW.booking_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for booking status update
CREATE TRIGGER update_booking_status_on_job
  AFTER INSERT ON jobs
  FOR EACH ROW EXECUTE FUNCTION update_booking_on_job_creation();

-- Function to create notification
CREATE OR REPLACE FUNCTION create_notification(
  p_user_id UUID,
  p_type notification_type,
  p_title TEXT,
  p_message TEXT,
  p_data JSONB DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  notification_id UUID;
BEGIN
  INSERT INTO notifications (user_id, type, title, message, data)
  VALUES (p_user_id, p_type, p_title, p_message, p_data)
  RETURNING id INTO notification_id;
  
  RETURN notification_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle job completion
CREATE OR REPLACE FUNCTION handle_job_completion()
RETURNS TRIGGER AS $$
DECLARE
  customer_email TEXT;
  technician_name TEXT;
BEGIN
  IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
    -- Create invoice
    INSERT INTO invoices (
      invoice_number,
      job_id,
      customer_id,
      items,
      subtotal,
      tax_rate,
      status,
      due_date
    )
    SELECT 
      generate_invoice_number(),
      NEW.id,
      NEW.customer_id,
      jsonb_build_array(
        jsonb_build_object(
          'description', s.name,
          'quantity', 1,
          'price', s.base_price
        )
      ),
      s.base_price,
      13.00, -- Ontario HST
      'draft',
      CURRENT_DATE + INTERVAL '30 days'
    FROM services s
    WHERE s.id = NEW.service_id;
    
    -- Create notification for customer
    PERFORM create_notification(
      NEW.customer_id,
      'booking'::notification_type,
      'Service Completed',
      'Your duct cleaning service has been completed. Please check your invoice.',
      jsonb_build_object('job_id', NEW.id)
    );
    
    -- Update technician time log
    UPDATE time_logs 
    SET clock_out = NEW.actual_end, 
        status = 'completed'
    WHERE job_id = NEW.id 
    AND technician_id = NEW.technician_id
    AND clock_out IS NULL;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for job completion
CREATE TRIGGER handle_job_completion_trigger
  AFTER UPDATE ON jobs
  FOR EACH ROW EXECUTE FUNCTION handle_job_completion();

-- Function to get revenue statistics
CREATE OR REPLACE FUNCTION get_revenue_stats(
  p_start_date DATE,
  p_end_date DATE
)
RETURNS TABLE (
  total_revenue DECIMAL,
  paid_revenue DECIMAL,
  pending_revenue DECIMAL,
  job_count INTEGER,
  average_job_value DECIMAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(SUM(i.total), 0) as total_revenue,
    COALESCE(SUM(CASE WHEN i.status = 'paid' THEN i.total ELSE 0 END), 0) as paid_revenue,
    COALESCE(SUM(CASE WHEN i.status IN ('sent', 'viewed') THEN i.total ELSE 0 END), 0) as pending_revenue,
    COUNT(DISTINCT j.id)::INTEGER as job_count,
    COALESCE(AVG(i.total), 0) as average_job_value
  FROM jobs j
  JOIN invoices i ON i.job_id = j.id
  WHERE j.scheduled_date BETWEEN p_start_date AND p_end_date
  AND j.status = 'completed';
END;
$$ LANGUAGE plpgsql;

-- Function to check and update overdue invoices
CREATE OR REPLACE FUNCTION update_overdue_invoices()
RETURNS void AS $$
BEGIN
  UPDATE invoices
  SET status = 'overdue'
  WHERE status IN ('sent', 'viewed')
  AND due_date < CURRENT_DATE;
END;
$$ LANGUAGE plpgsql;

-- Function to create audit log entry
CREATE OR REPLACE FUNCTION create_audit_log(
  p_user_id UUID,
  p_action TEXT,
  p_entity_type TEXT,
  p_entity_id UUID,
  p_old_values JSONB DEFAULT NULL,
  p_new_values JSONB DEFAULT NULL
)
RETURNS void AS $$
BEGIN
  INSERT INTO audit_logs (
    user_id,
    action,
    entity_type,
    entity_id,
    old_values,
    new_values
  ) VALUES (
    p_user_id,
    p_action,
    p_entity_type,
    p_entity_id,
    p_old_values,
    p_new_values
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;