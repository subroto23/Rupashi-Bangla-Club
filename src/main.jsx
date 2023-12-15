import React from "react";
import ReactDOM from "react-dom/client";

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
import CadaViews from "./Components/Cada Details/CadaViews";
import CardUpdate from "./Components/Admin/CadaUpdate/CadaUpdate";
import CadaUpdateForm from "./Components/Admin/CadaUpdate/CadaUpdateForm";
import TitleUpdate from "./Components/Title/TitleUpdate";
import TaitelPost from "./Components/Title/TitlePost";
import TitleUpdateForm from "./Components/Title/TitleUpdateForm";
import DueCreateForm from "./Components/Due/DuePost";
import DueViews from "./Components/Due/DueViews";
import AdminDueView from "./Components/Due/AdminDueView";
import DueUpdateForm from "./Components/Due/DueUpdateForm";
import AllNewsViews from "./Components/NewsViews/AllNewsViews";
import NewsUpdate from "./Components/AdminNews/NewsUpdate";
import NewsUpdateForm from "./Components/AdminNews/NewsUpdateForm";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// App.js
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
        path: "/news",
        element: <AllNewsViews />,
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
      {
        path: "/cada-views",
        element: (
          <PrivateRoute>
            <CadaViews />
          </PrivateRoute>
        ),
      },
      {
        path: "/due/views",
        element: (
          <PrivateRoute>
            <DueViews />,
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
        path: "/admin/cada-update",
        element: <CardUpdate />,
      },
      {
        path: "/admin/news",
        element: <CreatedNews />,
      },
      {
        path: "/admin/news/update",
        element: <NewsUpdate />,
      },
      {
        path: "/admin/title-post",
        element: <TaitelPost />,
      },
      {
        path: "/admin/title/title-update",
        element: <TitleUpdate />,
      },
      {
        path: "/admin/title/update/:id",
        element: <NewsUpdateForm />,
        loader: ({ params }) =>
          fetch(`https://rbc-server.vercel.app/api/news/${params.id}`),
      },
      {
        path: "/admin/title/title-update/:id",
        element: <TitleUpdateForm />,
        loader: ({ params }) =>
          fetch(`https://rbc-server.vercel.app/title/heading/${params.id}`),
      },
      {
        path: "/admin/due/post",
        element: <DueCreateForm />,
      },
      {
        path: "/admin/due/views",
        element: <AdminDueView />,
      },
      {
        path: "/admin/cada-update-form/:id",
        element: <CadaUpdateForm />,
        loader: ({ params }) =>
          fetch(`https://rbc-server.vercel.app/cada/details/${params.id}`),
      },
      {
        path: "/admin/due/update/:id",
        element: <DueUpdateForm />,
        loader: ({ params }) =>
          fetch(`https://rbc-server.vercel.app/due/details/${params.id}`),
      },
    ],
  },
  {
    path: "/news/views/:id",
    element: <NewsViews />,
    loader: ({ params }) =>
      fetch(`https://rbc-server.vercel.app/api/news/${params.id}`),
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
