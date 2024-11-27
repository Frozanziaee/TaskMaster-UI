import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import './Delete.css'
import './New.css'


export default function DeleteTask ({handleclick}) {
    return (
        <div className="delete position">
           <div className="new-header">
                <h2 className="title del">Delete Task?</h2>
                <span><IoCloseSharp className="close" onClick={handleclick} /></span>
            </div>
            <hr />
            <p className="p-delete">This can not be undone!</p>
            <hr />
            <div className="delete-div">
                <Button className="del-btn">Delete</Button>
                <Button className="cancel">Discard</Button>
            </div>
        </div>
    )
}