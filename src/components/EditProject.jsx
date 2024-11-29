import "./Tasks.css";
import "./Projects.css";
import "./Edit.css";
import "./New.css";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import DeleteProject from "./DeleteProject";
import customFetch from "../axios";
import { toast } from "react-toastify";

export default function EditProject({ selectedProject, handleclick }) {
  const [isDelete, setIsDelete] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    title: selectedProject?.title || "",
    description: selectedProject?.description || "",
    manager: selectedProject?.manager || "",
    deadline: selectedProject?.deadline || "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await customFetch.get("/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await customFetch.patch("/projects", formData);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.message);
    } finally {
      handleclick();
    }
  };

  const openDeleteModal = () => setIsDelete(true);
  const closeDeleteModal = () => setIsDelete(false);

  return (
    <div className="edit box-shadow">
      <div className="task-master">
        <div className="new-header">
          <h2 className=" title-edit">{selectedProject?.title}</h2>
          <span>
            <IoCloseSharp onClick={handleclick} className="close" />
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content-edit">
            <h4 className="titles">Manager</h4>
            <select
              placeholder="Manager"
              name="manager"
              className="select-name"
              onChange={handleChange}
              value={formData.manager}
            >
              {users.map((user) => (
                <option value={user._id} key={user._id}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          <div className="content-edit">
            <h4 className="titles">Deadline</h4>
            <input
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              className="input-date date"
            />
          </div>

          <div>
            <textarea
              name="description" // Ensure it matches the key in formData
              className="info"
              value={formData.description} // Access the correct property
              onChange={handleChange}
              placeholder="project description"
            />
          </div>

          <div className="edit-btn">
            <div className="update-btn">
              <button className="save">save</button>
              <button className="cancel" onClick={handleclick}>
                cancel
              </button>
            </div>
            <span onClick={openDeleteModal}>
              <RiDeleteBinLine className="delete-icon" />
            </span>
            {isDelete && <DeleteProject handleclick={closeDeleteModal} />}
          </div>
        </form>
      </div>
    </div>
  );
}