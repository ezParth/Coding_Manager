import { GET_RESUME_API } from "./Backend_API";
import axios from "axios";

export const getResume = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No auth token found");
    }

    const response = await axios.get(GET_RESUME_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("RESUME DATA: ", response.data)
    return response.data;
  } catch (E) {
    console.log("ERROR DURING RESUME GET REQUEST: ", E);
    return Error;
  }
};
