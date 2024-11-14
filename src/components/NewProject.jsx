import Input from "./Input";
import Button from "./Button";
import './New.css'
import { IoCloseSharp } from "react-icons/io5";

export default function NewTask (){
    return (
        <div className="new">
            
            <div className="new-header">
                <h2>New Project</h2>
                <span><IoCloseSharp /></span>
            </div>
            <Input 
                type="text" 
                className="input-title" 
                placeholder="Title"
            />
            <Input 
                type="text" 
                className="input-description" 
                placeholder="Description"
            />
            <Input 
                type="text" 
                className="input-name" 
                placeholder="Manager"
            />
            <Input 
                type="date" 
                className="input-date" 
                placeholder="Deadline"
            />
            <Button className="signin new-btn">Add</Button>
        </div>
    )
}
