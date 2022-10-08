import { createBrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import Leaderboard from "./pages/Leaderboard";
import { DetailsPage } from "./pages/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>

        <RegisterPage />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },

  
  {
    path: "/home",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/leaderboard",
    element: (
      <MainLayout>
        <Leaderboard />
      </MainLayout>
    ),
  },

  {
    path: "/profile/:id",
    element: (
      <MainLayout>
        <DetailsPage />
      </MainLayout>
    ),
  },
]);
