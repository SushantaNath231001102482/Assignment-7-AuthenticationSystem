import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const CompletedTasks = () => {
  const { tasks } = useTaskContext();

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page-container">

      <div className="page-header">

        <h1>
          Completed Tasks
        </h1>

        <p>
          Tasks marked as closed.
        </p>

      </div>

      <div className="task-list">

        {completedTasks.length === 0 ? (

          <div className="empty-state">

            <h2>
              No completed tasks
            </h2>

            <p>
              Completed tasks will appear here.
            </p>

          </div>

        ) : (

          completedTasks.map((task) => (
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

export default CompletedTasks;