// ===== Imports =====
import png_1 from "../../../assets/images/png/404.png"

// ===== Code =====
export default function ErrorPage() {
     return (
          <div className="bg-gray-900 min-h-screen w-full flex justify-center items-center">
               <img className="w-full max-w-3xl" src={png_1} alt="" />
          </div>
     )
}