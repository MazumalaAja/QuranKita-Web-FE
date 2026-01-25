import { useState } from "react"

// ===== Code =====
export default function Selects({ data, text = "Choose your own...", icon, label = "Title", onChange, onClick, value }) {
     const [open, setOpen] = useState(false)
     return (
          <>
               <div className=" bg-gray-950/30 backdrop-blur-md h-max w-max p-2 rounded-md  flex gap-2 flex-col">
                    {/* ===== Titile ===== */}
                    <div className="bg-indigo-500/10 flex gap-2 justify-center items-center text-indigo-300 border-indigo-300/20 border text-center p-0.5 rounded-full">
                         {icon && <i className={`bi bi-${icon} text-xl`}></i>}
                         <h2>{label}</h2>
                    </div>

                    {/* ===== Input Text (Searh) ===== */}
                    <div className="border focus-within:bg-gray-600/30 border-gray-400/20 p-2 rounded-md flex gap-2 items-center">
                         <input value={value} onChange={(e) => {
                              setOpen(true)
                              onChange(e.target.value)
                         }} className="text-gray-300 flex-1 px-2 text-sm focus:outline-0" placeholder={text} type="text" />
                         <i onClick={() => setOpen(!open)} className={`bi bi-chevron-left ${open ? `-rotate-90` : `rotate-0`} duration-150 text-indigo-300 border border-indigo-300/20 cursor-pointer bg-indigo-600/20 hover:bg-indigo-600/30 px-1 rounded-full`}></i>
                    </div>

                    {/* ===== Option ===== */}
                    <ul className={`bg-indigo-600/10 duration-150 overflow-scroll rounded-md ${open ? `h-52` : `h-0`}`}>
                         {data && data.map((v, i) => (
                              <li onClick={() => {
                                   onClick(v)
                                   setOpen(false)
                              }} className="p-2 cursor-pointer text-indigo-300 hover:text-indigo-100 hover:bg-indigo-400/50" key={i}>{v}</li>
                         ))}
                    </ul>
               </div>
          </>
     )
}