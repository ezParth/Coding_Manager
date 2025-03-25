import axios from "axios";
import { LOGIN_API } from "./Backend_API";

interface LoginResponse {
  success?: boolean;
  message?: string;
  token?: string;
}

const loginAPI = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await axios.post(
      LOGIN_API,
      { username, password }, // Body
      {
        headers: {
          "Content-Type": "application/json",
          credentials: "true",
        },
      }
    );
    if (res.data.success) {
      localStorage.setItem("username", username);
      try {
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        console.log(
          "An error occured in setting up token in the login api: ",
          error
        );
      }
    }
    return res.data;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `An unexted error occured in login.ts: ${error}` };
  }
};

export default loginAPI;
