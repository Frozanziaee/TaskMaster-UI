import React, { useEffect, useState } from "react";
//import axios from 'axios'
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import CreateNewPassword from "./components/CreateNewPassword";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import ProtectedPages from "./components/ProtectedPages";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<ProtectedPages />}>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Tasks />} />
              <Route path="profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;