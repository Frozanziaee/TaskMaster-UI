import Button from "./Button"
import './Tasks.css'
import { PiNotePencil } from "react-icons/pi";
import { useState, useEffect } from "react";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import customFetch from "../axios";
import { toast } from "react-toastify";

export default function ProjectDetaile ({className, selectedProject}){
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [users, setUsers] = useState([]);

  const openTaskModal = () => setIsOpen(true)
  const closeTaskModal = () => setIsOpen(false)
  const editModal = () => setIsEdit(true)
  const closeEditModal = () => setIsEdit(false)

    return (
        <div className={className}>
            <h2 className="title-task">{selectedProject.title}</h2>
            <p className="p-info">{selectedProject.description}</p>

            <ul className="content add">
                <li className="titles li">Manager</li>
                <li className="name li left">
                    <img 
                        src="../avatar.png"
                        className="image" 
                    />
                    <span className='name'>{selectedProject.manager}</span>
                </li>
            </ul>

            <ul className="content add">
                <li className="titles li">Progress</li>
                <li className="li left">
                    <progress value={selectedProject.progress} max="100">{selectedProject.progress}</progress>
                    <span className='progress'>{selectedProject.progress}</span>
                </li>
            </ul>

            <ul className="content add">
                <li className="titles li"> Deadline</li>
                <li className="li left">{new Date(selectedProject.deadline).toLocaleDateString()}</li>
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