import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  return (
    <AuthProvider>

      <TaskProvider>

        <BrowserRouter>

          <Routes>

            {/* PUBLIC ROUTE */}

            <Route
              path="/login"
              element={<Login />}
            />

            {/* DASHBOARD */}

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Dashboard />
                  </>
                </ProtectedRoute>
              }
            />

            {/* TASKS */}

            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Tasks />
                  </>
                </ProtectedRoute>
              }
            />

            {/* ADD TASK */}

            <Route
              path="/tasks/add"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <AddTask />
                  </>
                </ProtectedRoute>
              }
            />

            {/* DYNAMIC TASK DETAILS */}

            <Route
              path="/tasks/:id"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <TaskDetails />
                  </>
                </ProtectedRoute>
              }
            />

            {/* COMPLETED TASKS */}

            <Route
              path="/completed"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <CompletedTasks />
                  </>
                </ProtectedRoute>
              }
            />

          </Routes>

        </BrowserRouter>

      </TaskProvider>

    </AuthProvider>
  );
}

export default App;