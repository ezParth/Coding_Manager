import axios, { AxiosResponse } from "axios";
import { SIGNUP_API } from "./Backend_API";

interface SignupResponse {
  success: boolean;
  message?: string;
}

const signupAPI = async (
  username: string,
  email: string,
  password: string
): Promise<SignupResponse | Error> => {
  try {
    const res: AxiosResponse<SignupResponse> = await axios.post(SIGNUP_API, {
      username: username,
      password: password,
      headers: {
        "Content-Type": "applicatio/json",
        credentials: "true",
      },
    });
    if (res.data.success) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
    }
    return res.data;
  } catch (error: any) {
    console.log("Error in signup.ts", error);
    return error;
  }
};

export default signupAPI;
