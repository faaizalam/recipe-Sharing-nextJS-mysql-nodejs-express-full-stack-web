import Axios from "axios";

export const Baseurl=Axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true,
})

