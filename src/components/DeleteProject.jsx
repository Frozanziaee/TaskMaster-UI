import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import './Delete.css'


export default function DeleteTask ({handleclick, onDelete}) {
    return (
        <div className="delete position">
           <div className="new-header">
                <h2 className="title del">Delete Project?</h2>
                <span><IoCloseSharp className="close" onClick={handleclick} /></span>
            </div>
            <hr />
            <p className="p-delete">This can not be undone!</p>
            <hr />
            <div className="delete-div">
                <Button className="del-btn" handleclick={onDelete}>Delete</Button>
                <Button className="cancel" handleclick={handleclick}>Discard</Button>
            </div>
        </div>
    )
}