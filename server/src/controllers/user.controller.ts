import { RequestHandler } from "express";
import { handleMultipartFormData } from "../config/BusboyMPFD"; // Make sure function name is correct

export const saveProject: RequestHandler = async (req, res, next) => {
    try {
        const { fields, files } = await handleMultipartFormData(req); // ✅ Await the Promise

        console.log("Fields:", fields);
        console.log("Files:", files);

        res.status(200).json({ success: true, message: "Project data saved successfully", fields, files });
    } catch (error) {
        console.log("ERROR IN SAVEPROJECT", error);
        res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR: unable to save project data" });
        next(error);
    }
};
