" use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "@/app/_components/ProductCard.js";
import { Food } from "@/app/_components/Food.js";

export function ProductList(props) {
  const [food, setFood] = useState([]);

  const getFood = async () => {
    try {
      const response = await axios.get(
        `http://localhost:999/food/category/${props.categoryId}`
      );
      setFood(response.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getFood();
  }, []);
  console.log("Food props:", props);

  return (
    <div className="w-[1171px] h-auto">
      <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-4">
        <div className="font-semibold text-[20px]"> {props.title}</div>
        <div className="w-[1131px] flex flex-wrap gap-3 cursor-pointer">
          <Food categoryId={props.categoryId} category={props.title} />

          {food.map((food) => (
            <ProductCard key={food._id} food={food} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}
