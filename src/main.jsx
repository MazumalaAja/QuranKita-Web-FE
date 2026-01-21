// ===== Imports =====
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./view/routes";
import "./assets/css/app.css";

// ===== Code =====
createRoot(document.getElementById("root")).render(
     <StrictMode>
          <RouterProvider router={router} />
     </StrictMode>
);