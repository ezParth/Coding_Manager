// src/api/Resume.api.ts
import axios from "axios";
import { POST_RESUME_API } from "./Backend_API";

export const saveResume = async (resumeData: any) => {
  const token = localStorage.getItem("token"); // make sure token is stored here

  try {
    const response = await axios.post(
      POST_RESUME_API,
      {
        userId: JSON.parse(localStorage.getItem("user") || "{}")._id, // or however you're storing user
        resumeData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Resume Data: ", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error saving resume:", error.response?.data || error.message);
    throw error;
  }
};
