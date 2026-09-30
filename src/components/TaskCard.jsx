import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = useTaskContext();

  const handleComplete = () => {
    updateTask(task.id, {
      status: "Closed",
    });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task-card">

      <div className="task-card-header">

        <h3>
          {task.header}
        </h3>

        <span
          className={`priority ${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

      </div>

      <p>
        {task.description}
      </p>

      <div className="task-info">

        <span>
          Category: {task.category}
        </span>

        <span>
          Status: {task.status}
        </span>

      </div>

      <div className="task-actions">

        <Link
          to={`/tasks/${task.id}`}
          className="view-button"
        >
          View
        </Link>

        {task.status !== "Closed" && (
          <button
            onClick={handleComplete}
            className="complete-button"
          >
            Complete
          </button>
        )}

        <button
          onClick={handleDelete}
          className="delete-button"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TaskCard;