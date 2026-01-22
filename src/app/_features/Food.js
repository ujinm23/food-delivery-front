"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/app/_icons/PlusIcon.js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadImage } from "@/app/_components/FoodCategory/UploadImage.js";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Food = ({ categoryId, category }) => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [foodImageURL, setFoodImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const UPLOAD_PRESET = "food-delivery";
    const CLOUD_NAME = "di7kfwrvb";
    console.log("Uploading file:", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
      console.log("Cloudinary response status:", response.status);

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };

  const handleSubmit = async () => {
    if (!foodName || !foodPrice || !foodImageURL) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Uploading food...");

    try {
      // 1️⃣ Upload image
      const imageURL = await uploadToCloudinary(foodImageURL);
      if (!imageURL) {
        throw new Error("Image upload failed");
      }

      // 2️⃣ Save food
      await axios.post(
        "http://localhost:999/food",
        {
          name: foodName,
          price: foodPrice,
          ingredients: foodIngredients,
          imageURL: imageURL,
          category: categoryId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        },
      );

      toast.success("Food uploaded successfully 🍽️", {
        id: toastId,
      });

      // 3️⃣ Reset form
      setFoodName("");
      setFoodPrice("");
      setFoodIngredients("");
      setFoodImageURL("");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed ❌", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[270.75px] h-[241px] flex flex-col justify-center items-center gap-6 border-[#EF4444]  border-dashed border rounded-lg ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="justify-center items-center flex flex-col gap-6">
            <Button className="h-9 w-9 bg-[#EF4444] rounded-full flex justify-center items-center">
              <PlusIcon />
            </Button>
            <p className="font-medium text-[14px] w-[154px] text-center">
              Add new Dish to {category}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-115 h-148 bg-white rounded-xl p-6 flex flex-col gap-6">
          <DialogHeader className="h-13 text-black">
            <DialogTitle>Add new Dish to {category} </DialogTitle>
          </DialogHeader>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name-1">Food name</Label>
              <Input
                className="w-48.5"
                id="name-1"
                name="name"
                onChange={(e) => setFoodName(e.target.value)}
                placeholder="Type food name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name-2">Food price</Label>
              <Input
                className="w-48.5"
                id="name-2"
                name="name"
                onChange={(e) => setFoodPrice(e.target.value)}
                placeholder="Enter price..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name-3">Ingredients</Label>
            <Input
              placeholder="List ingredients..."
              className="w-103"
              id="name-3"
              onChange={(e) => setFoodIngredients(e.target.value)}
              name="name"
            />
          </div>
          <div className="w-103 flex flex-col gap-2">
            <Label htmlFor="name-3">Food image</Label>
            <UploadImage
              imageURL={foodImageURL}
              setImageURL={setFoodImageURL}
            />
          </div>
          <DialogFooter className="h-16 flex items-end">
            <DialogClose asChild>
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Uploading..." : "Add Dish"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
