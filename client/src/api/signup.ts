import axios from "axios";
import { SIGNUP_API } from "./Backend_API";

interface SignupResponse {
  success?: boolean;
  message?: string;
  token?: string;
}

const signupAPI = async (
  username: string,
  email: string,
  password: string
): Promise<SignupResponse> => {
  try {
    const res = await axios.post(
      SIGNUP_API,
      { username, email, password }, // Body
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (res.data.success) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
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
    return { success: false, message: `An unexted error occured in signup.ts: ${error}` };
  }
};

export default signupAPI;
