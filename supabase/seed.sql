-- Seed Data for SidelineSwap Partner Portal
-- Generated from 2026 event calendar Excel data
-- Run this AFTER schema.sql and rls-policies.sql

-- ============================================
-- REGIONS (15 regions)
-- ============================================
INSERT INTO regions (name, coverage_description) VALUES
  ('Baltimore/DMV', 'Baltimore, Washington D.C., Maryland, Virginia'),
  ('Chicago', 'Chicago metro area and Northern Illinois'),
  ('Colorado', 'Denver, Boulder, Colorado Springs, and surrounding areas'),
  ('Connecticut', 'Connecticut and Western Massachusetts'),
  ('Detroit/Toledo', 'Detroit metro, Ann Arbor, Toledo, and SE Michigan'),
  ('Houston', 'Houston metro and Southeast Texas'),
  ('Long Island', 'Long Island, Queens, and Brooklyn'),
  ('NE Boston #1', 'Greater Boston, North Shore, and Southern NH'),
  ('NE Boston #2', 'South Shore, Cape Cod, and Rhode Island'),
  ('NJ/NY', 'Northern New Jersey and New York City metro'),
  ('Philadelphia', 'Philadelphia metro, South Jersey, and Delaware'),
  ('Pittsburgh', 'Pittsburgh metro and Western Pennsylvania'),
  ('SoCal', 'Los Angeles, Orange County, and San Diego'),
  ('Toronto #1', 'Greater Toronto Area - North and East'),
  ('Toronto #2', 'Greater Toronto Area - West and Hamilton');

-- ============================================
-- HOLIDAY EVENTS
-- Each holiday week blocks all 5 slots (Tue, Wed, Thu, Fri, Sat-Sun)
-- ============================================
-- NEW YEAR''S DAY (1) (Week 1)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2025-12-30', '2025-12-30', 'HOLIDAY', 'confirmed', 'NEW YEAR''S DAY (1)'),
  (NULL, '2025-12-31', '2025-12-31', 'HOLIDAY', 'confirmed', 'NEW YEAR''S DAY (1)'),
  (NULL, '2026-01-01', '2026-01-01', 'HOLIDAY', 'confirmed', 'NEW YEAR''S DAY (1)'),
  (NULL, '2026-01-02', '2026-01-02', 'HOLIDAY', 'confirmed', 'NEW YEAR''S DAY (1)'),
  (NULL, '2026-01-03', '2026-01-04', 'HOLIDAY', 'confirmed', 'NEW YEAR''S DAY (1)');

-- GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6) (Week 14)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-03-31', '2026-03-31', 'HOLIDAY', 'confirmed', 'GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6)'),
  (NULL, '2026-04-01', '2026-04-01', 'HOLIDAY', 'confirmed', 'GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6)'),
  (NULL, '2026-04-02', '2026-04-02', 'HOLIDAY', 'confirmed', 'GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6)'),
  (NULL, '2026-04-03', '2026-04-03', 'HOLIDAY', 'confirmed', 'GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6)'),
  (NULL, '2026-04-04', '2026-04-05', 'HOLIDAY', 'confirmed', 'GOOD FRIDAY (3) EASTER (5) & EASTER MONDAY (6)');

-- MEMORIAL DAY (25) (Week 21)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-05-19', '2026-05-19', 'HOLIDAY', 'confirmed', 'MEMORIAL DAY (25)'),
  (NULL, '2026-05-20', '2026-05-20', 'HOLIDAY', 'confirmed', 'MEMORIAL DAY (25)'),
  (NULL, '2026-05-21', '2026-05-21', 'HOLIDAY', 'confirmed', 'MEMORIAL DAY (25)'),
  (NULL, '2026-05-22', '2026-05-22', 'HOLIDAY', 'confirmed', 'MEMORIAL DAY (25)'),
  (NULL, '2026-05-23', '2026-05-24', 'HOLIDAY', 'confirmed', 'MEMORIAL DAY (25)');

-- INDEPENDENCE DAY (4) (Week 27)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-06-30', '2026-06-30', 'HOLIDAY', 'confirmed', 'INDEPENDENCE DAY (4)'),
  (NULL, '2026-07-01', '2026-07-01', 'HOLIDAY', 'confirmed', 'INDEPENDENCE DAY (4)'),
  (NULL, '2026-07-02', '2026-07-02', 'HOLIDAY', 'confirmed', 'INDEPENDENCE DAY (4)'),
  (NULL, '2026-07-03', '2026-07-03', 'HOLIDAY', 'confirmed', 'INDEPENDENCE DAY (4)'),
  (NULL, '2026-07-04', '2026-07-05', 'HOLIDAY', 'confirmed', 'INDEPENDENCE DAY (4)');

-- LABOR DAY (7) (Week 36)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-09-01', '2026-09-01', 'HOLIDAY', 'confirmed', 'LABOR DAY (7)'),
  (NULL, '2026-09-02', '2026-09-02', 'HOLIDAY', 'confirmed', 'LABOR DAY (7)'),
  (NULL, '2026-09-03', '2026-09-03', 'HOLIDAY', 'confirmed', 'LABOR DAY (7)'),
  (NULL, '2026-09-04', '2026-09-04', 'HOLIDAY', 'confirmed', 'LABOR DAY (7)'),
  (NULL, '2026-09-05', '2026-09-06', 'HOLIDAY', 'confirmed', 'LABOR DAY (7)');

-- THANKGIVING DAY (26) BFCM (27-30) (Week 48)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-11-24', '2026-11-24', 'HOLIDAY', 'confirmed', 'THANKGIVING DAY (26) BFCM (27-30)'),
  (NULL, '2026-11-25', '2026-11-25', 'HOLIDAY', 'confirmed', 'THANKGIVING DAY (26) BFCM (27-30)'),
  (NULL, '2026-11-26', '2026-11-26', 'HOLIDAY', 'confirmed', 'THANKGIVING DAY (26) BFCM (27-30)'),
  (NULL, '2026-11-27', '2026-11-27', 'HOLIDAY', 'confirmed', 'THANKGIVING DAY (26) BFCM (27-30)'),
  (NULL, '2026-11-28', '2026-11-29', 'HOLIDAY', 'confirmed', 'THANKGIVING DAY (26) BFCM (27-30)');

-- WKND BEFORE CHRISTMAS (Week 51)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-12-15', '2026-12-15', 'HOLIDAY', 'confirmed', 'WKND BEFORE CHRISTMAS'),
  (NULL, '2026-12-16', '2026-12-16', 'HOLIDAY', 'confirmed', 'WKND BEFORE CHRISTMAS'),
  (NULL, '2026-12-17', '2026-12-17', 'HOLIDAY', 'confirmed', 'WKND BEFORE CHRISTMAS'),
  (NULL, '2026-12-18', '2026-12-18', 'HOLIDAY', 'confirmed', 'WKND BEFORE CHRISTMAS'),
  (NULL, '2026-12-19', '2026-12-20', 'HOLIDAY', 'confirmed', 'WKND BEFORE CHRISTMAS');

-- CHRISTMAS (25) | BOXING DAY (26) (Week 52)
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  (NULL, '2026-12-22', '2026-12-22', 'HOLIDAY', 'confirmed', 'CHRISTMAS (25) | BOXING DAY (26)'),
  (NULL, '2026-12-23', '2026-12-23', 'HOLIDAY', 'confirmed', 'CHRISTMAS (25) | BOXING DAY (26)'),
  (NULL, '2026-12-24', '2026-12-24', 'HOLIDAY', 'confirmed', 'CHRISTMAS (25) | BOXING DAY (26)'),
  (NULL, '2026-12-25', '2026-12-25', 'HOLIDAY', 'confirmed', 'CHRISTMAS (25) | BOXING DAY (26)'),
  (NULL, '2026-12-26', '2026-12-27', 'HOLIDAY', 'confirmed', 'CHRISTMAS (25) | BOXING DAY (26)');

-- CANADA ONLY: VICTORIA DAY (18) (Week 20) — Toronto only
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-12', '2026-05-12', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-13', '2026-05-13', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-14', '2026-05-14', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-15', '2026-05-15', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-16', '2026-05-17', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)');

INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-12', '2026-05-12', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-13', '2026-05-13', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-14', '2026-05-14', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-15', '2026-05-15', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-16', '2026-05-17', 'HOLIDAY', 'confirmed', 'CANADA ONLY: VICTORIA DAY (18)');

-- CANADA ONLY: THANKGIVING DAY (12) (Week 41) — Toronto only
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-10-06', '2026-10-06', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-10-07', '2026-10-07', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-10-08', '2026-10-08', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-10-09', '2026-10-09', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-10-10', '2026-10-11', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)');

INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-06', '2026-10-06', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-07', '2026-10-07', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-08', '2026-10-08', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-09', '2026-10-09', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)'),
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-10', '2026-10-11', 'HOLIDAY', 'confirmed', 'CANADA ONLY: THANKGIVING DAY (12)');

-- ============================================
-- BOOKED EVENTS (from Excel calendar)
-- All events are weekend (Sat-Sun) unless noted
-- ============================================
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-01-10', '2026-01-11', 'DSG', 'confirmed', 'DSG-Frederick, MD #614');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-01-10', '2026-01-11', 'PRNI', 'confirmed', 'PRNI-Indianapolis, IN');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-01-10', '2026-01-11', 'OTHR', 'confirmed', 'TSH-Riverside, CA | MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-01-10', '2026-01-11', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-01-17', '2026-01-18', 'DSG', 'confirmed', 'DSG-Frederick, MD #614');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-01-17', '2026-01-18', 'PRNI', 'confirmed', 'PRNI-Indianapolis, IN');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-01-17', '2026-01-18', 'OTHR', 'confirmed', 'BRTN-Denver, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-01-17', '2026-01-18', 'OTHR', 'confirmed', 'SEC-ProStride-El Segundo, CA | MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-01-17', '2026-01-18', 'OTHR', 'confirmed', 'Rinx (JAN 13-14) | OFF');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'Zimmermann''s | MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'D&Q | MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-01-17', '2026-01-18', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-01-24', '2026-01-25', 'OTHR', 'confirmed', 'OTHR-The St. James-Springfield, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-01-24', '2026-01-25', 'OTHR', 'confirmed', 'BRTN-Chicago, IL');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-01-24', '2026-01-25', 'PRNI', 'confirmed', 'PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-01-24', '2026-01-25', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-01-24', '2026-01-25', 'OTHR', 'confirmed', 'SLG-Hillcrest, ON, CA-Backstock Review (21 & 22)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-01-31', '2026-02-01', 'OTHR', 'confirmed', 'OTHR-The St. James-Springfield, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-01-31', '2026-02-01', 'OTHR', 'confirmed', 'OTHR-Gunzo''s-Morton Grove, IL');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-01-31', '2026-02-01', 'PRNI', 'confirmed', 'PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'D&Q | MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-01-31', '2026-02-01', 'PRNI', 'confirmed', 'PRNI-Pittsburgh, PA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-01-31', '2026-02-01', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-01-31', '2026-02-01', 'OTHR', 'confirmed', 'SLG-Markham, ON, CA Backstock Review (28-29)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-01-31', '2026-02-01', 'OTHR', 'confirmed', 'SLG-Markham, ON, CA Backstock Review (28-29)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-02-07', '2026-02-08', 'DSG', 'confirmed', 'DSG-Sterling, VA #283 "Dulles"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-02-07', '2026-02-08', 'DSG', 'confirmed', 'DSG-Schererville, IN #1363');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-02-07', '2026-02-08', 'DSG', 'confirmed', 'DSG-Glendale, CO #1642 "Cherry Creek"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Connecticut'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'SUPER BOWL LX (8) SUNDAY OFF (working on Fri & Sat)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-02-07', '2026-02-08', 'PRNI', 'confirmed', 'PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-02-07', '2026-02-08', 'DSG', 'confirmed', 'DSG-Sugar Land, TX #1273');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'OTHR-The Rinx-Hauppauge, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'SUPER BOWL LX (8) SUNDAY OFF (working on Fri & Sat)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'OTHR-Ski Haus-Salem, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-02-07', '2026-02-08', 'HOS', 'confirmed', 'HOS-Freehold, NJ #1574');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-02-07', '2026-02-08', 'DSG', 'confirmed', 'DSG-Fairless Hills, PA #81 "Oxford Valley"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-02-07', '2026-02-08', 'PRNI', 'confirmed', 'PRNI-Pittsburgh, PA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'BRTN-Santa Monica, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-02-07', '2026-02-08', 'OTHR', 'confirmed', 'MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Annapolis, MD #1506');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Schererville, IN #1363');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Glendale, CO #1642 "Cherry Creek"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-02-14', '2026-02-15', 'PRNI', 'confirmed', 'PRNI-Rossford, OH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Sugar Land, TX #1273');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-White Plains, NY #690');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-02-14', '2026-02-15', 'OTHR', 'confirmed', 'OTHR-CSG Hockey-Concord, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-02-14', '2026-02-15', 'OTHR', 'confirmed', 'OTHR-D&Q-Cherry Hill, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Fairless Hills, PA #81 "Oxford Valley"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-02-14', '2026-02-15', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-02-14', '2026-02-15', 'DSG', 'confirmed', 'DSG-Tustin, CA #927');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-02-14', '2026-02-15', 'OTHR', 'confirmed', 'MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-02-14', '2026-02-15', 'OTHR', 'confirmed', 'MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Annapolis, MD #1506');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Niles, IL #437');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Glendale, CO #1642 "Cherry Creek"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-02-21', '2026-02-22', 'PRNI', 'confirmed', 'PRNI-Rossford, OH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-The Woodlands, TX #1275');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-White Plains, NY #690');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-02-21', '2026-02-22', 'OTHR', 'confirmed', 'OTHR-Sports Etc-Arlington, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Wayne, NJ #319');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Easton, PA #230');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-02-21', '2026-02-22', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-02-21', '2026-02-22', 'DSG', 'confirmed', 'DSG-Tustin, CA #927');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-02-21', '2026-02-22', 'OTHR', 'confirmed', 'TTS-Whitby, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-02-21', '2026-02-22', 'OTHR', 'confirmed', 'TTS-Mississauga, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Annapolis, MD #1506');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Niles, IL #437');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Broomfield, CO #423');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Grandville, MI #420');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-The Woodlands, TX #1275');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Commack, NY #1060');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-02-28', '2026-03-01', 'OTHR', 'confirmed', 'NEPGA | Zimmermanns-Nashua, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Wayne, NJ #319');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Easton, PA #230');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-02-28', '2026-03-01', 'DSG', 'confirmed', 'DSG-Washington, PA #1605');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-02-28', '2026-03-01', 'OTHR', 'confirmed', 'OTHR-Baker Street Snow-Huntington Beach, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-02-28', '2026-03-01', 'OTHR', 'confirmed', 'TTS-Whitby, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-02-28', '2026-03-01', 'OTHR', 'confirmed', 'TTS-Mississauga, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Fairfax, VA #5202 (Combo)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Broomfield, CO #423');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Grandville, MI #420');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-The Woodlands, TX #1275');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Commack, NY #1060');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Warwick, RI #1307');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Wayne, NJ #319');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Easton, PA #230');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Washington, PA #1605');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Eastvale, CA #1381');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-03-07', '2026-03-08', 'DSG', 'confirmed', 'DSG-Buffalo, NY #422');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-03-07', '2026-03-08', 'HOS', 'confirmed', 'HOS-Victor, NY #1500');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Fairfax, VA #5202 (Combo)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Lombard, IL #415');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Lone Tree, CO #436 "Park Meadows/Littleton"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Brighton, MI #294');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-03-14', '2026-03-15', 'HOS', 'confirmed', 'HOS-Friendswood, TX #1587 "Baybrook"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Milford, CT #282');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-03-14', '2026-03-15', 'HOS', 'confirmed', 'HOS-Freehold, NJ #1574');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-03-14', '2026-03-15', 'HOS', 'confirmed', 'HOS-Wilmington, DE # 1593 "''Brandywine"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Cranberry Twp, PA #1012');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-03-14', '2026-03-15', 'DSG', 'confirmed', 'DSG-Eastvale, CA #1381');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-03-14', '2026-03-15', 'OTHR', 'confirmed', 'SLG/TTS-Market Mall-Calgary, AB, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-03-14', '2026-03-15', 'OTHR', 'confirmed', 'SEC-Leamington, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Fairfax, VA #5202 (Combo)');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Lombard, IL #415');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Lone Tree, CO #436 "Park Meadows/Littleton"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Brighton, MI #294');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-03-21', '2026-03-22', 'HOS', 'confirmed', 'HOS-Friendswood, TX #1587 "Baybrook"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'Lifestyles Sports | DSG-Milford, CT #282');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Hanover, MA #1027');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-03-21', '2026-03-22', 'HOS', 'confirmed', 'HOS-Freehold, NJ #1574');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-03-21', '2026-03-22', 'HOS', 'confirmed', 'HOS-Wilmington, DE # 1593 "''Brandywine"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Cranberry Twp, PA #1012');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-03-21', '2026-03-22', 'DSG', 'confirmed', 'DSG-Eastvale, CA #1381');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-03-21', '2026-03-22', 'OTHR', 'confirmed', 'TTS-Heritage Gate-Calgary, AB, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-03-21', '2026-03-22', 'HOS', 'confirmed', 'HOS-Victor, NY #1500');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Frederick, MD #614');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Lombard, IL #415');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Lone Tree, CO #436 "Park Meadows/Littleton"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Brighton, MI #294');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-03-28', '2026-03-29', 'HOS', 'confirmed', 'HOS-Friendswood, TX #1587 "Baybrook"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-West Nyack, NY #1083');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Hanover, MA #1027');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-03-28', '2026-03-29', 'HOS', 'confirmed', 'HOS-Freehold, NJ #1574');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-03-28', '2026-03-29', 'HOS', 'confirmed', 'HOS-Wilmington, DE # 1593 "''Brandywine"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Cranberry Twp, PA #1012');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-El Segundo, CA #924');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-03-28', '2026-03-29', 'DSG', 'confirmed', 'DSG-Buffalo, NY #422');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-03-28', '2026-03-29', 'HOS', 'confirmed', 'HOS-Victor, NY #1500');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-Frederick, MD #614');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-Orland Park, IL #454');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-Littleton, CO #298 "SW Plaza"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-04-11', '2026-04-12', 'PRNI', 'confirmed', 'PRNI-Bloomfield Hills, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-04-11', '2026-04-12', 'HOS', 'confirmed', 'HOS-Katy, TX #1586');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-West Nyack, NY #1083');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-East Hanover, NJ #157');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-Princeton, NJ #105');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-04-11', '2026-04-12', 'HOS', 'confirmed', 'HOS-Strongsville, OH #1569');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-04-11', '2026-04-12', 'DSG', 'confirmed', 'DSG-El Segundo, CA #924');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-04-11', '2026-04-12', 'OTHR', 'confirmed', 'TTS-Whitby, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-04-11', '2026-04-12', 'OTHR', 'confirmed', 'TTS-Mississauga, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Bel Air, MD #1534');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Orland Park, IL #454');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Littleton, CO #298 "SW Plaza"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Portage, MI #1006');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-04-18', '2026-04-19', 'HOS', 'confirmed', 'HOS-Katy, TX #1586');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'Lifestyles Sports | *DSG-West Nyack, NY #1083');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Nashua, NH #616');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-East Hanover, NJ #157');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-Princeton, NJ #105');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-04-18', '2026-04-19', 'HOS', 'confirmed', 'HOS-Strongsville, OH #1569');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-04-18', '2026-04-19', 'DSG', 'confirmed', 'DSG-El Segundo, CA #924');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-04-18', '2026-04-19', 'OTHR', 'confirmed', 'TTS-Mississauga, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Bel Air, MD #1534');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Orland Park, IL #454');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Colorado Springs, CO #431');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Portage, MI #1006');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-04-25', '2026-04-26', 'HOS', 'confirmed', 'HOS-Katy, TX #1586');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Garden City, NY #464');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Nashua, NH #616');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-East Hanover, NJ #157');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Princeton, NJ #105');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-04-25', '2026-04-26', 'PRNI', 'confirmed', 'PRNI-North Olmsted, OH "Cleveland"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-04-25', '2026-04-26', 'DSG', 'confirmed', 'DSG-Encinitas, CA #1412');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-04-25', '2026-04-26', 'OTHR', 'confirmed', 'TTS-Whitby, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-04-25', '2026-04-26', 'OTHR', 'confirmed', 'MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Falls Church, VA #1596 "Bailey''s Crossroad"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Geneva, IL #442');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Colorado Springs, CO #432');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Portage, MI #1006');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Houston, TX #1325 "Houston Galleria"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Garden City, NY #464');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-05-02', '2026-05-03', 'OTHR', 'confirmed', 'KSS (4/30-5/1) | Alpine Shop-S. Burlington, VT');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Rockaway, NJ #196');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Deptford, NJ #1379');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-05-02', '2026-05-03', 'PRNI', 'confirmed', 'PRNI-North Olmsted, OH "Cleveland"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-05-02', '2026-05-03', 'DSG', 'confirmed', 'DSG-Encinitas, CA #1412');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-02', '2026-05-03', 'OTHR', 'confirmed', 'SEC-Duguay Sports Excellence-Gatineua, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-05-02', '2026-05-03', 'OTHR', 'confirmed', 'London''s SFS-London, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Falls Church, VA #1596 "Bailey''s Crossroad"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Geneva, IL #442');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Lakewood, CO #466');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-05-09', '2026-05-10', 'PRNI', 'confirmed', 'PRNI-Sterling Heights, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Houston, TX #1325 "Houston Galleria"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Norwalk, CT #1199');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Danvers, MA #435');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Rockaway, NJ #196');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-05-09', '2026-05-10', 'DSG', 'confirmed', 'DSG-Pittsburgh, PA #638 "South Hills"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-05-16', '2026-05-17', 'OTHR', 'confirmed', 'Alpine Ski Shop-Fairfax/Sterling, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Geneva, IL #442');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Lakewood, CO #466');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-05-16', '2026-05-17', 'PRNI', 'confirmed', 'PRNI-Sterling Heights, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-05-16', '2026-05-17', 'MNKY', 'confirmed', 'MNKY-Austin, TX @ The Crossover');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Norwalk, CT #1199');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Danvers, MA #435');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Rockaway, NJ #196');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Deptford, NJ #1379');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Pittsburgh, PA #638 "South Hills"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-05-16', '2026-05-17', 'DSG', 'confirmed', 'DSG-Mission Viejo, CA #1502');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-05-30', '2026-05-31', 'MNKY', 'confirmed', 'MNKY-Austin, TX @ The Crossover');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-05-30', '2026-05-31', 'OTHR', 'confirmed', 'OTHR-Lifestyles Sports-Wantagh, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-05-30', '2026-05-31', 'OTHR', 'confirmed', 'OTHR-Sports Etc-Arlington, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-05-30', '2026-05-31', 'OTHR', 'confirmed', 'GGXY-East Hanover, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-05-30', '2026-05-31', 'DSG', 'confirmed', 'DSG-Newark, DE #34 "Christiana"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-05-30', '2026-05-31', 'DSG', 'confirmed', 'DSG-Pittsburgh, PA #638 "South Hills"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-05-30', '2026-05-31', 'DSG', 'confirmed', 'DSG-Mission Viejo, CA #1502');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-05-30', '2026-05-31', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-06-06', '2026-06-07', 'PRNI', 'confirmed', 'PRNI-Farmington Hills Ice Arena / PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-06-06', '2026-06-07', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-06-06', '2026-06-07', 'OTHR', 'confirmed', 'SFS-Corbetts-Oakville, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-06-13', '2026-06-14', 'OTHR', 'confirmed', 'REQUEST OFF');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-06-13', '2026-06-14', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-06-13', '2026-06-14', 'OTHR', 'confirmed', 'SFS-Duke''s Source for Sports-Etobicoke, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-06-13', '2026-06-14', 'OTHR', 'confirmed', 'SEC-Duguay Sports Excellence-Gatineua, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-06-20', '2026-06-21', 'PRNI', 'confirmed', 'PRNI-Grand Rapids, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-Lodi, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-06-20', '2026-06-21', 'MNKY', 'confirmed', '(2) MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-06-20', '2026-06-21', 'OTHR', 'confirmed', 'SFS-Duke''s Source for Sports-Etobicoke, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-06-27', '2026-06-28', 'PRNI', 'confirmed', 'PRNI-Grand Rapids, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', 'MNKY-Lodi, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-06-27', '2026-06-28', 'DSG', 'confirmed', 'DSG-Boardman, OH #686');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-06-27', '2026-06-28', 'MNKY', 'confirmed', '(2) MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-06-27', '2026-06-28', 'OTHR', 'confirmed', 'SFS-Duke''s Source for Sports-Etobicoke, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-07-11', '2026-07-12', 'MNKY', 'confirmed', 'MNKY-Austin, TX @ The Crossover');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-07-18', '2026-07-19', 'OTHR', 'confirmed', 'OTHR-Gunzo''s-Morton Grove, IL');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-07-18', '2026-07-19', 'PRNI', 'confirmed', 'PRNI-Sterling Heights, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Lodi, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-07-18', '2026-07-19', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-07-18', '2026-07-19', 'OTHR', 'confirmed', '(2) SEC-London, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-07-18', '2026-07-19', 'OTHR', 'confirmed', '(2) SEC-London, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-07-25', '2026-07-26', 'OTHR', 'confirmed', 'OTHR-Gunzo''s-Morton Grove, IL');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-07-25', '2026-07-26', 'PRNI', 'confirmed', 'PRNI-Sterling Heights, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-07-25', '2026-07-26', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-07-25', '2026-07-26', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-08-01', '2026-08-02', 'PRNI', 'confirmed', 'PRNI-Indianapolis, IN');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-08-01', '2026-08-02', 'OTHR', 'confirmed', 'OTHR-South Suburban Sports Complex-Highlands Ranch, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-08-01', '2026-08-02', 'PRNI', 'confirmed', 'PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-08-01', '2026-08-02', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Chicago'), '2026-08-08', '2026-08-09', 'PRNI', 'confirmed', 'PRNI-Indianapolis, IN');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-08-08', '2026-08-09', 'OTHR', 'confirmed', 'OTHR-South Suburban Family Sports Center-Centennial, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-08-08', '2026-08-09', 'PRNI', 'confirmed', 'PRNI-Livonia, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-08-08', '2026-08-09', 'OTHR', 'confirmed', 'Alpine Shop | KSS-S. Burlington, VT');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-08-08', '2026-08-09', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-08-08', '2026-08-09', 'OTHR', 'confirmed', '(2) MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-08-08', '2026-08-09', 'OTHR', 'confirmed', '(2) MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-08-15', '2026-08-16', 'OTHR', 'confirmed', 'SEC-THR (AUG 12-13) | (2) MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-08-15', '2026-08-16', 'OTHR', 'confirmed', '(2) MAJ-Majer Hockey-North York, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-08-22', '2026-08-23', 'OTHR', 'confirmed', 'SEC-Duguay Sports Excellence-Gatineua, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-08-29', '2026-08-30', 'OTHR', 'confirmed', '(2) OTHR-CSG Hockey-Concord, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-08-29', '2026-08-30', 'OTHR', 'confirmed', 'REQUEST OFF');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-08-29', '2026-08-30', 'OTHR', 'confirmed', 'SEC-London, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-09-12', '2026-09-13', 'PRNI', 'confirmed', 'PRNI-Flint, MI #01');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-09-12', '2026-09-13', 'OTHR', 'confirmed', 'REQUEST OFF');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-09-12', '2026-09-13', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-09-12', '2026-09-13', 'OTHR', 'confirmed', '(2) HSM-Etobicoke, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-09-12', '2026-09-13', 'OTHR', 'confirmed', '(2) HSM-Etobicoke, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-09-19', '2026-09-20', 'PRNI', 'confirmed', 'PRNI-North Olmsted, OH "Cleveland"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-09-19', '2026-09-20', 'OTHR', 'confirmed', 'OTHR-Alpine Shop-South Burlington, VT');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'D&Q | MNKY-Lodi, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-09-19', '2026-09-20', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-09-19', '2026-09-20', 'OTHR', 'confirmed', 'HSM-Belleville, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-N. Andover, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-09-26', '2026-09-27', 'OTHR', 'confirmed', 'OTHR-Zimmermanns-Nashua, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-09-26', '2026-09-27', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-10-03', '2026-10-04', 'OTHR', 'confirmed', 'OTHR-Pro-Fit Ski-Leesburg, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-10-03', '2026-10-04', 'PRNI', 'confirmed', 'PRNI-Bloomfield Hills, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-10-10', '2026-10-11', 'OTHR', 'confirmed', 'OTHR-Miles of Golf-Ypsilanti, MI "Ann Arbor"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-10-10', '2026-10-11', 'OTHR', 'confirmed', 'OTHR-Suburban Sports Ski and Bike-Berlin, CT');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-10-24', '2026-10-25', 'OTHR', 'confirmed', 'Alpine Ski Shop-Fairfax/Sterling, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-10-24', '2026-10-25', 'PRNI', 'confirmed', 'PRNI-Grand Rapids, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-10-24', '2026-10-25', 'OTHR', 'confirmed', 'London''s SFS-London, ON, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-10-31', '2026-11-01', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-11-07', '2026-11-08', 'OTHR', 'confirmed', 'REQUEST OFF');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-11-07', '2026-11-08', 'PRNI', 'confirmed', 'PRNI-Westerville, OH "Columbus"');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-11-07', '2026-11-08', 'OTHR', 'confirmed', 'OTHR-Baker Street Snow-Huntington Beach, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-11-14', '2026-11-15', 'OTHR', 'confirmed', 'Ski/HockeyEvents');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Colorado'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Greenwood Village, CO');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-11-14', '2026-11-15', 'PRNI', 'confirmed', 'PRNI-Rossford, OH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Houston'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', '(2) MNKY-Allen, TX');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Farmingdale, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #1'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY- Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Norwood, MA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Lodi, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Philadelphia'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', '(2) MNKY-Woodbridge Twp, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Derry, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'SoCal'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Irvine, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #1'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Toronto #2'), '2026-11-14', '2026-11-15', 'MNKY', 'confirmed', 'MNKY-Dollard-des-Ormeaux, QC, CA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NE Boston #2'), '2026-11-21', '2026-11-22', 'OTHR', 'confirmed', 'OTHR-CSG Hockey-Concord, NH');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-11-21', '2026-11-22', 'OTHR', 'confirmed', 'OTHR-D&Q-Cherry Hill, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Baltimore/DMV'), '2026-12-05', '2026-12-06', 'OTHR', 'confirmed', 'OTHR-The St. James-Springfield, VA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-12-05', '2026-12-06', 'PRNI', 'confirmed', 'PRNI-Portage, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-12-05', '2026-12-06', 'PRNI', 'confirmed', 'PRNI-Pittsburgh, PA');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Detroit/Toledo'), '2026-12-12', '2026-12-13', 'PRNI', 'confirmed', 'PRNI-Portage, MI');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Long Island'), '2026-12-12', '2026-12-13', 'OTHR', 'confirmed', 'OTHR-The Rinx-Hauppauge, NY');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'NJ/NY'), '2026-12-12', '2026-12-13', 'OTHR', 'confirmed', 'OTHR-D&Q-Cherry Hill, NJ');
INSERT INTO events (region_id, start_date, end_date, event_type, status, notes) VALUES
  ((SELECT id FROM regions WHERE name = 'Pittsburgh'), '2026-12-12', '2026-12-13', 'PRNI', 'confirmed', 'PRNI-Pittsburgh, PA');

-- Total booked events: 376
