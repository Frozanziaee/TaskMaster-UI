import { CiUser } from "react-icons/ci"
import Navebar from './Navebar'
import Footer from './Footer'
import Button from "./Button"
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <Navebar />
            <div className="profile">
                <CiUser className="profile-img" />
                <form className="flex">
                    <input 
                        type="text"
                        className="input-pas"
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        className="input-lastname"
                        placeholder="Last name"
                    />
                    <input 
                        type="date"
                        className="input-date"
                        placeholder="Date of Birth"
                    />
                    <input 
                        type="text"
                        className="input-country"
                        placeholder="Country"
                    />
                    
                    <div className="hr"></div>

                    <input 
                        type="password"
                        className="input-password"
                        placeholder="Current Password"
                    />
                    <input 
                        type="password"
                        className="input-password"
                        placeholder="New Password"
                    />
                    <input 
                        type="password"
                        className="input-password"
                        placeholder="Confirm New Password"
                    />
                    <Button className="profile-btn">Save</Button>
                </form>
            </div>
            <Footer className="footer" />
        </div>
    )
}