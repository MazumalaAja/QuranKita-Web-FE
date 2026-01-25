// ===== Imports =====
import { useEffect, useState } from "react";
import Navbar from "../../components/navigations";
import Selects from "../../components/select";
import { useLoaderData } from "react-router-dom";
import { post } from "../../../services/api";

// ===== Navigation data =====
const navigation = [
     { label: "Al-Quran", icon: "journal", to: "/al-quran" },
     { label: "Waktu Sholat", icon: "time", to: "/waktu-sholat" },
]

// ===== Code =====
export default function SholatPage() {
     // ===== States =====
     const dataProvinsi = useLoaderData() ?? [];
     const [provinsi, setProvinsi] = useState(dataProvinsi.data)
     const [kabKota, setKabKota] = useState([])
     const [pick, setPick] = useState({
          kabKota: "",
          provinsi: "",
     });

     // ===== Get API KabKota =====
     async function getApiKabKota() {
          try {
               const response = await post(`shalat/kabkota`, { provinsi: pick.provinsi });
               setKabKota(response.data)
          } catch (err) {
               throw new Error(err);
          }
     }

     // ===== Handle
     function handlePickProvinsi(e) {
          setPick(prev => ({ ...prev, provinsi: e }))
     }

     function handleKabKota(e) {
          setPick(prev => ({ ...prev, kabKota: e }))
     }

     function handleChangeProvinsi(value) {
          setPick(prev => ({ ...prev, provinsi: value }));
          if (value.trim()) {
               const result = provinsi.filter(v => v.toLowerCase().includes(value.toLowerCase()));
               setProvinsi(result ? result : ["Tidak tersedia"]);
          } else {
               setProvinsi(dataProvinsi.data)
          }
     }

     useEffect(() => {
          if (pick.provinsi.trim()) {
               getApiKabKota()
          }
     }, [pick.provinsi])
     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar data={navigation} />

               {/* ===== Main ===== */}
               <main className="min-h-screen py-20 p-3 bg-gray-950/30">
                    {/* ===== Select ===== */}
                    <div className="flex gap-3">
                         {/* ===== Provinsi ====== */}
                         <Selects onChange={handleChangeProvinsi} onClick={handlePickProvinsi} value={pick.provinsi} data={provinsi} label={`Provinsi`} icon={`geo-alt`} />

                         {/* ===== Kabupaten ====== */}
                         <Selects onChange={() => console.log("anjay")} onClick={handleKabKota} value={pick.kabKota} data={kabKota} label={`Kabupaten & Kota`} icon={`building`} />
                    </div>
               </main>

               {/* ===== Footer ===== */}
               <footer className="text-sm md:text-lg text-center text-gray-400 bg-gray-950 backdrop-blur-md border-t-2 border-gray-300/30 p-5">
                    <span>© {new Date().getFullYear()} Mazumala. Semua hak dilindungi.</span>
               </footer>
          </>
     )
}