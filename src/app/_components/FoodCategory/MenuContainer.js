" use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard1 } from "@/app/_components/HomeFood.js/ProductCard1.js";
import { Food } from "@/app/_features/Food.js";

export function MenuContainer(props) {
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


  return (
    <div className="w-316 h-auto">
      <div className="p-6 rounded-lg shadow flex flex-col gap-13.5">
        <div className="font-semibold text-[30px] text-white">
          {" "}
          {props.title}
        </div>
        <div className="w-316 flex flex-wrap gap-9 cursor-pointer">
          {food.map((food) => (
            <ProductCard1 key={food._id} food={food} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}
