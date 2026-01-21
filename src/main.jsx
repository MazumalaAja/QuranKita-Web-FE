// ===== Imports =====
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./view/routes";
import "./assets/fonts/index.js"
import "./assets/icons/index.js"
import "./assets/css/app.css";
import "./assets/css/main.css";

// ===== Code =====
createRoot(document.getElementById("root")).render(
     <StrictMode>
          <RouterProvider router={router} />
     </StrictMode>
);