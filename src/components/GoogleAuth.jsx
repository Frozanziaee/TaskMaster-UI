import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import customFetch from "../axios";
import { useContext } from "react";


export default function GoogleAuth() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const { data } = await customFetch.post("/auth/google", {
        access_token: codeResponse.access_token,
      });
      toast.success(data.message);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigate("/");
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
      toast.error("Google Login field");
    },
  })
    return (
        <div className="flex">
            <button className="google" onClick={googleLogin}>Continue with Google</button>
            <button className="github">Continue with Github</button>
        </div>
    )
}
