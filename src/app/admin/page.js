// "use client";
// import { Logo } from "@/app/_icons/Logo.js";
// import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
// import { TruckIcon } from "@/app/_icons/TruckIcon.js";
// import { useState } from "react";

// import { cn } from "@/lib/utils";

// import { useFoodCategory } from "../_provider/food-category";

// export default function Administrator() {
//   const [orders, setOrders] = useState(false);
//   const { categories, loading } = useFoodCategory();

//   const handleClickOrdersButton = () => {
//     setOrders(true);
//   };
//   const handleClickFoodMenuButton = () => {
//     setOrders(false);
//   };

//   return (
//     <div>
//       <div className="flex justify-center">
//         <div className="flex justify-center w-360 h-auto ">
//           <div className="flex flex-col w-[205px] h-256 px-5 pt-9 gap-10 ">
//             <div className="w-[146px] h-11 flex">
//               <div className="w-22 flex justify-center">
//                 <Logo className="w-[46px] h-[37.29px]" />
//               </div>
//               <div className="flex flex-col ">
//                 <div className="flex font-semibold text-5 justify-center">
//                   NomNom
//                 </div>
//                 <div className="font-normal text-[12px] text-[#71717A] w-22 flex justify-center">
//                   Swift delivery
//                 </div>
//               </div>
//             </div>
//             <div className="w-[165px] h-26 flex flex-col gap-6">
//               <button
//                 className={cn(
//                   "w-[165px] h-10 bg-[#18181B] rounded-full flex gap-2.5 py-2.5 px-6 items-center"
//                   //   !orders
//                   // ? "bg-[#09090B] text-white"
//                   // : "bg-white text-[#09090B] border-none"
//                 )}
//                 onClick={handleClickFoodMenuButton}
//               >
//                 <DashboardIcon />
//                 <p className="text-[#FAFAFA] text-[14px]">Food menu</p>
//               </button>
//               <div
//                 className="w-[165px] h-10 py-[9px] flex pl-6 gap-2.5"
//                 onClick={() => router.push("/admin/orders")}
//               >
//                 <TruckIcon />
//                 <p>Orders</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col pt-6 pl-6 pr-10 w-[1235px]  bg-[#F4F4F5CC] gap-6"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
