"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useCart } from "@/app/_context/CartContext";

import { FoodDetail } from "./FoodDetail";

export function ProductCard1({ _id, imageURL, name, price, ingredients }) {
  const { addToCart, removeFromCart, getQuantity } = useCart();
 const quantity = getQuantity(_id); // now this works
  const handleAddToCart = () => {
    addToCart({ _id, imageURL, name, price, ingredients });
    // No need to manually close, DialogClose wrapper will handle it
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[397.33px] h-85.5 border-[#E4E4E7] border rounded-[20px] bg-white p-4 flex flex-col gap-5">
          <div
            className="w-[365.33px] h-52.5 rounded-xl bg-cover relative"
            style={{ backgroundImage: `url(${imageURL})` }}
          >
            {" "}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent opening dialog
                addToCart({ _id, imageURL, name, price, ingredients });
              }}
              className="w-8 h-8 rounded-full bg-white text-[#EF4444] flex items-center justify-center text-xl hover:scale-105 transition"
            >
              +
            </button>
          </div>

          <div className="w-[365.33px] h-20 flex flex-col gap-2">
            <div className="flex justify-between h-5 items-center">
              <p className="text-[24px] text-[#EF4444] font-semibold">{name}</p>
              <div className="flex items-center gap-3">
                <p className="text-[18px] font-semibold">${price}</p>
              </div>
            </div>
            <p className="text-[14px] text-black font-normal h-10 flex items-start">
              {ingredients}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-206 h-103 rounded-[20px] bg-white p-6 flex gap-6">
        <div
          className="w-94.25 h-91 rounded-xl bg-cover"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
        <div className="flex flex-col justify-between w-94.25 pt-9">
          <DialogHeader>
            <DialogTitle className="text-[24px] text-[#EF4444] font-semibold">
              {name}
            </DialogTitle>
            <DialogDescription className="text-[14px] text-black font-normal h-10 flex items-start">
              {ingredients}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p>Total price</p>
                <p className="text-[24px] font-semibold">${price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(_id)}
                  className="w-11 h-11 border border-[#E4E4E7] rounded-full flex items-center justify-center text-2xl"
                >
                  -
                </button>
                <span className="text-[18px] font-semibold w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    addToCart({ _id, imageURL, name, price, ingredients })
                  }
                  className="w-11 h-11 border border-[#E4E4E7] rounded-full flex items-center justify-center text-2xl"
                >
                  +
                </button>
              </div>
            </div>
            <DialogClose asChild>
              <div
                onClick={handleAddToCart}
                className="w-94.25 h-11 bg-black rounded-full text-white flex justify-center items-center text-[14px] font-medium"
              >
                Add to cart
              </div>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
