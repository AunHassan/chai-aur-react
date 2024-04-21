import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "../src/Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // Default route for home page
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "User/:userId",
        element: <User />,
      },
      {
        path: "Github",
        element: <Github />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   <Routes>
//     <Route id="/" element={<Layout />}>
//       <Route id="" element={<Home />} />
//       <Route id="About" element={<About />} />
//       <Route id="Contact" element={<Contact />} />
//     </Route>
//   </Routes>
//   )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
