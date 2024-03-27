import axios from "axios";
import { toast } from "react-toastify";

// export const Base_Url = "http://localhost:8800/api";
export const Base_Url = "https://writewavebackend.onrender.com/api";


export const RequestMethod = async (endpoint, method, data, token) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${Base_Url}${endpoint}`,
        data,
        headers
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        toast.error(error.response.data)
        throw error;
    }
};