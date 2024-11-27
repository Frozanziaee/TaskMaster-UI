import { Link } from "react-router-dom";
import Button from "./Button"
import './Tasks.css'
import { PiNotePencil } from "react-icons/pi";
import { useState } from "react";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

export default function TaskDetaile ({className}){
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
  // Function to open the modal
  const openTaskModal = () => {
    setIsOpen(true)
  }

  // Function to close the modal
  const closeTaskModal = () => {
    setIsOpen(false)
  }

  const editModal = () => setIsEdit(true)
  const closeEditModal = () => setIsEdit(false)

    return (
        <div className={className}>
            <h2 className="title-task">TaskMaster UI/UX Design</h2>
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