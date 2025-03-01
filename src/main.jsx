import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import App from "./App";
import Dashboard from "./components/Dashboard";
import Lessons from "./components/Lessons";
import Quizzes from "./components/Quizzes";
import Matchmaking from "./components/Matchmaking";
import MentorMatching from "./components/MentorMatching";
import Rewards from "./components/Rewards";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import "./index.css";

// Route Guard: Temporarily allow access without login
const ProtectedRoute = ({ children }) => {
  // Temporarily bypass authentication check
  return children; // Render the protected route without checking auth
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the layout wrapper
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "/login",
        element: <Login />, // Login page
      },
      {
        path: "/signup",
        element: <Signup />, // Signup page
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/lessons",
        element: (
          <ProtectedRoute>
            <Lessons /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/quizzes",
        element: (
          <ProtectedRoute>
            <Quizzes /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/matchmaking",
        element: (
          <ProtectedRoute>
            <Matchmaking /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/mentor-matching",
        element: (
          <ProtectedRoute>
            <MentorMatching /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "/rewards",
        element: (
          <ProtectedRoute>
            <Rewards /> {/* Protected route */}
          </ProtectedRoute>
        ),
      },
      {
        path: "*", // Catch-all route for 404
        element: <NotFound />,
      },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);