"use client";
import Image from "next/image";
import { Footer } from "@/app/_features/footer.js";
import { Header } from "@/app/_features/header.js";
import { ProductCard } from "@/app/_components/ProductCard.js";
import { ProductList } from "@/app/_components/ProductList.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Menu } from "lucide-react";
import { MenuContainer } from "./_components/MenuContainer";


export default function Home() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://food-delivery-back-3biv.onrender.com/foodcategory"
      );
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
    <div className="flex flex-col">
      <Header />
      <div className="h-180 w-auto relative flex">
        <Image
          src="/home.png"
          fill
          alt="the home picture"
          className="object-cover"
          loading="eager"
        />
      </div>
      <div className="w-auto h-auto bg-[#404040] p-22 flex flex-col">
        <div>
          <div>
            <div className="flex flex-col gap-13.5">
              {categories.map((category) => (
                <MenuContainer
                  key={category._id}
                  title={category.name}
                  categoryId={category._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
