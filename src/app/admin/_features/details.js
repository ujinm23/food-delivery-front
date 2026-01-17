"use client";
import { Logo } from "@/app/_icons/Logo.js";
import { DashboardIcon } from "@/app/_icons/DashboardIcon.js";
import { TruckIcon } from "@/app/_icons/TruckIcon.js";
import { Categories } from "@/app/_components/Category/Categories.js";
import { Food } from "@/app/_features/Food.js";
import { CategoryButton } from "@/app/_components/Category/CategoryButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "@/app/_components/FoodCategory/ProductCard.js";
import { ProductList } from "@/app/_components/FoodCategory/ProductList";
import { useRouter } from "next/navigation";

export default function DetailManage() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:999/foodcategory");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCategories();
  }, []);

  return (
    <div className="flex flex-col  bg-[#F4F4F5CC] gap-6">
      <div className=" h-44 flex flex-col w-292.75 bg-white rounded-xl p-6 gap-4">
        <p className="font-semibold text-[20px]">Dishes category</p>
        <div className=" h-21 flex flex-wrap gap-3 cursor-pointer">
          <CategoryButton title="All dishes" />
          {categories.map((category) => (
            <CategoryButton key={category._id} title={category.name} />
          ))}
          <Categories />
        </div>
      </div>

      {categories.map((category) => (
        <ProductList
          key={category._id}
          title={category.name}
          categoryId={category._id}
        />
      ))}
    </div>
  );
}
