export function ProductCard() {
  return (
    <div className="w-[270.75px] h-[241px] border-[#E4E4E7] border rounded-[20px] bg-white p-4 flex flex-col gap-5">
      <div className="w-[238.75px] h-[129px] rounded-xl bg-black"></div>
      <div className="w-[238.75px] h-20 flex flex-col gap-2">
        <div className="flex justify-between h-5 items-center ">
          <p className="text-[14px] text-[#EF4444] font-medium">
            Product Header
          </p>
          <p className="text-[12px] font-normal">$12.99</p>
        </div>
        <p className="text-[12px] font-normal h-10">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
}
// export function ProductCard() {
//   return (
//     <div className="w-[270.75px] h-[241px] border-[#E4E4E7] rounded-[20px] bg-white p-4 flex flex-col gap-2.5">
//       <div className="w-[365px] h-[210px] bg-black"></div>
//       <div className="w-[365px] h-20 flex flex-col gap-2">
//         <div className="flex justify-between h-8 items-center">
//           <p className="text-[24px] text-[#EF4444] font-semibold">
//             Product Header
//           </p>
//           <p className="text-[18px]font-semibold">$12.99</p>
//         </div>
//         <p className="text-[14px] font-normal h-10">
//           Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
//         </p>
//       </div>
//     </div>
//   );
// }
