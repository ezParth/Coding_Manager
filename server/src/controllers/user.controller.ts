import { RequestHandler } from "express";
import { handleMultipartFormData } from "../config/BusboyMPFD"; // Make sure function name is correct
import Project from "../models/Project.model";
import User from "../models/User";
import uploadToS3 from "../aws/uploadToS3";

export const saveProject = async (req: any, res: any) => {
  const fileUrls: string [] = [];
  try {
    const { fields, fileData } = await handleMultipartFormData(req);
    const userId = req.user.id;
    const fileEntries = Object.entries(fileData);

    var i = 0;
    fileEntries.forEach(async ([filename, file]) => {
      const s3Url = await uploadToS3(file.data, filename, file.mimeType);
      if(s3Url.success && s3Url.url != undefined){
        fileUrls.push(s3Url?.url);
      }else{
        throw new Error("ERROR IN SAVING IMAGE TO S3 => * ask jeff bezos to fix it!")
      }
  })

    // console.log("Fields:", fields);
    // console.log("Files:", files);



    const newProject = await Project.create({
      projectTitle: fields.title,
      projectDescription: fields.description,
      projectLink: fields?.websiteLink,
      projectTwitter: fields?.twitterLink,
      projectLinkedIn: fields?.linkedInLink,
      projectSlack: fields?.slackLink,
      projectImages: [fileUrls?.[0], fileUrls?.[1]],
    });

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({
          message:
            "The user who requested to submit the project doesn't exist, please login or create an account",
          success: false,
        });
    }

    const numOfProjects = user.NumberOfProjects;

    try {
      await User.findByIdAndUpdate(userId, {
        $push: { Projects: newProject._id },
        $inc: { NumberOfProjects: 1 },
      });
    } catch (error: any) {
      console.log("ERROR DURING SAVING THE PROJECT INTO USER: ", error);
      
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Project data saved successfully",
        fields,
        fileUrls,
      });
  } catch (error) {
    console.log("ERROR IN SAVEPROJECT", error);
    res
      .status(500)
      .json({
        success: false,
        message: "INTERNAL SERVER ERROR: unable to save project data",
      });
  }
};

export const getProjects = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res
        .status(404)
        .json({
          message:
            "Please login or create an account to get your cool projects",
          success: false,
        });
    }

    const user = await User.findById(userId).populate("Projects");

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found!", success: false });
    }

    const numOfProjects = user.NumberOfProjects;
    if (numOfProjects == 0) {
      return res
        .status(404)
        .json({
          message:
            "Please add some projects as not projects were found in the database!",
          success: false,
        });
    }

    res.status(200).json({
      message: "Projects fetched successfully",
      success: true,
      projects: user.Projects,
      numberOfProjects: numOfProjects
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
