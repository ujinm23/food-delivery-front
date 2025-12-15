"use client";
import { Checkbox } from "@/components/ui/checkbox";

export function OrderContainer() {
  return (
    <div className=" w-[1171px] h-14 flex pl-4 py-5 pr-10.5 items-center">
      <div className="w-12 flex justify-center ">
        <Checkbox />
      </div>
      <div className="w-14 flex justify-center ">
        <p>#</p>
      </div>
      <div className="w-[213.5px] flex ">Customer</div>
      <div className="w-40 flex justify-center ">Food</div>
      <div className="w-14 flex justify-center ">Date</div>
      <div className="w-14 flex justify-center ">Total</div>
      <div className="w-[213.5px] flex ">Delivery address</div>
      <div className="w-14 flex justify-center ">Delivery state</div>
    </div>
  );
}
