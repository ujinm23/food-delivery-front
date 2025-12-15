"use client";
import { CalendarIcon } from "@/app/_icons/CalendarIcon.js";
import { Logo } from "@/app/_icons/Logo.js";
import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
import { TruckIcon } from "@/app/_icons/TruckIcon.js";
import { useRouter } from "next/navigation";
import { BlackMenuIcon } from "@/app/_icons/BlackMenuIcon.js";
import { OrderContainer } from "@/app/_components/OrderContainer";

export default function Orders() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex w-360 h-auto ">
        <div className="flex ">
          <div className="flex justify-center  h-256">
            <div className="flex flex-col justify-center w-[205px] h-256">
              <div className="flex flex-col w-[205px] h-256 px-5 pt-9 gap-10 ">
                <div className="w-[146px] h-11 flex">
                  <div className="w-22 flex justify-center">
                    <Logo className="w-[46px] h-[37.29px]" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex font-semibold text-5 justify-center">
                      NomNom
                    </div>
                    <div className="font-normal text-[12px] text-[#71717A] w-22 flex justify-center">
                      Swift delivery
                    </div>
                  </div>
                </div>
                <div className="w-[165px] h-26 flex flex-col gap-6">
                  <div
                    className="w-[165px] h-10 py-[9px] flex pl-6 gap-2.5"
                    onClick={() => router.push("/admin/detail-manage")}
                  >
                    <BlackMenuIcon />
                    <p>Food menu</p>
                  </div>
                  <div className=" w-[165px] h-10 bg-[#18181B] rounded-full flex gap-2.5 py-2.5 px-6 items-center">
                    <TruckIcon />
                    <p className="text-[#FAFAFA] text-[14px]">Orders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[1235px] h-360 bg-[#F4F4F5CC] py-4">
               
               {/* <div className="flex flex-col w-[1171px] h-237 bg-[#E4E4E7]">
                <div className="bg-black rounded-full"></div>
                <div className="flex w-[1171px] h-237 bg-[#E4E4E7]">
                  <div className="flex p-4 justify-between h-11 w-[485px]">
                    <div className="flex flex-col">
                      <p className="text-[20px] font-bold">Orders</p>
                      <div className="text-[#71717A] text-[12px] font-medium flex">
                        <p></p>
                        <p>items</p>
                      </div>
                    </div>
                    <div className="w-[491px] h-9 flex gap-3">
                      <div className="w-74 h-9 rounded-border border-[#E4E4E7] px-4 py-2 flex">
                        <CalendarIcon />
                        <p className="text-[14px] font-normal">
                          13 June 2023 - 14 July 2023
                        </p>
                      </div>
                      <div className="bg-[#18181B] w-[179px] h-9 rounded py-2 px-4">
                        Change delivery state
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4 justify-between h-13 w-[485px] bg-[#F4F4F5CC]"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
