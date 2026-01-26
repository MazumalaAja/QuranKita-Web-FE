// ===== Imports =====
import { useEffect, useState } from "react";
import Navbar from "../../components/navigations";
import { useLoaderData } from "react-router-dom";
import { post } from "../../../services/api";
import Selects from "../../components/select"

// ===== Navigation data =====
const navigation = [
     { label: "Al-Quran", icon: "journal", to: "/al-quran" },
     { label: "Waktu Sholat", icon: "time", to: "/waktu-sholat" },
];

// ===== Code =====
export default function SholatPage() {
     // ===== Loader data =====
     const loaderDataProvinsi = useLoaderData();

     // ===== Master Data =====
     const [masterProvinsi, setMasterProvinsi] = useState(loaderDataProvinsi.data);
     const [masterKabkota, setMasterKabkota] = useState([]);

     // ===== Filter Data =====
     const [listProvinsi, setListProvinsi] = useState(masterProvinsi)
     const [listKabkota, setListKabkota] = useState(masterKabkota)

     // ===== user Pick =====
     const [pick, setPick] = useState({
          provinsi: "",
          kabkota: ""
     })

     // ===== HandleClick =====
     function HandleClickProvinsi(value) {
          setPick(prev => ({ ...prev, provinsi: value }));
     }

     function HandleClickKabkota(value) {
          setPick(prev => ({ ...prev, kabkota: value }));
     }

     // ===== HandleChange =====
     function HandleChange(value) {
          if (value && value.trim()) {
               const filtered = masterProvinsi.filter(v => v.toLowerCase().includes(value.toLowerCase()));
               setListProvinsi(filtered.length > 0 ? filtered : ["Tidak Tersedia"]);
          } else {
               setListProvinsi(masterProvinsi);
          }
     }

     function HandleChange2(value) {
          if (value && value.trim()) {
               const filtered = masterKabkota.filter(v => v.toLowerCase().includes(value.toLowerCase()));
               setListKabkota(filtered.length > 0 ? filtered : ["Tidak Tersedia"]);
          } else {
               setListKabkota(masterKabkota);
          }
     }

     // ===== GetKabKota API =====
     async function getKabKota() {
          try {
               const response = await post("shalat/kabkota", { provinsi: pick.provinsi });
               console.log(response);
               setMasterKabkota(response.data);
               setListKabkota(response.data)
          } catch (err) {
               console.error(err);
          }
     }

     useEffect(() => {
          if (pick.provinsi != "") {
               getKabKota()
          }
     }, [pick.provinsi])

     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar data={navigation} />

               {/* ===== Main ===== */}
               <main className="min-h-screen py-20 p-3 bg-gray-950/30">
                    <div className="flex gap-2">
                         {/* ===== Provinsi ===== */}
                         <Selects icon={`map`} isReady={listProvinsi.length > 0} value={pick.provinsi} onChange={HandleChange} onCLick={HandleClickProvinsi} data={listProvinsi} title={`Provinsi`} />

                         {/* ===== KabKota ===== */}
                         <Selects icon={`map`} title={`Kabupaten & Kota`} isReady={listKabkota.length > 0} value={pick.kabkota} data={listKabkota} onCLick={HandleClickKabkota} onChange={HandleClickKabkota} />
                    </div>
               </main>

               {/* ===== Footer ===== */}
               <footer className="text-sm md:text-lg text-center text-gray-400 bg-gray-950 backdrop-blur-md border-t-2 border-gray-300/30 p-5">
                    <span>© {new Date().getFullYear()} Mazumala. Semua hak dilindungi.</span>
               </footer>
          </>
     );
}
