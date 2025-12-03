"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/app/_icons/PlusIcon.js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadImage from "@/app/_components/UploadImage.js";
import { useState } from "react";
import axios from "axios";

export const CategoriesFood = () => {
  const [foodName, setFoodName] = useState("");

  const handleSubmit = async () => {
    console.log("helloFood");
    const response = await axios.post("http://localhost:999/food", {
      name: foodName,
    });
    setFoodName("");
  };
  return (
    <div className="w-[270.75px] h-[241px] flex flex-col justify-center items-center gap-6 border-[#EF4444]  border-dashed border rounded-lg ">
      <Dialog>
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmit();
          }}
        >
          <DialogTrigger asChild>
            <div className="justify-center items-center flex flex-col gap-6">
              <Button className="h-9 w-9 bg-[#EF4444] rounded-full flex justify-center items-center">
                <PlusIcon />
              </Button>
              <p className="font-medium text-[14px] w-[154px] text-center">
                Add new Dish to Appetizers
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="w-115 h-148 bg-white rounded-xl p-6 flex flex-col gap-6">
            <DialogHeader className="h-13 text-black">
              <DialogTitle>Add new Dish to Appetizers</DialogTitle>
            </DialogHeader>

            <div className="h-15 flex gap-6">
              <div className="h-15 flex flex-col gap-2">
                <Label htmlFor="name-1">Food name</Label>
                <Input
                  className="w-48.5"
                  id="name-1"
                  name="name"
                  placeholder="Type food name"
                />
              </div>
              <div className="h-15 flex flex-col gap-2">
                <Label htmlFor="name-2">Food price</Label>
                <Input
                  className="w-48.5"
                  id="name-2"
                  name="name"
                  placeholder="Enter price..."
                />
              </div>
            </div>

            <div className="h-28 flex flex-col gap-2">
              <Label htmlFor="name-3">Ingredients</Label>
              <Input
                placeholder="List ingredients..."
                className="w-103 h-22.5"
                id="name-3"
                name="name"
              />
            </div>
            <div className="w-103 h-40 flex flex-col gap-2">
              <Label htmlFor="name-3">Food image</Label>
              <UploadImage />
            </div>
            <DialogFooter className="h-16 flex items-end">
              <Button onClick={handleSubmit}>Add Dish</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
