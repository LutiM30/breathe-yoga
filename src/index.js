import React from "react";
import ReactDOM from "react-dom/client";
import "assets/css/home.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Instructor from "pages/Instructor";
import Packages from "pages/Packages";
import Contact from "pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/instructor",
    element: <Instructor />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
