import { Logo } from "@/app/_icons/Logo.js";
export function LogoVertical() {
  return (
    <div className="w-[146px] h-11 flex">
      <div className="w-22 flex justify-center">
        <Logo className="w-[46px] h-[37.29px]" />
      </div>
      <div className="flex flex-col ">
        <div className="flex font-semibold text-5 justify-center">
          <h4 className="text-white">Nom</h4>
          <h4 className="text-[#EF4444]">Nom</h4>
        </div>
        <div className="font-normal text-[12px] text-white w-22 flex justify-center">
          Swift delivery
        </div>
      </div>
    </div>
  );
}
