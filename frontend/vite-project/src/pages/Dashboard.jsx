import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Dashboard.css"

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const[editId, setEditId]=useState(null);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);

      const response = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      setTasks(response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

const deleteTask = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Task Deleted");

    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

  const createTask = async () => {
  try {
    const token = localStorage.getItem("token");

    if (editId) {
      await api.put(
        `/tasks/${editId}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Updated");
    } else {
      await api.post(
        "/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Created");
    }

    fetchTasks();

    setTitle("");
    setDescription("");
    setEditId(null);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

<button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>

<br /><br />

      <input
  type="text"
  placeholder="Task Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Task Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

<br /><br />

<button onClick={createTask}>
  {editId ? "Update Task" : "Add Task"}
</button>

<hr />

      {tasks.map((task) => (
  <div key={task._id} className="task-card">
    <h4>{task.title}</h4>
    <p>{task.description}</p>
        <button
  onClick={() => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  }}
>
  Edit
</button>
    <button
  style={{ backgroundColor: "red" }}
  onClick={() => deleteTask(task._id)}
>
  Delete
</button>
    
  </div>
))}
    </div>
  );
}

export default Dashboard;