export function ProductCard() {
  return (
    <div className="w-100 h-[342px] rounded-[20px] bg-white p-4 flex flex-col gap-2.5">
      <div className="w-[365px] h-[210px] bg-black"></div>
      <div className="w-[365px] h-20 flex flex-col gap-2">
        <div className="flex justify-between h-8 items-center">
          <p className="text-[24px] text-[#EF4444] font-semibold">
            Product Header
          </p>
          <p className="text-[18px]font-semibold">$12.99</p>
        </div>
        <p className="text-[14px] font-normal h-10">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
}
