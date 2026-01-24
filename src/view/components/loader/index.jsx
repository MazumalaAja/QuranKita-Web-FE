// ===== Code =====
export default function Loading() {
     return (
          <div className="fixed top-0 left-0 flex justify-center gap-3 items-center flex-col right-0 z-99999 bottom-0 backdrop-blur-sm bg-gray-950/30">
               <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div
                         className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                         <div
                              className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                         ></div>
                    </div>
               </div>

               <div>
                    <span className="text-center text-gray-300">Tunggu Sebentar...</span>
               </div>
          </div>
     )
}