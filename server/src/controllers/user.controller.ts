import { RequestHandler } from "express";
import { handleMultipartFormData } from "../config/BusboyMPFD"; // Make sure function name is correct
import Project from "../models/Project.model";
import User from "../models/User";

export const saveProject = async (req: any, res: any) => {
    try {
        const { fields, files } = await handleMultipartFormData(req);
        const userId = req.user

        console.log("Fields:", fields);
        console.log("Files:", files);

        const newProject = Project.create({
            projectTitle: fields.title,
            projectDescription: fields.description,
            projectLink: fields?.websiteLink,
            projectTwitter: fields?.twitterLink,
            projectLinkedIn: fields?.linkedInLink,
            projectSlack: fields?.slackLink,
            projectImages: [files?.[0], files?.[1]], 
        })

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: "The user who requested to submit the project doesn't exist, please login or create an account", success: false})
        }

        try {
            await User.findByIdAndUpdate({_id: userId}, { $push : { Projects: newProject } })
        } catch (error: any) {
            throw new error
        }

        res.status(200).json({ success: true, message: "Project data saved successfully", fields, files });
    } catch (error) {
        console.log("ERROR IN SAVEPROJECT", error);
        res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR: unable to save project data" });
    }
};
