import React, { useContext } from "react";
import { toast } from "react-toastify";
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import customFetch from "../axios";

export default function GitHubAuth() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGitHubLogin = async () => {
        try {
          // Redirect to GitHub OAuth authorization page
          const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
          const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;
          const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    
          window.location.href = githubAuthUrl;
        } catch (error) {
          console.error(error);
          toast.error("GitHub Login failed");
        }
      };
    return (
        <div>
            <button className="github" onClick={handleGitHubLogin}>Continue with Github</button>
        </div>
    )
}