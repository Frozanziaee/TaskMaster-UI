import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import './Delete.css'


export default function DeleteTask () {
    return (
        <div>
           <div className="new-header">
                <h2 className="title">Delete Task?</h2>
                <span><IoCloseSharp /></span>
            </div>
            <hr />
            <p className="p-delete">This can not be undone!</p>
            <hr />
            <div className="delete-div">
                <Button>Delete</Button>
                <Button>Discard</Button>
            </div>
        </div>
    )
}