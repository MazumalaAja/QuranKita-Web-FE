// ===== Imports =====
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../navigations";
import Loading from "../loader";

// ===== Code =====
export default function LayoutPage() {
     // ===== Status Navigation =====
     const navigation = useNavigation();
     return (
          <div className="bg-main w-full min-h-screen  bg-gray-900">
               {/* ===== Loading ===== */}
               {navigation.state === "loading" && <Loading />}

               {/* ===== Place for the children */}
               <Outlet />

          </div>
     )
}