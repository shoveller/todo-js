import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from "react-router-dom";
import TodoLayout from "./TodoLayout";
import TodoForm from "./TodoForm";
import LoginForm from "./LoginForm";
import { isLogin } from "@/api";

const AuthLayout = () => {
  if (!isLogin()) {
    return <Navigate to="/todo-js/login" />;
  }

  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TodoLayout />}>
      <Route path="todo-js" element={<AuthLayout />}>
        <Route index element={<TodoForm />} />
        <Route path="*" element={<Navigate to="todo-js" />} />
      </Route>
      <Route path="/todo-js/login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="todo-js" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
