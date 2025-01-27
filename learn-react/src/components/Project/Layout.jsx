import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import UserContextProvider from "../../Contexts/UserContextProvider";
import Login from "../ContextComponents/Login";
import Profile from "../ContextComponents/Profile";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default Layout;
