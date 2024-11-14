import { RiHome5Line } from "react-icons/ri"
import { MdOutlineStickyNote2 } from "react-icons/md"
import { CiUser } from "react-icons/ci"
import './Footer.css'
import Button from './Button'

export default function Footer ({className}) {
    return (
        <div className={className}>
            <footer>
                <Button className="icon-p"><a href="#" className=" color icon-p"><RiHome5Line className="icon-footer" />Home</a></Button>
                <Button className="icon-p"><a href="#" className="color icon-p"><MdOutlineStickyNote2 className="icon-footer" />Projects</a></Button>
                <Button className="icon-p"><a href="# "className="color icon-p"><CiUser className="icon-footer" />Profile</a></Button>
            </footer>
        </div>
    )
}