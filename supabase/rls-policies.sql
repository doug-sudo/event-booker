-- Row Level Security Policies
-- Run this AFTER schema.sql in the Supabase SQL Editor

-- Enable RLS on all tables
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Regions: public read
CREATE POLICY "Public can read regions"
  ON regions FOR SELECT
  USING (true);

-- Regions: admin manage
CREATE POLICY "Admins can manage regions"
  ON regions FOR ALL
  USING (auth.role() = 'authenticated');

-- Events: public read
CREATE POLICY "Public can read events"
  ON events FOR SELECT
  USING (true);

-- Events: admin manage (insert, update, delete)
CREATE POLICY "Admins can insert events"
  ON events FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admins can update events"
  ON events FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can delete events"
  ON events FOR DELETE
  USING (auth.role() = 'authenticated');

-- Registrations: anyone can insert (public form submission)
CREATE POLICY "Anyone can submit registration"
  ON registrations FOR INSERT
  WITH CHECK (true);

-- Registrations: only authenticated admins can read
CREATE POLICY "Admins can read registrations"
  ON registrations FOR SELECT
  USING (auth.role() = 'authenticated');

-- Registrations: only authenticated admins can update (approve/decline)
CREATE POLICY "Admins can update registrations"
  ON registrations FOR UPDATE
  USING (auth.role() = 'authenticated');
