import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];

    saveTasks(updatedTasks);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            ...updatedTask,
          }
        : task
    );

    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    saveTasks(updatedTasks);
  };

  const getTaskById = (id) => {
    return tasks.find((task) => task.id === id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};