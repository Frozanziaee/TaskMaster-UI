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
              const response = await customFetch.get('/projects');
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

  //const { allTasks, completedTasks } = project;
  const progress = ((100 * completedTasks) / allTasks) || 0;

  let color = progress < 40 ? "red" : progress < 80 ? "blue" : "green";


    return (

        <div>
            <Navebar page="Projects" />
        <table>
            <thead className='titles'>
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
                        <td>{project.status}
                            <progress 
                                value={progress} 
                                max="100">50%
                            </progress>
                            <span className='progress'>50%</span>
                        </td>
                        <td>{project.allTasks}</td>
                        <td>{project.inProgressTasks}</td>
                        <td>{project.completedTasks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='new-content'>
            {/* Button to open the modal */}
            <Button className="new-pro" handleclick={openModal}>
                <IoAddOutline className='add-icon' />New Project
            </Button>

            {/* Modal component */}
            {
                isModalOpen && <NewProject handleclick={closeModal} />
            }
                        
            <Button className="new-pro" handleclick={editModal}>
                More
            </Button>
            {
                isEdit && <EditProject handlclick={closeEditModal} />
            }
        </div>    
            <Footer className="position" />
        </div>
    )
}

