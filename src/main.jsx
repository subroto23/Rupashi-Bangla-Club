import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderHeroSection from "./Pages/HederHeroSection/HeaderHeroSection";
import ErrorPages from "./Components/ErrorPage/ErrorPages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderHeroSection />,
    errorElement: <ErrorPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
