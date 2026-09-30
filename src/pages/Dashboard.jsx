import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTaskContext();

  const totalTasks = tasks.length;

  const raisedTasks = tasks.filter(
    (task) => task.status === "Raised"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Manage your tasks efficiently.</p>

      <div className="stats">

        <div>
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div>
          <h2>{raisedTasks}</h2>
          <p>Raised</p>
        </div>

        <div>
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

        <div>
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

      </div>

      <div className="dashboard-buttons">
        <Link to="/tasks">
          View All Tasks
        </Link>

        <Link to="/tasks/add">
          Add New Task
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;