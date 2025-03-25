import mongoose, { Document } from "mongoose";

export interface Project  extends Document {
    projectName: string;
    projectTitle: string;
    projectDescription: string;
    projectLinkedIn: string;
    projectTwitter: string;
    projectLink: string;
    projectSlack: string;
    projectImages: string;
}
