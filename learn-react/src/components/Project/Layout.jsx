import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import UserContextProvider from "../../Contexts/UserContextProvider";
import Login from "../ContextComponents/Login";
import Profile from "../ContextComponents/Profile";
import { ThemeProvider } from "../../Contexts/ThemeContext";
import ThemeBtn from "../ThemeComponents/ThemeBtn";
import Card from "../ThemeComponents/Card";
import { TodoProvider } from "../../Contexts/TodoContext";
import TodoForm from "../TodoComponents/TodoForm";
import TodoItem from "../TodoComponents/TodoItem";
import AddTodo from "../TodoReduxComponents/AddTood";
import Todos from "../TodoReduxComponents/Todos";
import { Provider } from "react-redux";
import { store } from "../../app/store";

function Layout() {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
    setThemeMode((prev) => (prev == "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const classList = document.querySelector("html").classList;
    classList.remove("light", "dark");
    classList.add(themeMode);
  }, [themeMode]);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => (item.id == id ? todo : item)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id != id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    if (todos && todos?.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [editTodo, setEditTodo] = useState(null);
  const clearEdit = () => setEditTodo(null);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <ThemeProvider value={{ themeMode, toggleTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

      {/* Todo App */}
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {" "}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((t, index) => (
                <div key={t.id} className="w-full">
                  {" "}
                  <TodoItem todo={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
      <Provider store={store}>
        <AddTodo editTodo={editTodo} clearEdit={clearEdit} />
        <Todos setEditTodo={setEditTodo} />
      </Provider>
    </>
  );
}

export default Layout;
