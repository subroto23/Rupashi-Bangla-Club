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
import FestivalForm from "./Components/FetivalForm/FestivalForm";
import CreatedNews from "./Components/NewsForm/CreatedNews";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import PrivateRoute from "./Components/ProtectedRouting/PrivateRoute";
import JurnalistRoute from "./Components/JurnalistRoute/JurnalistRoute";
import Admin from "./Pages/Admin/Admin";
import CadaForm from "./Components/CadaForm/CadaForm";
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
      {
        path: "/profile",
        element: <ProfileDetils />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/reset",
        element: <ResetPassword />,
      },
      {
        path: "/festive",
        element: (
          <PrivateRoute>
            <FestivalForm />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <JurnalistRoute>
        <Admin />
      </JurnalistRoute>
    ),
    children: [
      {
        path: "/admin/cadaform",
        element: <CadaForm />,
      },
      {
        path: "/admin/news",
        element: <CreatedNews />,
      },
    ],
  },
  {
    path: "/news/views/:id",
    loader: ({ params }) =>
      fetch(`https://rbcwebsite.onrender.com/api/news/${params.id}`),
    element: (
      <PrivateRoute>
        <NewsViews />
      </PrivateRoute>
    ),
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
