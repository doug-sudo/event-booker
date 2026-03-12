-- SidelineSwap Partner Portal Schema
-- Run this in the Supabase SQL Editor to create all tables

-- Regions table
CREATE TABLE IF NOT EXISTS regions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  coverage_description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Events table (calendar events)
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  region_id UUID REFERENCES regions(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('DSG', 'MNKY', 'PRNI', 'HOS', 'OTHR', 'HOLIDAY')),
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'tentative', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  store_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  region_id UUID REFERENCES regions(id),
  preferred_dates JSONB DEFAULT '[]',
  address_1 TEXT,
  address_2 TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  foot_traffic TEXT,
  slot_type TEXT DEFAULT 'weekend' CHECK (slot_type IN ('weekday', 'weekend')),
  include_friday BOOLEAN DEFAULT false,
  special_notes TEXT,
  event_requirements JSONB DEFAULT '[]',
  has_loading_dock BOOLEAN,
  requires_liftgate BOOLEAN,
  can_provide_pallets BOOLEAN,
  event_hours JSONB DEFAULT '{}',
  w9_url TEXT,
  logo_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'declined')),
  submitted_at TIMESTAMPTZ DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID
);

-- Indexes for query performance
CREATE INDEX IF NOT EXISTS idx_events_region_id ON events(region_id);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);
CREATE INDEX IF NOT EXISTS idx_events_event_type ON events(event_type);
CREATE INDEX IF NOT EXISTS idx_registrations_region_id ON registrations(region_id);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);
