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
                <Link to="/" className=" color icon-p "><RiHome5Line className="icon-footer" />Home</Link>
                <Link to="/projects" className="color icon-p"><MdOutlineStickyNote2 className="icon-footer" />Projects</Link>
                <Link to="/profile "className="color icon-p"><CiUser className="icon-footer" />Profile</Link>
            </footer>
        </div>
    )
}