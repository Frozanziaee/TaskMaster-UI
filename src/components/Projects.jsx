import Navebar from './Navebar'
import Footer from './Footer'
import './Projects.css'


export default function Projects () {
    return (
        <div>
            <Navebar />
                <div>
                    <div className="header-projects">
                        <div className='content'>
                            <h4 className="titles">Project</h4>
                            <p>Task Master UI Design</p>
                        </div>
                        <div className="content">
                            <h4 className="titles">Manager</h4>
                            <div className='name'>
                                <img 
                                    src="../avatar.png"
                                    className="image" 
                                />
                                <span className='name'>Rabia</span>
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="titles">Tasks</h4>
                            <p>100</p>
                        </div>
                        <div className="content">
                            <h4 className="titles">In Progress</h4>
                            <p>99</p>
                        </div>
                        <div className="content">
                            <h4 className="titles">Completed</h4>
                            <p>27</p>
                        </div>
                        <div className="content">
                            <h4 className="titles">Progress</h4>
                            <div>
                                <progress value="50" max="100">50%</progress>
                                <span className='progress'>50%</span>
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="titles">Deadline</h4>
                            <p>Sep 30 2024</p>
                        </div>
                    </div>
                </div>
                <Footer className="position" />
        </div>
    )
}