import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/button.css";
import "./styles/backgrounds.css";
import "./styles/bluecard.css";
import "./styles/team.css";
import "./styles/computer.css";
import "./styles/keyframes.css";
import "./styles/base.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/LeaderBoard.css";

import MainLayout from "./layouts/MainLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
