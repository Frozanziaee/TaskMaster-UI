import { RiHome5Line } from "react-icons/ri"
import { MdOutlineStickyNote2 } from "react-icons/md"
import { CiUser } from "react-icons/ci"
import './Footer.css'
import Button from './Button'
import { Link } from "react-router-dom"

export default function Footer ({className}) {
    return (
        <div className={className}>
            <footer>
                <Button className="icon-p"><Link to="/home" className=" color "><RiHome5Line className="icon-footer" />Home</Link></Button>
                <Button className="icon-p"><Link to="/projects" className="color"><MdOutlineStickyNote2 className="icon-footer" />Projects</Link></Button>
                <Button className="icon-p"><Link to="/profile "className="color"><CiUser className="icon-footer" />Profile</Link></Button>
            </footer>
        </div>
    )
}