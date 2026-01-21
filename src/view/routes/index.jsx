// ===== Imports =====
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../components/layouts";
import { HomePage, QuranPage, SholatPage } from "../pages";

// ===== Code =====
const router = createBrowserRouter([
     {
          path: "/",
          element: <LayoutPage />,
          children: [
               { index: true, element: <HomePage /> },
               { path: "al-quran", element: <QuranPage /> },
               { path: "waktu-sholat", element: <SholatPage /> }
          ]
     }
])

// ===== Export =====
export default router;