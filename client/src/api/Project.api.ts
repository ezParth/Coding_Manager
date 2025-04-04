import axios from "axios";
import { PROJECT_API } from "./Backend_API";

interface ResponseInterface {
  success?: boolean;
  message?: string;
}

const Project_API = async (
  image: File | null,
  image2: File | null,
  slackLink: string,
  linkedInLink: string,
  twitterLink: string,
  title: string,
  description: string,
  websiteLink: string,
  githubLink: string
): Promise<ResponseInterface> => {
  try {
    const formData = new FormData();

    // Append images if available
    if (image) formData.append("image", image);
    if (image2) formData.append("image2", image2);

    // Append other fields
    formData.append("slackLink", slackLink);
    formData.append("linkedInLink", linkedInLink);
    formData.append("twitterLink", twitterLink);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("websiteLink", websiteLink);
    formData.append("githubLink", githubLink);

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    console.log("GithubLink: ", githubLink)

    const res = await axios.post(PROJECT_API, formData, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true, // Ensures cookies are sent if needed
    });

    return res.data;
  } catch (error) {
    console.error("Error in Project_API", error);
    return { success: false, message: "Error in API call" };
  }
};

export default Project_API;
