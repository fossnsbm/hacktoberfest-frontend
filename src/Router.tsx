import { createBrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import FooterSection from "./components/FooterSection"
import RegisterPage from "./pages/register";
import HomePage from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <RegisterPage />
        <FooterSection/>
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
]);
