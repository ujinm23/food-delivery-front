export function CategoryButton({ title, count = 0 }) {
  return (
    <div className="py-2 px-4 h-9 w-fit rounded-full border border-[#E4E4E7] flex gap-2 ">
      <p className="font-medium text-[14px] leading-5 title whitespace-nowrap ">
        {title}
      </p>
      <div className="px-2.5 py-0.5 rounded-full bg-[#18181B] text-white flex justify-center items-center text-[12px] font-normal">
        {count}
      </div>
    </div>
  );
}
