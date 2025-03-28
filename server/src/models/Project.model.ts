import mongoose, { Document } from "mongoose";

export interface IProject extends Document {
    // projectName: string;
    projectTitle: string;
    projectDescription: string;
    projectLinkedIn: string;
    projectTwitter: string;
    projectLink: string;
    projectSlack: string;
    projectImages: [string];
}

const projectScheam = new mongoose.Schema<IProject>({
    // projectName: {type: String, required: true},
    projectTitle: {type: String},
    projectDescription: {type: String, required: true},
    projectLinkedIn: {type: String},
    projectTwitter: {type: String},
    projectLink: {type: String},
    projectSlack: {type: String},
    projectImages: [{type: String}],
})

const Project = mongoose.model<IProject>('Project', projectScheam);

export default Project;