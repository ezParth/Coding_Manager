import axios from "axios";
import { PROJECT_API } from "./Backend_API";

interface ResponseInterface {
  success?: boolean;
  message?: true;
}

const Project_API = async (
  image: string,
  image2: string,
  slackLink: string,
  linkedInLink: string,
  twitterLink: string,
  title: string,
  description: string,
  websiteLink: string,
  githubLink: string
): Promise<ResponseInterface> => {
  try {
    const res = await axios.post(
      PROJECT_API,
      {
        image,
        image2,
        slackLink,
        linkedInLink,
        twitterLink,
        title,
        description,
        websiteLink,
        githubLink,
      },
      {
        headers: {
          "Content-Type": "application/json",
          credentials: "true",
        },
      }
    );
    
    return res.data;
  } catch (error: any) {
    console.log("Error in Project_API", error);
    return error;
  }
};

export default Project_API;
