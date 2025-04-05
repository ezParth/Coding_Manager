import { RequestHandler } from "express";
import { handleMultipartFormData } from "../config/BusboyMPFD"; // Make sure function name is correct
import Project from "../models/Project.model";
import User from "../models/User";
import uploadToS3 from "../aws/uploadToS3";
import Resume from "../models/Resume.model";

export const saveProject = async (req: any, res: any) => {
  console.log("HELOO WORLDrsrs");
  const fileUrls: string[] = [];
  try {
    const { fields, fileData } = await handleMultipartFormData(req);
    const userId = req.user.id;
    const fileEntries = Object.entries(fileData);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message:
          "The user who requested to submit the project doesn't exist, please login or create an account",
        success: false,
      });
    }

    var i = 0;
    for (const [filename, file] of fileEntries) {
      const s3Url = await uploadToS3(
        file.data,
        filename,
        file.mimeType,
        user.username,
        fields.title
      );
      if (s3Url.success && s3Url.url) {
        fileUrls.push(s3Url.url);
      } else {
        throw new Error(
          "ERROR IN SAVING IMAGE TO S3 => * ask Jeff Bezos to fix it!"
        );
      }
    }

    console.log("Fields:", fields);
    // console.log("Files:", files);

    const newProject = await Project.create({
      projectTitle: fields.title,
      projectDescription: fields.description,
      projectGithub: fields?.githubLink,
      projectLink: fields?.websiteLink,
      projectTwitter: fields?.twitterLink,
      projectLinkedIn: fields?.linkedInLink,
      projectSlack: fields?.slackLink,
      projectImages: [fileUrls?.[0], fileUrls?.[1]],
    });

    console.log("NEW PROJECT: ", newProject);

    try {
      await User.findByIdAndUpdate(userId, {
        $push: { Projects: newProject._id },
        $inc: { NumberOfProjects: 1 },
      });
    } catch (error: any) {
      console.log("ERROR DURING SAVING THE PROJECT INTO USER: ", error);
    }

    res.status(200).json({
      success: true,
      message: "Project data saved successfully",
      fields,
      fileUrls,
    });
    console.log("JADNCJAD: ", newProject);
  } catch (error) {
    console.log("ERROR IN SAVEPROJECT", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR: unable to save project data",
    });
  }
};

export const getProjects = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(404).json({
        message: "Please login or create an account to get your cool projects",
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
      return res.status(404).json({
        message:
          "Please add some projects as not projects were found in the database!",
        success: false,
      });
    }
    // console.log("NEW PROJECT: ", user.Projects);
    // console.log("KDNjskdnfvjsfvb dijfnv djfvnjsdfnvskjdnv skldnsjkdnskdn skd slkdnskj sj djf djn j")
    res.status(200).json({
      message: "Projects fetched successfully",
      success: true,
      projects: user.Projects,
      numberOfProjects: numOfProjects,
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const saveResume = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const data = req.body.resumeData;

    if (!userId || !data) {
      return res
        .status(400)
        .json({ message: "User ID and resume data are required" });
    }

    const newResume = await Resume.create({ userId, ...data });

    await User.findByIdAndUpdate(userId, { Resume: newResume._id });

    return res
      .status(201)
      .json({ message: "Resume saved successfully", resume: newResume });
  } catch (err) {
    console.error("Save Resume Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getResume = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res
        .status(404)
        .json({ message: "User Not Found! Please login", success: false });
    }

    const user = await User.findById(userId).populate("Resume");
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found, pelase login", success: false });
    }

    const resume = user.Resume;

    if (!resume) {
      return res
        .status(404)
        .json({ message: "Resume not found!", success: false });
    }

    res
      .status(200)
      .json({
        message: "Resume fetched successfully!",
        success: true,
        Reusme: resume,
      });
  } catch (error) {
    console.log("ERROR IN GETRESUME FUNCTION: ", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
