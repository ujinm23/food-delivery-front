"use client";
import { CalendarIcon } from "@/app/_icons/CalendarIcon.js";
import { Logo } from "@/app/_icons/Logo.js";
import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
import { TruckIcon } from "@/app/_icons/TruckIcon.js";
import { useRouter } from "next/navigation";
import { BlackMenuIcon } from "@/app/_icons/BlackMenuIcon.js";
import { OrderContainer } from "@/app/_components/OrderContainer";

export default function AdminOrders() {
  const router = useRouter();

  return (
    <div className="flex flex-col  bg-[#F4F4F5CC] gap-6">
      <div className=" h-44 flex flex-col w-292.75 bg-white rounded-xl p-6 gap-4">
        <p className="font-semibold text-[20px]">Orders</p>

        <div className="w-74 h-9 rounded-border border-[#E4E4E7] px-4 py-2 flex">
          <CalendarIcon />
          <p className="text-[14px] font-normal">13 June 2023 - 14 July 2023</p>
        </div>
        <div className="bg-[#18181B] w-[179px] h-9 rounded py-2 px-4">
          Change delivery state
        </div>
      </div>
    </div>
  );
}
