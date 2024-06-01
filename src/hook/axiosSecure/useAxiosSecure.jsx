import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        function (error) {
            return Promise.reject(error);
        })

    //intercept 401 and 403 status 
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('inside error of interceptors', status)
        // if user status 401 and 403 user logout and move to the login page for re login.........
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    }
    )
    return axiosSecure;
};

export default useAxiosSecure;