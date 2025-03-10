import axios, {AxiosResponse} from "axios";
import { LOGIN_API } from "./Backend_API";

interface LoginResponse{
    success: boolean
    message?: string
}

const loginAPI = async (username: string, password: string): Promise<LoginResponse | Error> => {
    try {
        const res: AxiosResponse<LoginResponse> = await axios.post(LOGIN_API, {
            username: username,
            password: password,
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'true'
            }
        });
        if(res.data.success){
            localStorage.setItem('username', username);
        }
        return res.data;
    } catch (error: any) {
        console.log(error);
        return error;
    }
}

export default loginAPI;
