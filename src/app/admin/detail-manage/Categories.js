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

export const Categories = () => {
  const handleSubmit = async () => {
    await axios.post("/api/categories", {
      name: "New Category",
    });
  };

  return (
    <div className="w-[1171px] h-59 flex flex-col gap-6 items-end justify-between">
      <div className="bg-black rounded-full w-9 h-9"></div>
      <div className="w-[1171px] h-44 flex flex-col bg-white rounded-xl p-6 gap-4">
        <p className="font-semibold text-[20px]">Dishes category</p>
        <div className="w-[1123px] h-21 flex ">
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
              <DialogContent className="w-115 h-58 bg-white rounded-xl p-6 flex flex-col">
                <DialogHeader className="h-13">
                  <DialogTitle>Add new category</DialogTitle>
                </DialogHeader>

                <div className="h-15 flex flex-col gap-2">
                  <Label htmlFor="name-1">Category name</Label>
                  <Input
                    id="name-1"
                    name="name"
                    placeholder="Type category name..."
                  />
                </div>
                <DialogFooter className="h-16 flex items-end">
                  <Button type="submit">Add category</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
