import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const { tasks } = useTaskContext();

  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const filteredTasks = tasks.filter((task) => {

    const priorityMatch =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    const categoryMatch =
      categoryFilter === "All" ||
      task.category === categoryFilter;

    const statusMatch =
      statusFilter === "All" ||
      task.status === statusFilter;

    return (
      priorityMatch &&
      categoryMatch &&
      statusMatch
    );
  });

  return (
    <div className="page-container">

      <div className="page-header">

        <h1>
          Tasks
        </h1>

        <p>
          View and manage all your tasks.
        </p>

      </div>

      <div className="filters">

        <div>
          <label>
            Priority
          </label>

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
          >
            <option value="All">
              All
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>

          </select>
        </div>

        <div>
          <label>
            Category
          </label>

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
          >
            <option value="All">
              All
            </option>

            <option value="Academic">
              Academic
            </option>

            <option value="Personal">
              Personal
            </option>

          </select>
        </div>

        <div>
          <label>
            Status
          </label>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All
            </option>

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

      </div>

      <div className="task-list">

        {filteredTasks.length === 0 ? (

          <div className="empty-state">
            <h2>
              No tasks found
            </h2>

            <p>
              Add a new task to get started.
            </p>
          </div>

        ) : (

          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))

        )}

      </div>

    </div>
  );
};

export default Tasks;