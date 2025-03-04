import Input from './Input'
import Button from './Button'
import { FaCircle } from "react-icons/fa";
import './Tasks.css'
import './Projects.css'
import './Edit.css'
import './New.css'
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import DeleteTask from './DeleteTask';
import { useNavigation } from 'react-router-dom';

export default function EditTask ({handleclick, selectedTask}) {
    const [isDelete , setIsDelete] = useState(false);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        title: selectedTask?.title || "",
        description: selectedTask?.description || "",
        manager: selectedTask?.manager || "",
        deadline: selectedTask?.deadline || "",
      });
      const navigate = useNavigation

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
          const { data } = await customFetch.patch("/tasks", formData);
          console.log(data);
          toast.success(data.message);
        } catch (error) {
          console.log(error);
          toast.success(error.response.message);
        } finally {
          handleclick();
        }
      };

      const handleDelete = async () => {
        try {
          const { data } = await axiosIns.delete(`/tasks/${taskId}`);
          toast.success(data.message);
        } catch (error) {
          console.error(error);
          toast.error(error.message);
        } finally {
          closeDeleteModal()
        }
      };

    const openDeleteModal = () => setIsDelete(true);
    const closeDeleteModal = () => setIsDelete(false);
    return (
        <div className='edit box-shadow'>   
            <div className='task-master'>
                <div className='new-header'>
                    <h2 className='title-edit'>{selectedTask?.title}</h2>
                    <span><IoCloseSharp onClick={handleclick} className='close' /></span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="content-edit">
                        <h4 className="titles">Assignee</h4>
                        <select
                        placeholder="Manager"
                        name="manager"
                        className="input-name"
                        onChange={handleChange}
                        value={formData.manager}
                        >
                        {users.map((user) => (
                            <option value={user._id} key={user._id}>
                            {user.firstName}
                            </option>
                        ))}
                        </select>
                    </div>
                </form>
                

                <div className="content-edit">
                    <h4 className="titles">Status</h4>
                    <Button className="status-btn"> <FaCircle className="status-icon" />Not Started</Button>
                </div>

                <div className="content-edit">
                    <h4 className="titles">Deadline</h4>
                    <input
                        type="date"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="input-date date"
                    />
                </div> 

                <div>
                    <textarea
                        name="description" // Ensure it matches the key in formData
                        className="info"
                        value={formData.description} // Access the correct property
                        onChange={handleChange}
                        placeholder="project description"
                    />
                </div>

                <div className='edit-btn'>
                    <div className='update-btn'>
                        <Button className="save">save</Button>
                        <Button className="cancel">cancel</Button>
                    </div>
                    <span onClick={openDeleteModal}>
                        <RiDeleteBinLine className="delete-icon" />
                    </span>
                    {
                        isDelete && <DeleteTask handleclick={closeDeleteModal} />
                    }
                </div>
            </div>
        </div>
    )
}