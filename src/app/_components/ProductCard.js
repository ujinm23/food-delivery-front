export function ProductCard({ imageURL, name, price, ingredients }) {
  return (
    <div className="w-[270.75px] h-[241px] border-[#E4E4E7] border rounded-[20px] bg-white p-4 flex flex-col gap-5">
      <div
        className="w-[238.75px] h-[129px] rounded-xl bg-cover "
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="w-[238.75px] h-20 flex flex-col gap-2">
        <div className="flex justify-between h-5 items-center ">
          <p className="text-[14px] text-[#EF4444] font-medium">{name}</p>
          <p className="text-[12px] font-normal">${price}</p>
        </div>
        <p className="text-[12px] text-black font-normal h-10">{ingredients}</p>
      </div>
    </div>
  );
}
