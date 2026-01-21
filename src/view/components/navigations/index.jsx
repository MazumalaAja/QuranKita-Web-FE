// ===== Imports =====
import { NavLink } from "react-router-dom"
import "../../../assets/css/navbar.css"

// ===== Code =====
export default function Navbar() {
     return (
          <header className="navbar">
               {/* ===== Logo ===== */}
               <div className="text-xl font-medium text-gray-300 flex gap-2 items-center">
                    <i className="bi bi-journal"></i>
                    <h1>QuranKita.</h1>
               </div>

               {/* ===== Link ===== */}
               <nav className="flex gap-3">
                    <Links to={`/`} label={`Beranda`} icon={`house`} />
                    <Links to={`/kontak`} label={`Kontak Saya`} icon={`envelope`} />
               </nav>
          </header>
     )
}

// ===== Links component ====
function Links({ label, icon, to }) {
     return (
          <NavLink className={({ isActive }) => `${isActive ? `bg-gray-300/10 text-gray-100 border border-gray-300/30` : `text-gray-400`}  flex ite hover:text-gray-100 gap-1 py-0.5 px-4 rounded-full`} to={to}>
               {icon && <i className={`bi bi-${icon}`}></i>}
               <span>{label}</span>
          </NavLink>
     )
}