import Button from "./Button";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import "./Navebar.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navebar({ page }) {
  const { logout } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-user">
          <span>
            <CiUser className="avatar" />
          </span>
          <div className="para">
            <p className="nav-profile">User profile</p>
            <p className="nav-email">user@gmail.com</p>
          </div>
        </div>
        <h2 className="home">{page}</h2>
        <div className="out">
          <span>
            <IoIosNotificationsOutline className="notification" />
          </span>
          <button onClick={logout} className="sign-out">
            SignOut
            <span>
              <TbLogout2 className="icon-out" />
            </span>
          </button>
        </div>
      </nav>
      <hr />
    </header>
  );
}