import { Logo } from "@/app/_icons/Logo.js";
export function Footer() {
  return (
    <div className="w-auto h-[755px] bg-black">
      <div className="w-auto h-15 bg-black"></div>
      <div className="w-auto h-[92px] bg-[#EF4444]"></div>
      <div className="w-auto h-[92px] px-22 pb-[111px] pt-[76px] flex flex-col gap-26 items-center">
        <div className="w-316 h-57 flex gap-28">
          <div className="gap-55 flex">
            <div className="w-22 h-23 flex flex-col">
              <div className="w-22 flex justify-center">
                <Logo className="w-[46px] h-[37.29px]" />
              </div>

              <div className="flex flex-col ">
                <div className="flex font-semibold text-5 justify-around">
                  <h4 className="text-white">Nom</h4>
                  <h4 className="text-[#EF4444]">Nom</h4>
                </div>
                <div className="font-normal text-[12px] text-white w-22 flex justify-center">
                  {" "}
                  Swift delivery
                </div>
              </div>
            </div>
            <div className="h-37 w-[122px] flex flex-col gap-4 text-white">
              <p className="text-[#71717A]">NOMNOM</p>
              <p>Home</p>
              <p>Contact us</p>
              <p>Delivery zone</p>
            </div>
            <div className="w-80 h-57 flex gap-14">
              <div className="w-33 h-57 flex flex-col text-white gap-4">
                <p className="text-[#71717A]">MENU</p>
                <p>Appetizers</p>
                <p>Salads</p>
                <p>Pizzas</p>
                <p>Main dishes</p>
                <p>Desserts</p>
              </div>
              <div className="w-33 h-57 flex flex-col pt-11 gap-4 text-white">
                <p>Side dish </p>
                <p>Brunch</p>
                <p>Desserts</p>
                <p>Beverages</p>
                <p>Fish & Sea foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
