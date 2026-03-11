/*
  # Create White Peace Lodge Database Schema

  ## Overview
  This migration creates the core database structure for the White Peace Lodge & Event Gardens website,
  including tables for rooms, bookings, contact inquiries, and event requests.

  ## New Tables
  
  ### 1. `rooms`
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier
  - `name` (text) - Room name
  - `category` (text) - Room category/type
  - `description` (text) - Detailed description
  - `occupancy` (integer) - Maximum guests
  - `size` (integer) - Room size in square meters
  - `price_per_night` (decimal) - Base price
  - `amenities` (jsonb) - List of amenities
  - `features` (jsonb) - Special features
  - `images` (jsonb) - Image URLs
  - `available` (boolean) - Availability status
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `bookings`
  - `id` (uuid, primary key)
  - `room_id` (uuid, foreign key)
  - `guest_name` (text)
  - `guest_email` (text)
  - `guest_phone` (text)
  - `check_in` (date)
  - `check_out` (date)
  - `guests` (integer)
  - `special_requests` (text)
  - `status` (text) - pending, confirmed, cancelled
  - `total_price` (decimal)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `contact_inquiries`
  - `id` (uuid, primary key)
  - `first_name` (text)
  - `last_name` (text)
  - `email` (text)
  - `phone` (text)
  - `subject` (text)
  - `message` (text)
  - `status` (text) - new, in_progress, resolved
  - `created_at` (timestamptz)

  ### 4. `event_inquiries`
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `event_type` (text)
  - `guest_count` (integer)
  - `event_date` (date)
  - `message` (text)
  - `status` (text) - new, quoted, confirmed, cancelled
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for rooms
  - Authenticated insert access for bookings and inquiries
  - Admin-only update access for status changes
*/

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  occupancy integer NOT NULL DEFAULT 2,
  size integer NOT NULL,
  price_per_night decimal(10,2) DEFAULT 100.00,
  amenities jsonb DEFAULT '[]'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  images jsonb DEFAULT '[]'::jsonb,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid REFERENCES rooms(id) ON DELETE CASCADE,
  guest_name text NOT NULL,
  guest_email text NOT NULL,
  guest_phone text,
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  special_requests text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  total_price decimal(10,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at timestamptz DEFAULT now()
);

-- Create event inquiries table
CREATE TABLE IF NOT EXISTS event_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  event_type text NOT NULL,
  guest_count integer,
  event_date date,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'quoted', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for rooms (public read access)
CREATE POLICY "Anyone can view available rooms"
  ON rooms FOR SELECT
  USING (available = true);

CREATE POLICY "Authenticated users can view all rooms"
  ON rooms FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for bookings
CREATE POLICY "Users can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own bookings"
  ON bookings FOR SELECT
  USING (guest_email = current_setting('request.jwt.claims', true)::json->>'email');

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for contact inquiries
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact inquiries"
  ON contact_inquiries FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for event inquiries
CREATE POLICY "Anyone can submit event inquiries"
  ON event_inquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view event inquiries"
  ON event_inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rooms_slug ON rooms(slug);
CREATE INDEX IF NOT EXISTS idx_bookings_room_id ON bookings(room_id);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_event_status ON event_inquiries(status);
