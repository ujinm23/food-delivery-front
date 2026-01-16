"use client";

import axios from "axios"; // ✅

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_context/CartContext";

import { Minus, X } from "lucide-react";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Person } from "@/app/_icons/Person";

export function ShoppingCart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:999/order",
        {
          items: cart,
          total: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrderSuccess(true); // 👈 THIS is why it wasn’t showing
    } catch (err) {
      console.error("Order failed", err);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-white">Your cart is empty. Start adding some items!</p>
    );
  }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-14 bg-white rounded-[20px] p-4">
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-semibold text-[#71717A]">My cart</p>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center  "
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-30 h-30 rounded-lg bg-cover"
                    style={{ backgroundImage: `url(${item.imageURL})` }}
                  />
                  <div className="flex flex-col justify-between h-30">
                    <div className="flex justify-between w-76.25">
                      <div className="flex flex-col w-64.75">
                        <p className="font-semibold text-[#EF4444] text-[16px]">
                          {item.name}
                        </p>
                        <p className="text-sm text-black">{item.ingredients}</p>
                      </div>
                      <div
                        className="text-[#EF4444] w-9 h-9 border border-[#EF4444] flex justify-center items-center rounded-full"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <X />
                      </div>
                    </div>
                    <div className="flex justify-between w-76.25 items-center">
                      <div className="flex items-center gap-2 text-black">
                        <div
                          className="bg-white text-black"
                          onClick={() => removeFromCart(item._id)}
                        >
                          <Minus />
                        </div>
                        <span className="text-[18px] font-semibold">
                          {item.quantity}
                        </span>
                        <div
                          className="bg-white text-black"
                          onClick={() => addToCart(item)}
                        >
                          <Plus />
                        </div>
                      </div>
                      <p className="text-[16px] font-bold text-black">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#71717A] font-semibold text-[20px]">
              Delivery location
            </p>
            <Textarea
              className="text-black"
              placeholder="Please share your complete address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="h-69 w-117.75 bg-white rounded-[20px] p-4 flex gap-5 flex-col">
        <p className="text-[#71717A] font-semibold text-[20px]">Payment info</p>

        <div className="flex flex-col gap-2 h-16 w-109.75">
          <div className="flex justify-between text-[#71717A]">
            Items
            <p className="font-semibold text-black">${totalPrice}</p>
          </div>
          <div className="flex justify-between text-[#71717A]">
            Shipping
            <p className="font-semibold text-black">0.99$</p>
          </div>
        </div>
        <div className="w-109.75 h-0 border-t  border border-black border-dashed "></div>

        <div className="flex justify-between text-[#71717A]">
          Total
          <p className="font-semibold text-black">${totalPrice}</p>
        </div>
        <AlertDialog open={orderSuccess} onOpenChange={setOrderSuccess}>
          <Button
            className="bg-[#EF4444] rounded-full h-11"
            onClick={handleCheckout}
          >
            Checkout
          </Button>

          <AlertDialogContent className="w-166 h-109.75 p-6 flex flex-col items-center justify-between">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Your order has been successfully placed!
              </AlertDialogTitle>
              <AlertDialogDescription className="flex justify-center">
                <Person />
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="w-47 h-11 bg-[#F4F4F5] rounded-full">
                Back to home
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-[#EF4444] rounded-full h-11">Checkout</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-166 h-109.75 p-6 flex flex-col items-center justify-between">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Your order has been successfully placed !
              </AlertDialogTitle>
              <AlertDialogDescription className="flex justify-center">
                <Person />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="w-47 h-11 bg-[#F4F4F5] rounded-full">
                Back to home
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
      </div>
    </div>
  );
}
