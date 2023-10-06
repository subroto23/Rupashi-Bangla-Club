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
import AuthProvider from "./Components/AuthContext/AuthContext.config";
import SignUp from "./Components/SignUp/SignUp";
import ProfileDetils from "./Components/ProfileDetils/ProfileDetils";
import AddUser from "./Components/AddUserByLogIn/AddUser";
import FestivalForm from "./Components/FetivalForm/FestivalForm";
import CreatedNews from "./Components/NewsForm/CreatedNews";
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogInForm />,
      },
      {
        path: "/profile",
        element: <ProfileDetils />,
      },
      {
        path: "/add",
        element: <AddUser />,
      },
      {
        path: "/festive",
        element: <FestivalForm />,
      },
      {
        path: "/news",
        element: <CreatedNews />,
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
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
