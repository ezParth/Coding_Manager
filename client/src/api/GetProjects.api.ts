import { GET_PROJECT_API } from "./Backend_API";
import axios from "axios";

const getProjects = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("Please login");
        alert("Please login!");
        return null;
    }

    try {
        const res = await axios.get(GET_PROJECT_API, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Projects:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        alert("Failed to fetch projects");
        return null
    }
};

export default getProjects;
