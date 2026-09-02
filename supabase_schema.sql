-- =========================================================
-- TIRUPATI INTELLECT AUTHORITY (TIA) - SUPABASE DATABASE SCHEMA
-- Founder: M Bhargav Rayudu | Contact: +91 7386157041 (P.A. Laila)
-- =========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Table: Job Applications
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    position TEXT NOT NULL,
    experience_level TEXT NOT NULL,
    portfolio_url TEXT,
    resume_file_url TEXT,
    resume_file_name TEXT,
    cover_note TEXT,
    status TEXT DEFAULT 'pending',
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit job applications
CREATE POLICY "Allow public insert on job_applications" 
ON public.job_applications FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Allow authenticated users / admins to read all applications
CREATE POLICY "Allow authenticated read on job_applications" 
ON public.job_applications FOR SELECT 
TO authenticated 
USING (true);


-- 3. Table: Business Inquiries (With AI / Without AI)
CREATE TABLE IF NOT EXISTS public.business_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    client_name TEXT NOT NULL,
    company_name TEXT,
    phone TEXT NOT NULL,
    email TEXT,
    solution_category TEXT NOT NULL, -- 'with_ai' or 'without_ai'
    service_type TEXT NOT NULL,
    project_scope TEXT NOT NULL,
    estimated_timeline TEXT,
    status TEXT DEFAULT 'new'
);

ALTER TABLE public.business_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on business_inquiries" 
ON public.business_inquiries FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);


-- 4. Table: Course Registrations & Inquiries
CREATE TABLE IF NOT EXISTS public.course_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    student_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course_name TEXT NOT NULL,
    educational_background TEXT,
    mode TEXT DEFAULT 'hybrid',
    status TEXT DEFAULT 'inquiry'
);

ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on course_enrollments" 
ON public.course_enrollments FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);


-- =========================================================
-- 5. Supabase Storage: Bucket for Resumes & Attachments
-- (Run this in Supabase Storage or Dashboard if creating manually)
-- =========================================================

-- Insert bucket for resumes if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: Allow anyone to upload files to the "resumes" bucket
CREATE POLICY "Public Upload to Resumes" 
ON storage.objects FOR INSERT 
TO anon, authenticated 
WITH CHECK (bucket_id = 'resumes');

-- Storage RLS: Allow public read access to resume links
CREATE POLICY "Public Read Resumes" 
ON storage.objects FOR SELECT 
TO anon, authenticated 
USING (bucket_id = 'resumes');
