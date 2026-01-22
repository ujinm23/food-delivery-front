"use client";

import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/app/_icons/PlusIcon.js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);

  // const handleSubmit = async () => {
  //   if (!categoryName.trim()) {
  //     toast.error("Please enter a valid category name.");
  //     return;
  //   }
  //   const token = localStorage.getItem("token") || "";
  //   console.log("hello");
  //   await axios.post(
  //     "http://localhost:999/foodcategory",
  //     {
  //       name: categoryName,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   setCategoryName("");
  // };

  const handleSubmit = async () => {
    if (!categoryName.trim()) {
      toast.error("Please enter a valid category name.");
      return;
    }

    const token = localStorage.getItem("token") || "";
    const toastId = toast.loading("Adding category...");

    try {
      const response = await axios.post(
        "http://localhost:999/foodcategory",
        { name: categoryName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCategories((prev) => [...prev, response.data]);

      toast.success("Category added successfully 🎉", {
        id: toastId,
      });

      setCategoryName("");
      setOpen(false); // ✅ CLOSE dialog ONLY on success
    } catch (error) {
      console.error("Error adding category:", error);

      toast.error("Failed to add category ❌", {
        id: toastId,
      });
    }
  };

  //  const handleDeleteButton = async (id) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:999/foodcategory/${id}`
  //     );
  //       toast.success("Category added successfully!");
  //       FetchFoods();
  //   } catch (error) {

  //     toast.error("Failed to delete category. Please try again.");
  //   }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-9 w-9 bg-[#EF4444] rounded-full flex justify-center items-center">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-115 h-58 bg-white rounded-xl p-6 flex flex-col">
        <DialogHeader className="h-13">
          <DialogTitle>Add new category</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="h-15 flex flex-col gap-2">
          <Label htmlFor="name-1">Category name</Label>
          <Input
            id="name-1"
            name="name"
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Type category name..."
          />
        </div>
        <DialogFooter className="h-16 flex items-end">
          <Button onClick={handleSubmit}>Add category</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
