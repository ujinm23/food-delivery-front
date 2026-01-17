"use client";

import { Logo } from "@/app/_icons/Logo.js";
import { useCart } from "@/app/_context/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
import { TruckIcon } from "@/app/_icons/TruckIcon.js";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "../_icons/ShoppingCartIcon";
import { ShoppingCart } from "../_components/Cart/ShoppingCart";
import { OrderCart } from "../_components/Cart/OrderCart";
import { WhiteShoppingCart } from "../_icons/WhiteShoppingCart";
import { X } from "lucide-react";
import DetailManage from "./_features/details";
import AdminOrders from "./_features/adminOrder";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);

  const tabs = [
    { id: "tab1", label: "Food menu" },
    { id: "tab2", label: "Orders" },
  ];

  const tabContent = {
    tab1: <DetailManage />,
    tab2: <AdminOrders />,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:999/order", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("ORDERS FROM API:", res.data);

        // 🔴 THIS LINE DEPENDS ON BACKEND RESPONSE
        setOrders(res.data); // OR res.data.orders
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-360 h-auto ">
        <div className="flex flex-col w-51.25 px-5 py-9 gap-10 items-center">
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
            <div className="w-41.25 h-26 flex flex-col gap-6">
              {/* <div className="w-[165px] h-10 bg-[#18181B] rounded-full flex gap-2.5 py-2.5 px-6 items-center"> */}
              <div className="flex flex-col gap-2  py-2.5  rounded-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-1 h-10 w-41.25 rounded-full h-9 ${
                      activeTab === tab.id
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 pl-6 pr-10 bg-[#F4F4F5CC] gap-6 items-end">
          <div className="bg-black rounded-full w-9 h-9"></div>

          {/* Tab content */}
          <div className="flex justify-center">{tabContent[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}
