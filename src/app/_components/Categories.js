"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/app/_icons/PlusIcon.js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:999/foodcategory");
    //     setCategoryName(response.data);
    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };
    console.log("hello");
    const response = await axios.post("http://localhost:999/foodcategory", {
      name: categoryName,
    });
    setCategoryName("");
  };

  //  const handleAddCategoryButton = async () => {
  //   if (!newCategoryName.trim()) {
  //     toast.error("Please enter a valid category name.");
  //     return;
  //   }
  //   try {
  //     const token = localStorage.getItem("token") || "";
  //     await axios.post("http://localhost:999/foodcategory", {
  //       name: categoryName,
  //     }, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //     }
  //     });
  //     setCategories([...categories, response.data]);
  //     toast.success("Category added successfully!");
  //     setCategoryName("");
  //   } catch (error) {
  //     console.error("Error adding category:", error);
  //     toast.error("Failed to add category. Please try again.");
  //   }
  // };
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
    <Dialog>
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
