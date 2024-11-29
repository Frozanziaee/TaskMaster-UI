import { CiUser } from "react-icons/ci"
import Navebar from './Navebar'
import Footer from './Footer'
import Button from "./Button"
import './Profile.css'
import customFetch from "../axios"
import { useState, useRef, useContext } from "react"
import { toast } from "react-toastify"
import { AuthContext } from "../context/AuthContext"

export default function Profile() {
    const fileInputRef = useRef();
    const [imgPath, setImgPath] = useState("");
    const [selectedImg, setSelectedImg] = useState();
    const {userData, setUser} = useContext(AuthContext);
    const user = userData || JSON.parse(localStorage.getItem("user"));
    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        dateOfBirth: user?.dateOfBirth,
        country: user?.country,
        profile: user?.profile,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    // handle click on button to browse for files
    const handleClick = () => fileInputRef.current.click();

    // handle file input change
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        const path = URL.createObjectURL(fileInputRef.current.files[0]);
        setImgPath(path);
        setSelectedImg(fileInputRef.current.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const profileData = new FormData();
    for (let key in formData){
        profileData.append(key, formData[key]);
    }

    if (selectedImg) {
        console.log(selectedImg)
        profileData.set('profile', selectedImg)
    }

    try {
        const { data } = await customFetch.patch('/users', profileData)
        setUser(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        toast.success(data.message)
    } catch (error) {
        console.log(error)
        if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong, please try again later!");
        }
    }
    setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        country: '',
        profile: '',
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    }) 
}

    return (
        <div>
            <Navebar page="Profile" />
                <form className="profile" onSubmit={handleSubmit}>
                    {/* <CiUser className="profile-img" /> */}
                    <div className="image-container">
                        <img
                            src={imgPath || user?.profile}
                            alt={`profile picture of`}
                            className="profile-img"
                        />
                        <input
                            type="file"
                            accept="image/* .jpg, .jpeg, .png"
                            ref={fileInputRef} 
                            className="hidden"
                            onChange={handleChange}
                            value={formData.profile}
                        />
                    </div>
                    <div className="flex">
                        <input 
                            type="text"
                            className="input-firstname"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            className="input-lastname"
                            placeholder="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <input 
                            type="date"
                            className="input-date"
                            placeholder="Date of Birth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            className="input-country"
                            placeholder="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                        
                        <div className="hr"></div>

                        <input 
                            type="password"
                            className="input-password"
                            placeholder="Current Password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            className="input-password"
                            placeholder="New Password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            className="input-password"
                            placeholder="Confirm New Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <Button className="profile-btn" type="submit">Save</Button>
                    </div>
                    
                </form>
            <Footer className="footer" />
        </div>
    )
}