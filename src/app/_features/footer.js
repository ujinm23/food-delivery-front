import { Logo } from "@/app/_icons/Logo.js";
import { FacebookLogo } from "../_icons/FacebookLogo";
import { InstagramLogo } from "../_icons/InstagramLogo";
export function Footer() {
  return (
    <div className="w-auto h-[755px] bg-[#18181B] flex flex-col pt-15 pb-[111px]">
      <div className="w-auto h-[92px] bg-[#EF4444] flex text-white pl-[98px] font-semibold text-[30px] gap-[34px] overflow-hidden items-center">
        <div className="flex gap-[34px] whitespace-nowrap ">
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
          <h2>Fresh fast delivered </h2>
        </div>
      </div>
      <div className="flex flex-col items-center w-auto h-128 gap-46 ">
        <div className="w-316 h-57 px-22 pb-[111px] pt-[76px] flex flex-col gap-26 items-center">
          <div className="w-316 h-57 flex gap-28">
            <div className="gap-55 flex">
              <div className="w-22 h-23 flex flex-col">
                <div className="w-22 flex justify-center">
                  <Logo className="w-[46px] h-[37.29px]" />
                </div>

                <div className="flex flex-col ">
                  <div className="flex font-semibold text-5 justify-center">
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
              <div className="w-[122px] h-7 flex flex-col gap-4">
                <p className="text-[#71717A]">FOLLOW US</p>
                <div className="flex gap-4">
                  <FacebookLogo />
                  <InstagramLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-316 h-21 flex gap-12 items-center text-[#71717A] border-t border-t-[#F4F4F566] text-[14px] font-normal ">
          <p>Copy right 2024 © Nomnom LLC</p>
          <p>Privacy policy </p>
          <p>Terms and condition</p>
          <p>Cookie policy</p>
        </div>
      </div>
    </div>
  );
}
