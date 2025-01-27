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
    </>
  );
}

export default Layout;
