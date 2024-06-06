import axios from "axios";
import { setJWT } from "../Reducers/slices/AuthSlice";

interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

interface lUser {
    email: string;
    password: string;
}

// this is signup function where the client and server communicate using the axios library;
export const signupUser = async (userData: User, navigate: any) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:4000/signup",
            userData
        );

        console.log("Signup successful:", response.data);
        navigate("/login");
    } catch (error) {
        console.error("Signup failed:", error);
    }
};

// this is login function where the client and server communicate using the axios library;
export const loginUser = async (
    userData: lUser,
    navigate: any,
    dispatch: any
) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:4000/login",
            userData
        );

        const token = response?.data?.token;

        if (token) {
            dispatch(setJWT(token));
            navigate("/");
        } else {
            console.error("Login failed: Token not found in response");
            // Handle the case where the token is not present in the response
        }
    } catch (error) {
        console.error("Login failed:", error);
        // Handle other error conditions (e.g., network error, server error)
    }
};
