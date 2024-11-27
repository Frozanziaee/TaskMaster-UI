import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../axios";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, [])

  const login = async (formData) => {
    const {
      data: { token, user },
    } = await customFetch.post("/auth/signin", formData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = async () => {
    try {
      const { data } = await customFetch.get("/auth/signout");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("signin");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong try again later");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        logout,
        setUser(obj) {
          setUserData(obj);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
