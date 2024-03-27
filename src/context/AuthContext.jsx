import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RequestMethod } from "../../RequestMethods";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const loginUser = async (inputs) => {
        RequestMethod("/auth/login", "post", inputs).then((res) => {
            if (res) {
                toast.success("Login sucessfully")
                setCurrentUser(res)
                navigate("/")
            }
        })
    };

    const registerUser = async (inputs) => {
        RequestMethod("/auth/register", "post", inputs).then((res) => {
            if (res) {
                toast.success("Register sucessfully")
                navigate("/login")
            }
        })
    };


    const logout = async () => {
        localStorage.clear()
        setCurrentUser("")
        toast.success("Logged Out")
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, registerUser, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};