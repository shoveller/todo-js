import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Outlet } from "react-router-dom";
import TodoLayout from "./TodoLayout";
import TodoForm from "./TodoForm";
import LoginForm from "./LoginForm";

const Auth = ({ children }) => {
  const 로그인함 = false

  if(!로그인함) {
    return <Navigate to="/todo-js/login" />
  }

  return children
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TodoLayout />}>
      <Route path="/todo-js" element={<Auth><TodoForm /></Auth>}>
        <Route path="/login" element={<Auth><LoginForm /></Auth>}/>
        <Route path="*" element={<Navigate to="/todo-js" />} />
      </Route>
      <Route path="*" element={<Navigate to="/todo-js/" />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
