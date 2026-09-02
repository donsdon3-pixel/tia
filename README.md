# 🏛️ TIA (Tirupati Intellect Authority) — Official Web Platform

> **Empowering Tirupati with AI & Advanced Engineering Solutions**  
> **Founder & CEO:** M Bhargav Rayudu (Professional AI Certificate, B.Tech Mechatronics Engineering, CAD Diploma)  
> **Official Contact Desk:** +91 7386157041 (WhatsApp Only — Handled by P.A. Laila)  
> **Location:** Tirupati, Andhra Pradesh, India  

---

## 🌟 Core Pillars & Offerings

1. **🎓 Teaching & Intellect Academy**:
   - *Professional AI & Generative Intelligence Masterclass*
   - *Industrial CAD 3D Design & Modeling (Diploma Level)*
   - *Mechatronics, Robotics & IoT Systems Masterclass*
   - *Executive AI & Automation for Business Owners*

2. **⚡ All Types of Business Solutions**:
   - **With AI**: Autonomous AI Agents, Custom LLM/GPT deployments, Predictive Analytics, Real-time Computer Vision & Conversational Voice Bots.
   - **Without AI**: High-precision CAD 3D Mechanical Prototyping, PLC/Mechatronics hardware integration, Enterprise Web/Cloud architectures, Business Process Re-engineering.

3. **💼 Interactive Career & Job Application Portal**:
   - Candidate application form with drag-and-drop resume/portfolio attachment (PDF, DOCX, ZIP).
   - Cloud storage in Supabase + Instant structured dispatch to **P.A. Laila (+91 7386157041)** on WhatsApp.

4. **📱 P.A. Laila Executive Communications Desk**:
   - 1-Click WhatsApp gateways for admissions, enterprise quotes, resume follow-ups, and meeting appointments with Founder M Bhargav Rayudu.

---

## 🚀 Technology Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling & UI**: Tailwind CSS, Framer Motion, Lucide React, Glassmorphism design system
- **Backend & Database**: Supabase (PostgreSQL Database + Storage Bucket)
- **Communications**: WhatsApp Business Direct Routing API
- **Deployment & Hosting**: GitHub + Vercel

---

## 🛠️ Step-by-Step Deployment Guide (GitHub + Supabase + Vercel)

### Step 1: Clone or Open the Repository
```bash
cd "e:/ai course and more/TIA"
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the application locally.

---

### Step 2: Set Up Supabase (Database & Resume Storage)

1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Open the **SQL Editor** in your Supabase dashboard.
3. Copy and run the entire SQL code from `supabase_schema.sql` in this project.
4. Go to **Project Settings > API** and copy:
   - `Project URL`
   - `anon public key`
5. Create/update your `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
NEXT_PUBLIC_WHATSAPP_NUMBER=917386157041
NEXT_PUBLIC_FOUNDER_NAME="M Bhargav Rayudu"
NEXT_PUBLIC_PA_NAME="Laila"
NEXT_PUBLIC_LOCATION="Tirupati, Andhra Pradesh, India"
```

---

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "feat: TIA official platform with AI & Non-AI solutions, teaching academy, and job portal"
git branch -M main
git remote add origin https://github.com/your-username/tia-portal.git
git push -u origin main
```

---

### Step 4: Deploy to Vercel

1. Log in to [vercel.com](https://vercel.com) using the same GitHub email.
2. Click **"Add New Project"** and import the `tia-portal` repository.
3. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` (value: `917386157041`)
4. Click **"Deploy"**.
5. Your world-class TIA website is live worldwide with SSL and CDN!

---

## 🏛️ Founder & Organization Credentials

- **Founder & CEO**: M Bhargav Rayudu
- **Qualifications**:
  - Professional AI Certificate
  - B.Tech Mechatronics Engineering
  - CAD Diploma Course
- **Headquarters**: Tirupati, Andhra Pradesh, India
- **Executive Assistant**: Laila (WhatsApp: +91 7386157041)
