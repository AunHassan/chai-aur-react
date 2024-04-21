import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default Layout;
