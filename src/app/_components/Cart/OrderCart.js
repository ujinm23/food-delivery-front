"use client";

import { OrderLine } from "@/app/_icons/OrderLine";
import {
  IceCreamBowl,
  ListOrderedIcon,
  MapIcon,
  TimerIcon,
} from "lucide-react";

export function OrderCart({ orders }) {
  console.log("ORDERS IN OrderCart:", orders);

  return (
    <div className="bg-white w-117.75 p-4 gap-5 rounded-xl">
      <h2 className="text-[20px] font-semibold text-black mb-4">
        Order history
      </h2>

      {orders.map((order, index) => (
        <div key={order._id} className="px-4">
          <div className="flex justify-between">
            <p className="text-black font-semibold">${order.totalPrice}</p>
            <p className="text-black"> {order.shortCode} </p>
            <p className="text-[12px] px-2.5 py-1.5 border border-red-600 rounded-full ">
              {order.status}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 text-[12px]">
            <div className="mt-2 flex flex-col">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center"
                >
                  <div key={item._id} className=" text-[#71717A] flex gap-2">
                    <IceCreamBowl className="w-4 h-4 " />
                    <p>{item.name}</p>
                  </div>
                  <p className="text-black text-[12px]">x {item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 text-[#71717A] items-center">
              <MapIcon className="w-4 h-4 " />
              <p>{order.location}</p>
            </div>
            <div className="flex gap-2 text-[#71717A] items-center">
              <TimerIcon className="w-4 h-4 " />
              <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Line between orders, but not after the last one */}
          {index < orders.length - 1 && (
            <hr className="border-dashed border-gray-300 my-4" />
          )}
        </div>
      ))}
    </div>
  );
}
