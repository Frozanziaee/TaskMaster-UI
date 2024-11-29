import Input from "./Input";
import Button from "./Button";
import "./New.css";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import customFetch from "../axios";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

export default function NewTask({ handleclick }) {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    manager: "",
    deadline: "",
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await customFetch.post("/projects", formData);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.message);
    } finally {
      handleclick();
    }
    setFormData({
      title: "",
      description: "",
      manager: "",
      deadline: "",
    });
  };

  return (
    <div className="new">
      <div className="new-header">
        <h2>New Project</h2>
        <span>
          <IoCloseSharp onClick={handleclick} className="close" />
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="input-title"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          name="description" // Ensure it matches the key in formData
          className="input-description"
          value={formData.description} // Access the correct property
          onChange={handleChange}
          placeholder="Project description"
        />
        <select
          placeholder="Manager"
          name="manager"
          className="select"
          onChange={handleChange}
          value={formData.manager}
        >
          {users.map((user) => (
            <option value={user._id} key={user._id}>
              {user.firstName}
            </option>
          ))}
        </select>
        <Input
          type="date"
          className="input-date"
          placeholder="Deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
        />
        <Button className="signin new-btn" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}