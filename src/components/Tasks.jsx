import Button from "./Button";
import "./Projects.css";
import ProjectDetaile from "./ProjectDetaile";
import "./Tasks.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import Navebar from "./Navebar";
import Footer from "./Footer";
import customFetch from "../axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const {state} = useLocation();

  useEffect(() => {
    // Fetch data from API
    const fetchTasks = async () => {
      try {
        const response = await customFetch.get(`/tasks?projectId=${state._id}`);
        setTasks(response.data.tasks); // Assuming response.data.tasks contains the tasks
        setLoading(false);
        console.log(response.data.tasks);
        console.log("state", state)
        console.log(response.data.message);
      } catch (err) {
        setError("Error fetching tasks");
        setLoading(false);  
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await customFetch.post(`/tasks?projectId=${id}&search=${search}`);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.message);
    } finally {
      handleclick();
    }
  };

  return (
    <div className="positions">
      <Navebar page="Tasks" />
      <div className="task">
        <header className="task-header">
          <span>
            <FaLongArrowAltLeft className="note-icon" />
          </span>
          <form className="search" onSubmit={handleSubmit}>
            <CiSearch className="note-icon" />
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="input-search"
            />
          </form>
        </header>

        <div className="tasks-info">
          <div>
            <ProjectDetaile className="task-detaile" selectedProject={state}  />
          </div>

          <table className="titles" style={{ width: "60%" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.title}</td>
                  {/* <td>{task.description}</td> */}
                  <td>{task.assignee?.name || "Unassigned"}</td>
                  <td>{task.status}</td>
                  <td>{new Date(task.deadline).toLocaleDateString()}</td>
                  <td>{task.project?.name || "No Project"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button className="more">More</Button>
      </div>

      <Footer />
    </div>
  );
}