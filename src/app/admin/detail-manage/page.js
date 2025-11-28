"use client";
import { Logo } from "@/app/_icons/Logo.js";
import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
import { TruckIcon } from "@/app/_icons/TruckIcon.js";
import { useState } from "react";
import Image from "next/image";

const UPLOAD_PRESET = "food-delivery";
const CLOUD_NAME = "di7kfwrvb";

export default function DetailManage() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-360 h-256 ">
        <div className="flex flex-col w-[205px] h-256 px-5 pt-9 gap-10">
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
            <div className="w-[165px] h-10 bg-[#18181B] rounded-full flex gap-2.5 py-2.5 px-6 items-center">
              <DashboardIcon />
              <p className="text-[#FAFAFA] text-[14px]">Food menu</p>
            </div>
            <div className="w-[165px] h-10 py-[9px] flex pl-6 gap-2.5">
              <TruckIcon />
              <p>Orders</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 pl-6 pr-10 w-[1235px] h-360 bg-[#F4F4F5CC] gap-6">
          <div className="w-[1171px] h-59 flex flex-col gap-6 items-end justify-between">
            <div className="bg-black rounded-full w-9 h-9"></div>
            <div className="w-[1171px] h-44 flex flex-col gap-4 bg-white rounded-xl p-6">
              <p className="font-semibold text-[20px]">Dishes category</p>
              <div className="w-[1123px] h-21 flex "></div>
            </div>
          </div>
          <div className="w-[1171px] h-185">
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                disabled={uploading}
                className="mb-4 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
