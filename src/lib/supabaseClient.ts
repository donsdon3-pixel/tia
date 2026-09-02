import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isSupabaseConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes("your-supabase-project") &&
  !supabaseAnonKey.includes("your-supabase-anon-key");

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experienceLevel: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  coverNote?: string;
}

export interface BusinessInquiryData {
  clientName: string;
  companyName?: string;
  phone: string;
  email?: string;
  solutionCategory: "with_ai" | "without_ai";
  serviceType: string;
  projectScope: string;
  estimatedTimeline?: string;
}

/**
 * Upload resume file to Supabase storage bucket "resumes"
 */
export async function uploadResumeFile(file: File): Promise<{ url: string | null; error: string | null }> {
  if (!supabase) {
    console.warn("Supabase not configured, using direct WhatsApp flow with local file name.");
    return { url: null, error: null };
  }

  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `resumes/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return { url: null, error: uploadError.message };
    }

    const { data } = supabase.storage.from("resumes").getPublicUrl(filePath);
    return { url: data.publicUrl, error: null };
  } catch (err: any) {
    console.error("Exception uploading resume:", err);
    return { url: null, error: err.message || "Failed to upload resume." };
  }
}

/**
 * Submit job application to Supabase database table "job_applications"
 */
export async function submitJobApplication(
  data: JobApplicationData,
  resumeUrl?: string | null
): Promise<{ success: boolean; error: string | null }> {
  if (!supabase) {
    console.log("Supabase not configured: record will be sent via WhatsApp to P.A. Laila.");
    return { success: true, error: null };
  }

  try {
    const { error } = await supabase.from("job_applications").insert([
      {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        experience_level: data.experienceLevel,
        portfolio_url: data.portfolioUrl || null,
        resume_file_url: resumeUrl || null,
        resume_file_name: data.resumeFileName || null,
        cover_note: data.coverNote || null,
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Database insert error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: any) {
    console.error("Exception submitting application:", err);
    return { success: false, error: err.message || "Submission failed." };
  }
}

/**
 * Submit business inquiry to Supabase database table "business_inquiries"
 */
export async function submitBusinessInquiry(
  data: BusinessInquiryData
): Promise<{ success: boolean; error: string | null }> {
  if (!supabase) {
    return { success: true, error: null };
  }

  try {
    const { error } = await supabase.from("business_inquiries").insert([
      {
        client_name: data.clientName,
        company_name: data.companyName || null,
        phone: data.phone,
        email: data.email || null,
        solution_category: data.solutionCategory,
        service_type: data.serviceType,
        project_scope: data.projectScope,
        estimated_timeline: data.estimatedTimeline || null,
        status: "new",
      },
    ]);

    if (error) return { success: false, error: error.message };
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to record inquiry." };
  }
}
