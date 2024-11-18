import Button from "./Button"
import './Home.css'
import Navebar from './Navebar'
import Footer from './Footer'
import { FaCircleMinus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <Navebar page="Home" />
            <div className="home">
                <h2 className="title">Projects Overview</h2>
            <div className="cards">
                
                <div className="card total-projects-bg ">
                    <p className="total">
                        30
                    </p>
                    <p className="total-projects text">
                        Projects
                    </p>
                </div>
                <div className="card not-started-bg">
                <p className="total">
                        6
                    </p>
                    <p className="not-started text">
                        Not Started
                        <FaCircleMinus />
                    </p>
                </div>
                <div className="card in-progress-bg">
                    <p className="total">
                        19
                    </p>
                    <p className="in-progress text">
                        In Progress
                        <FaClock />
                    </p>
                </div>
                <div className="card completed-bg">
                <p className="total">
                        5
                    </p>
                    <p className="completed text">
                        Completed
                        <TiTick />
                    </p>
                </div>
            </div>
            <Button className="new-project">
                <Link to="/new-project" className="link-add">
                    <IoAddOutline />New Project 
                </Link>
            </Button>
            </div>
            <hr />
            <Footer />
        </div>
    )

}