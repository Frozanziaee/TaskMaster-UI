import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import './App.css'
import DeleteTask from './components/DeleteTask'
// import EditTask from './components/EditTask'
// import EditProject from './components/EditProject'
// import NewTask from './components/NewTask'
// import NewProject from './components/NewProject'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import ResetPassword from './components/ResetPassword'
// import CreateNewPassword from './components/CreateNewPassword'
// import Home from './components/Home'
// import Projects from './components/Projects'
// import Profile from './components/Profile'
// import Tasks from './components/Tasks'
 

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
      <div className="App">
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <ResetPassword /> */}
        {/* <CreateNewPassword /> */}
        {/* <Home /> */}
        {/* <Projects /> */}
        {/* <Profile /> */}
        {/* <Tasks /> */}
        {/* <NewTask />
        // <NewProject /> */}
        {/* <EditTask /> */}
        {/* <EditProject /> */}
        <DeleteTask />
      </div>
    </>
  )
}

export default App
