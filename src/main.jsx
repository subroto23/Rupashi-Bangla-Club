import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderHeroSection from "./Pages/HederHeroSection/HeaderHeroSection";
import ErrorPages from "./Components/ErrorPage/ErrorPages";
import NewsViews from "./Components/NewsViewShow/NewsViews";
import Root from "./Components/Root/Root";
import LogInForm from "./Components/LogInForm/LogInForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <HeaderHeroSection />,
      },
      {
        path: "/login",
        element: <LogInForm />,
      },
    ],
  },
  {
    path: "/news/views/:id",
    loader: ({ params }) =>
      fetch(`https://api.npoint.io/07b1fa8c1567c93fd234/${Number(params.id)}`),
    element: <NewsViews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
