import { useState } from "react";
import "./App.css";
import { Footer, Header, Home } from "./Components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
