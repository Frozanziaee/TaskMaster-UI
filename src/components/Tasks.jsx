import Button from "./Button"
import './Projects.css'
import TaskDetaile from "./TaskDetaile"
import './Tasks.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";

export default function Tasks(){
    return (
        <div>
            <div className="task">
                <header className="task-header">
                    <span><FaLongArrowAltLeft className="note-icon" /></span>
                    <div className="search">
                        <CiSearch className="note-icon" />
                        <input 
                            type="search" 
                            placeholder="Search"
                            className="input-search" />
                    </div>
                </header>

                <div className="tasks-info">
                    <div>
                        <TaskDetaile className="task-detaile" />
                    </div>

                    <div className="information">
                        <div className='content'>
                            <h4 className="titles">Ticket No</h4>
                            <p>Sep 30 2024</p>
                        </div>

                        <div className='content'>
                            <h4 className="titles">Project</h4>
                            <p>...TaskMaster UI/UX Design</p>
                        </div>

                        <div className="content">
                            <h4 className="titles">Assignee</h4>
                            <div className='name'>
                                <img 
                                    src="../avatar.png"
                                    className="image" 
                                />
                                <span className='name'>Rabia</span>
                            </div>
                        </div>

                        <div className="content">
                            <h4 className="titles">Status</h4>
                            <Button className="status-btn"> <FaCircle className="status-icon" />Not Started</Button>
                        </div>

                        <div className="content">
                            <h4 className="titles">Deadline</h4>
                            <p>Sep 30 2024</p>
                        </div>
                    </div>   
                </div>
                <Button className="more">More</Button>
            </div>
            
        </div>
    )
}