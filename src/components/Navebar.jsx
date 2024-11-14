import Button from './Button'
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb"
import './Navebar.css'

export default function Navebar (){
    return (
       <header>
            <nav className='navbar'>
                <div className="nav-user">
                    <span><CiUser className="avatar" /></span>
                    <div className="para">
                        <p className="nav-profile">User profile</p>
                        <p className="nav-email">user@gmail.com</p>
                    </div>
                </div>
                <h2 className="home">Home</h2>
                <div className="out">
                    <span><IoIosNotificationsOutline className="notification" /></span>
                    <Button className="sign-out">
                        Sign Out
                        <span><TbLogout2 className="icon-out" /></span>
                    </Button>
                </div>
            </nav>
            <hr />
       </header>
    )
}