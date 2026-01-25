// ===== Imports =====
import { get, getDetail } from "../api";

// ===== getSurah =====
async function getSurah(path) {
     try {
          // await new Promise(r => setTimeout(r, 800)); // DEBUG
          const cacheSurah = JSON.parse(localStorage.getItem("surah"));
          if (cacheSurah) {
               if (cacheSurah.expireAt > Date.now()) {
                    return cacheSurah.data.data;
               } else {
                    const response = await get(path);
                    localStorage.setItem("surah", JSON.stringify({
                         data: response,
                         expireAt: Date.now() + (1000 * 60 * 2)
                    }));
                    return response.data;
               }
          } else {
               const response = await get(path);
               localStorage.setItem("surah", JSON.stringify({
                    data: response,
                    expireAt: Date.now() + (1000 * 60 * 2)
               }));
               return response.data;
          }
     } catch (err) {
          localStorage.removeItem("surah");
          throw new Error("Fetching data gagal : " + err);
     }
}

// ===== getDetailSurah =====
async function getDetailSurah(path, id) {
     try {
          // await new Promise(r => setTimeout(r, 800)); // DEBUG
          const cacheSurah = JSON.parse(localStorage.getItem(`surah-${id}`));
          if (cacheSurah) {
               if (cacheSurah.expireAt > Date.now()) {
                    return cacheSurah.data.data;
               } else {
                    console.log("Data cache sudah expire dan melakukan fetch baru");
                    const response = await getDetail(path, id);
                    localStorage.setItem(`surah-${id}`, JSON.stringify({
                         data: response,
                         expireAt: Date.now() + (1000 * 60 * 30)
                    }));
                    return response.data;
               }
          } else {
               console.log("Initial fetch dan membuat cache");
               const response = await getDetail(path, id);
               console.log(response.data.data);
               localStorage.setItem(`surah-${id}`, JSON.stringify({
                    data: response,
                    expireAt: Date.now() + (1000 * 60 * 30)
               }));
               return response.data;
          }
     } catch (err) {
          localStorage.removeItem(`surah-${id}`);
          throw new Error("Fetching data gagal : " + err);
     }
}

// ===== getProvinsi =====
async function getProvinsi(path) {
     try {
          const cacheProvinsi = JSON.parse(localStorage.getItem("provinsi"));
          if (cacheProvinsi) {
               if (cacheProvinsi.expireAt > Date.now()) {
                    return cacheProvinsi.data;
               } else {
                    const response = await get(path);
                    localStorage.setItem("provinsi", {
                         data: response,
                         expireAt: Date.now() + (1000 * 60 * 30)
                    });
                    return response.data;
               }
          } else {
               const response = await get(path);
               localStorage.setItem("provinsi", JSON.stringify({
                    data: response,
                    expireAt: Date.now() + (1000 * 60 * 30)
               }));
               return response.data;
          }
     } catch (err) {
          localStorage.removeItem("provinsi")
          throw new Error(err);
     }
}


export { getSurah, getDetailSurah, getProvinsi }
