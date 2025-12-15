export function ProductCard1({ imageURL, name, price, ingredients }) {
  return (
    <div className="w-[397.33px] h-85.5 border-[#E4E4E7] border rounded-[20px] bg-white p-4 flex flex-col gap-5">
      <div
        className="w-[365.33px] h-52.5 rounded-xl bg-cover "
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="w-[365.33px] h-20 flex flex-col gap-2">
        <div className="flex justify-between h-5 items-center ">
          <p className="text-[24px] text-[#EF4444] font-semibold">{name}</p>
          <p className="text-[18px] font-semiboldl">${price}</p>
        </div>
        <p className="text-[14px] text-black font-normal h-10">{ingredients}</p>
      </div>
    </div>
  );
}
