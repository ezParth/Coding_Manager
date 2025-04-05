import { IS_ADMIN } from "./Backend_API";
import axios from "axios";

export const checkIsAdmin = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(IS_ADMIN, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("DATA: ",response.data);
    console.log("IS ALLOWED",response.data.IsAllowed)
    return response.data;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return null;
  }
};
