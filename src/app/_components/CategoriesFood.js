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

export const CategoriesFood = () => {
  const handleSubmit = async () => {
    await axios.post("/api/categories", {
      name: "New Category",
    });
  };

  return (
    <div>
      <Dialog>
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmit();
          }}
        >
          <DialogTrigger asChild>
            <Button className="h-9 w-9 bg-[#EF4444] rounded-full flex justify-center items-center">
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-115 h-148 bg-white rounded-xl p-6 flex flex-col gap-6">
            <DialogHeader className="h-13">
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
              <Button type="submit">Add Dish</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
