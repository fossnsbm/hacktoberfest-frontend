import { createBrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages";
import LeaderBoard from "./pages/LeaderBoard";
import { DetailsPage } from "./pages/details";
import { PageNotFound } from "./pages/_404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
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
    path: "/profile/:id",
    element: (
      <MainLayout>
        <DetailsPage />
      </MainLayout>
    ),
  },

  {
    path: "/leaderBoard",
    element: (
      <MainLayout>
        <LeaderBoard />
      </MainLayout>
    ),
  },

  {
    path: "/*",
    element: (
      <MainLayout>
        <PageNotFound />
      </MainLayout>
    ),
  },
]);
