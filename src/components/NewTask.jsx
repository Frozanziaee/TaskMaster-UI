import Input from "./Input";
import Button from "./Button";
import './New.css'
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import customFetch from "../axios";
import { toast } from "react-toastify";




export default function NewTask ({handleclick, task}){
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '', 
        assignee: '', 
        deadline:''
    })

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
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await customFetch.post(`/tasks?projectId=${task}`, formData)
            console.log(data)
            toast.success(data.message)
        } catch (error) {
            console.log(error)
            toast.success(error.response.message)
            
        }finally {
            handleclick();
        }
    }


    return (
        <div className="new">
            
            <div className="new-header">
                <h2>New Task</h2>
                <span><IoCloseSharp onClick={handleclick} className="close" /></span>
            </div>
            
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}
                    className="input-title" 
                    placeholder="Title"
                />
                <Input 
                    type="text"
                    name="description"  
                    value={formData.description}
                    onChange={handleChange} 
                    className="input-description" 
                    placeholder="Description"
                />
                <select
                placeholder="Assignee"
                name="assignee"
                className="select"
                onChange={handleChange}
                value={formData.assignee}
                >
                {users.map((user) => (
                    <option value={user._id} key={user._id}>
                    {user.firstName}
                    </option>
                ))}
            </select>
                <Input 
                    type="date" 
                    name="deadline" 
                    value={formData.deadline}
                    onChange={handleChange}
                    className="input-date" 
                    placeholder="Deadline"
                />
                <Button className="signin new-btn" type="submit">Add</Button>
            </form>
        </div>
    )
}
