import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import './App.css'

 import Login from './components/Login'
 import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import CreateNewPassword from './components/CreateNewPassword'
import Home from './components/Home'
import NewProject from './components/NewProject'
import Projects from './components/Projects'
import Profile from './components/Profile'
import EditProject from './components/EditProject'
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'
import EditTask from './components/EditTask'
import DeleteTask from './components/DeleteTask'
import DeleteProject from './components/DeleteProject'
import ProtectedPages from './components/ProtectedPages'
 

function App() {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   // Fetch data from the backend
  //   axios.get('http://localhost:3000/api/v1/auth')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     })
  // }, [])

  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
          <Route element={<ProtectedPages />} >
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
          </Route>
        </Routes>
        
        {/* <Profile /> */}
        {/*  */}
        
      </BrowserRouter>
    </>
  )
}

export default App
