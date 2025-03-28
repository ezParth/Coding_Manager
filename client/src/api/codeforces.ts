import axios, { AxiosResponse } from "axios";
import { CODEFORCES_API } from "./Backend_API";

const codeforces_API = async (
  username: string
): Promise<any> => {
  try {
    const res: AxiosResponse<any> = await axios.get(CODEFORCES_API, {
      params: {handle: username},
      headers: {
        "Content-Type": "application/json",
        credentials: "true",
      },
    });
    console.log("Response->",res.data)
    return res.data;
  } catch (error: any) {
    console.log("Error in codeforces_API", error);
    return error;
  }
};

export default codeforces_API;
