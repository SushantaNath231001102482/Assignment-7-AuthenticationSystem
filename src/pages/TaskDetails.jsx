import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import { useTaskContext } from "../context/TaskContext";

const TaskDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    tasks,
    updateTask,
    deleteTask,
  } = useTaskContext();

  const task = tasks.find(
    (item) => item.id === id
  );

  const [status, setStatus] = useState(
    task?.status || "Raised"
  );

  if (!task) {
    return (
      <div className="page-container">

        <h1>
          Task Not Found
        </h1>

        <Link to="/tasks">
          Back to Tasks
        </Link>

      </div>
    );
  }

  const handleStatusUpdate = () => {
    updateTask(task.id, {
      status: status,
    });

    alert("Task updated successfully");
  };

  const handleDelete = () => {
    deleteTask(task.id);

    navigate("/tasks");
  };

  return (
    <div className="page-container">

      <div className="details-card">

        <h1>
          {task.header}
        </h1>

        <div className="details-row">

          <strong>
            Description:
          </strong>

          <span>
            {task.description}
          </span>

        </div>

        <div className="details-row">

          <strong>
            Priority:
          </strong>

          <span>
            {task.priority}
          </span>

        </div>

        <div className="details-row">

          <strong>
            Category:
          </strong>

          <span>
            {task.category}
          </span>

        </div>

        <div className="details-row">

          <strong>
            Raised Date:
          </strong>

          <span>
            {new Date(
              task.raisedDate
            ).toLocaleString()}
          </span>

        </div>

        <div className="details-row">

          <strong>
            Due Date:
          </strong>

          <span>
            28 Aug 2026
          </span>

        </div>

        <div className="details-row">

          <strong>
            Status:
          </strong>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="Raised">
              Raised
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Closed">
              Closed
            </option>

          </select>

        </div>

        <div className="details-actions">

          <button
            onClick={handleStatusUpdate}
            className="primary-button"
          >
            Update Task
          </button>

          <button
            onClick={handleDelete}
            className="delete-button"
          >
            Delete Task
          </button>

          <Link
            to="/tasks"
            className="secondary-button"
          >
            Back
          </Link>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;