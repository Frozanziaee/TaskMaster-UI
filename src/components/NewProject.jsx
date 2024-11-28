import Input from "./Input";
import Button from "./Button";
import './New.css'
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import customFetch from "../axios";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";


export default function NewTask ({handleclick}){
    const [formData, setFormData] = useState({
        title: '', descriotion: '', manager: '', deadline:''
    })

    // const { data, error, isLoding } = useFetch('/users')

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await customFetch.post('/projects', formData)
            console.log(data)
            toast.success(data.message)
        } catch (error) {
            console.log(error)
            toast.success(error.response.message)
            
        }
    }

    return (
        <div className="new">
            
            <div className="new-header">
                <h2>New Project</h2>
                <span><IoCloseSharp onClick={handleclick} className="close" /></span>
            </div>
            
            <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                className="input-title" 
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <Input 
                type="text" 
                className="input-description" 
                placeholder="Description"
                name="description"
                value={formData.descriotion}
                onChange={handleChange}
            />
            <Input 
                type="text" 
                className="input-name" 
                placeholder="Manager"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
            />
            <Input 
                type="date" 
                className="input-date" 
                placeholder="Deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
            />
            <Button className="signin new-btn" type="submit">Add</Button>

            </form>
        </div>
    )
}
