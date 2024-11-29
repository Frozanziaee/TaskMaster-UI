import Button from "./Button";
    import "./Home.css";
    import Navebar from "./Navebar";
    import Footer from "./Footer";
    import { FaCircleMinus } from "react-icons/fa6";
    import { FaClock } from "react-icons/fa6";
    import { TiTick } from "react-icons/ti";
    import { IoAddOutline } from "react-icons/io5";
    import { useEffect, useState } from "react";
    import customFetch from "../axios";
    import NewProject from './NewProject'

    export default function Home() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [data, setData] = useState([]);
        const [formData, setFormData] = useState({
            title: "",
            descriotion: "",
            manager: "",
            deadline: "",
        });

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await customFetch.get("/projects/summary");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
        }
        };

        fetchUsers();
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
        <Navebar page="Home" />
        <div className="home">
            <h2 className="title">Projects Overview</h2>
            <div className="cards">
            <div className="card total-projects-bg ">
                <p className="total">{data.allProjects}</p>
                <p className="total-projects text">Projects</p>
            </div>
            <div className="card not-started-bg">
                <p className="total">{data.notStartedProjects}</p>
                <p className="not-started text">
                Not started
                <FaCircleMinus />
                </p>
            </div>
            <div className="card in-progress-bg">
                <p className="total">{data.inProgressProjects}</p>
                <p className="in-progress text">
                In Progress
                <FaClock />
                </p>
            </div>
            <div className="card completed-bg">
                <p className="total">{data.completedProjects}</p>
                <p className="completed text">
                Completed
                <TiTick />
                </p>
            </div>
            </div>
            <Button className="new-project" handleclick={openModal}>
                <IoAddOutline />
                New Project
            </Button>
            {/* Modal component */}
            {isModalOpen && <NewProject handleclick={closeModal} />}
        </div>
        <hr />
        <Footer />
        </div>
    );
    }