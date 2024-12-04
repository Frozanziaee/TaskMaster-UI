import Navebar from "./Navebar";
import Footer from "./Footer";
import "./Projects.css";
import { IoAddOutline } from "react-icons/io5";
import Button from "./Button";
import { useEffect, useState } from "react";
import NewProject from "./NewProject";
import EditProject from "./EditProject";
import customFetch from "../axios";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await customFetch.get("/projects");
        console.log(response.data);
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const editModal = () => setIsEdit(true);
  const closeEditModal = () => setIsEdit(false);

  return (
    <div>
      <Navebar page="Projects" />
      <table id="customers" className="titles">
        <thead>
        <tr>
          <th>Project</th>
          {/* <th>Description</th> */}
          <th>Manager</th>
          <th>Tasks</th>
          <th>In Progress</th>
          <th>Completed</th>
          <th>Progress</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
        </thead>
        {projects.map((project) => {
          let progress = (project.completedTasks * 100) / project.allTasks || 0;
          return (
            
              <tr
                key={project._id}
                onClick={() => {
                  navigate(project._id, {state: project});
                }}
              >
                <td>{project.title}</td>
                {/* <td>{project.description}</td> */}
                <td>{project.manager?.firstName}</td>
                <td>{project.allTasks}</td>
                <td>{project.inProgressTasks}</td>
                <td>{project.completedTasks}</td>
                <td>
                  <progress value={progress} max="100">
                    {progress}
                  </progress>
                  <span className="progress">{progress}</span>
                </td>
                <td>{new Date(project.deadline).toLocaleDateString()}</td>
                <td>{project.status}</td>
              </tr>
            
          );
        })}
      </table>
      <div className="new-content">
        {/* Button to open the modal */}
        <Button className="new-pro" handleclick={openModal}>
          <IoAddOutline className="add-icon" />
          New Project
        </Button>

        {/* Modal component */}
        {isModalOpen && <NewProject handleclick={closeModal} />}

        <Button className="new-pro" handleclick={editModal}>
          More
        </Button>
        {isEdit && <EditProject handleclick={closeEditModal} />}
      </div>
      <hr />
      <Footer />
    </div>
  );
}