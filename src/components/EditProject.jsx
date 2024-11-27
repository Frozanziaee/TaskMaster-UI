import Input from './Input'
import Button from './Button'
import './Tasks.css'
import './Projects.css'
import './Edit.css'
import './New.css'
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from 'react'
import DeleteProject from './DeleteProject'


export default function EditProject ({handlclick}) {
    const [isDelete , setIsDelete] = useState(false);

    const openDeleteModal = () => setIsDelete(true);
    const closeDeleteModal = () => setIsDelete(false);

    return (
        <div className='edit box-shadow'>   
            <div className='task-master'>
                    <div className='new-header'>
                        <h2 className=' title-edit'> TaskMaster UI/UX Design</h2>
                        <span><IoCloseSharp onClick={handlclick} /></span>
                    </div>
                <div className="content-edit">
                    <h4 className="titles">Manager</h4>
                    <div className='name'>
                        <img 
                            src="../avatar.png"
                            className="image" 
                        />
                        <span className='name'>Rabia</span>
                    </div>
                </div>

                <div className="content-edit">
                    <h4 className="titles">Deadline</h4>
                    <Input 
                        type="date"
                        className="input-date date"
                    />
                </div> 

                <div>
                    <p className='info'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias rem quis eligendi, itaque ipsa officiis odit inventore labore repellendus libero nisi eum quos quaerat voluptatem omnis obcaecati aspernatur nemo similique.
                    </p>
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
                        isDelete && <DeleteProject handleclick={closeDeleteModal} />
                    }
                </div>
            </div>
        </div>
    )
}