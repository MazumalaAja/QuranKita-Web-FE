// ===== Imports =====
import { Outlet } from "react-router-dom";

// ===== Code =====
export default function LayoutPage() {
     return (
          <>
               {/* ===== Place for the children */}
               <Outlet />
          </>
     )
}