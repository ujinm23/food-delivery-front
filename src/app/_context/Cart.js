"use client";

import { useCart } from "@/app/_context/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "../_icons/ShoppingCartIcon";
import { ShoppingCart } from "../_components/Cart/ShoppingCart";
import { OrderCart } from "../_components/Cart/OrderCart";
import { WhiteShoppingCart } from "../_icons/WhiteShoppingCart";
import { X } from "lucide-react";

export function Cart() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);

  const tabs = [
    { id: "tab1", label: "Cart" },
    { id: "tab2", label: "Order" },
  ];

  const tabContent = {
    tab1: <ShoppingCart />,
    tab2: <OrderCart orders={orders} />,
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-9 h-9 rounded-full flex justify-center items-center bg-white relative">
          <ShoppingCartIcon />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-133.75 max-w-full p-8 bg-[#404040] text-white gap-6 flex-1 overflow-y-auto  rounded-l-[20px]">
        <DrawerTitle className="sr-only h-0">Shopping Cart</DrawerTitle>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <WhiteShoppingCart />
            <p className="text-[20px] font-semibold ">Order detail</p>
          </div>
          <DrawerClose asChild>
            <Button className="w-9 h-9 border border-white rounded-full bg-[#404040] flex text-[20px] justify-center items-center">
              <X />
            </Button>
          </DrawerClose>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 h-11 w-117.75 bg-white rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-1 w-56.75 rounded-full h-9 ${
                activeTab === tab.id
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex justify-center">{tabContent[activeTab]}</div>
      </DrawerContent>
    </Drawer>
  );
}
