import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const AddTask = () => {
  const navigate = useNavigate();

  const { addTask } = useTaskContext();

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!header.trim()) {
      setError("Task Header is required");
      return;
    }

    if (!description.trim()) {
      setError("Task Description is required");
      return;
    }

    const newTask = {
      id: Date.now().toString(),

      header: header,

      description: description,

      priority: priority,

      category: category,

      raisedDate: new Date().toISOString(),

      dueDate: "2026-08-28",

      status: "Raised",
    };

    addTask(newTask);

    navigate("/tasks");
  };

  return (
    <div className="page-container">

      <div className="form-card">

        <h1>
          Add New Task
        </h1>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Task Header
            </label>

            <input
              type="text"
              placeholder="Enter task header"
              value={header}
              onChange={(e) =>
                setHeader(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>
              Task Description
            </label>

            <textarea
              placeholder="Enter task description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >
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

          <div className="form-group">

            <label>
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option value="Academic">
                Academic
              </option>

              <option value="Personal">
                Personal
              </option>

            </select>

          </div>

          <div className="form-group">

            <label>
              Due Date
            </label>

            <input
              type="text"
              value="28 Aug 2026"
              disabled
            />

          </div>

          <button
            type="submit"
            className="primary-button"
          >
            Add Task
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddTask;