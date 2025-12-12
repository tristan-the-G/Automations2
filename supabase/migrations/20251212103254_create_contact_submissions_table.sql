/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone_number` (text, nullable)
      - `company_organization` (text, nullable)
      - `message` (text, nullable)
      - `webhook_sent` (boolean) - tracks if data was sent to Make.com
      - `webhook_response` (text, nullable) - stores response from Make.com
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert (webhook is public)
    - No read/update/delete for anonymous users (data is internal)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  company_organization text,
  message text,
  webhook_sent boolean DEFAULT false,
  webhook_response text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anyone to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Prevent all other access to contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (false);
