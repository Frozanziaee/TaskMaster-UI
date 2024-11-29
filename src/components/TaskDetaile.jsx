import Button from "./Button"
import './Tasks.css'
import { PiNotePencil } from "react-icons/pi";
import { useState, useEffect } from "react";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import customFetch from "../axios";
import { toast } from "react-toastify";

export default function TaskDetaile ({className, selectedProject}){
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        title: selectedProject?.title || "",
        description: selectedProject?.description || "",
        manager: selectedProject?.manager || "",
        deadline: selectedProject?.deadline || "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await customFetch.get("/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await customFetch.get("/projects", formData);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.message);
    } finally {
      handleclick();
    }
  };

  const openTaskModal = () => setIsOpen(true)
  const closeTaskModal = () => setIsOpen(false)
  const editModal = () => setIsEdit(true)
  const closeEditModal = () => setIsEdit(false)

    return (
        <div className={className}>
            <h2 className="title-task">{selectedProject?.title}</h2>
            <p className="p-info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            <ul className="content add">
                <li className="titles li">Manager</li>
                <li className="name li left">
                    <img 
                        src="../avatar.png"
                        className="image" 
                    />
                    <span className='name'>Rabia</span>
                </li>
            </ul>

            <ul className="content add">
                <li className="titles li">Progress</li>
                <li className="li left">
                    <progress value="50" max="100">50%</progress>
                    <span className='progress'>50%</span>
                </li>
            </ul>

            <ul className="content add">
                <li className="titles li"> Deadline</li>
                <li className="li left">Sep 30 2024</li>
            </ul>     

            <div className="add-btn">
                <span><PiNotePencil className="note-icon" onClick={editModal} /></span>
                {
                    isEdit && <EditTask handleclick={closeEditModal}/>
                }
                <Button className="button" handleclick={openTaskModal}>
                   Add Task
                </Button>
                {
                    isOpen && <NewTask handleclick={closeTaskModal} />
                }
            </div>
        </div>
    )
}