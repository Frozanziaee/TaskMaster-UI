import Navebar from './Navebar'
import Footer from './Footer'
import './Projects.css'
import { IoAddOutline } from "react-icons/io5";
import Button from './Button';
import { useEffect, useState } from 'react';
import NewProject from './NewProject';
import EditProject from './EditProject';
import { useNavigate } from 'react-router-dom';
import customFetch from '../axios';


export default function Projects () {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from the API
  useEffect(() => {
      const fetchProjects = async () => {
          try {
              const response = await axios.get('/api/v1/projects');
              setProjects(response.data.data);
          } catch (error) {
              console.error('Error fetching projects:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  // Function to open the modal
  const openModal = () =>  setIsModalOpen(true)
  // Function to close the modal
  const closeModal = () => setIsModalOpen(false)

  const editModal = () => setIsEdit(true)
  const closeEditModal = () => setIsEdit(false)

    return (

        <div>
            <Navebar page="Projects" />
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Manager</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>All Tasks</th>
                    <th>In-Progress Tasks</th>
                    <th>Completed Tasks</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <tr key={project._id}>
                        <td>{project.title}</td>
                        <td>{project.description}</td>
                        <td>{project.manager?.name || 'N/A'}</td>
                        <td>{new Date(project.deadline).toLocaleDateString()}</td>
                        <td>{project.status}</td>
                        <td>{project.allTasks}</td>
                        <td>{project.inProgressTasks}</td>
                        <td>{project.completedTasks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  
            <Footer className="position" />
        </div>
    )
}

