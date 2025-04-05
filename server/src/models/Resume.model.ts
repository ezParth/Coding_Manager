import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IResume extends Document {
  userId: ObjectId;
  fullName?: string;
  email?: string;
  phone?: string;
  dob?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  objective?: string;
  school?: string;
  college?: string;
  degree?: string;
  cgpa?: string;
  passingYear?: string;
  company?: string;
  jobTitle?: string;
  jobStart?: string;
  jobEnd?: string;
  jobDescription?: string;
  skills?: string;
  projects?: string;
  certifications?: string;
  languages?: string;
  achievements?: string;
  interests?: string;
  resumeFileName?: string;
}

const resumeSchema = new Schema<IResume>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: String,
    email: String,
    phone: String,
    dob: String,
    address: String,
    linkedin: String,
    github: String,
    website: String,
    objective: String,
    school: String,
    college: String,
    degree: String,
    cgpa: String,
    passingYear: String,
    company: String,
    jobTitle: String,
    jobStart: String,
    jobEnd: String,
    jobDescription: String,
    skills: String,
    projects: String,
    certifications: String,
    languages: String,
    achievements: String,
    interests: String,
    resumeFileName: String, // optional: for uploaded resume
  },
  { timestamps: true }
);

const Resume = mongoose.model<IResume>("Resume", resumeSchema);
export default Resume;
