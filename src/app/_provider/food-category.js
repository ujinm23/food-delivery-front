"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FoodCategoryContext = createContext(null);

export const useCategory = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useFoodCategory must be used within a FoodCategoryProvider"
    );
  }
  return context;
};

export const FoodCategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    const token = localStorage.getItem("authToken") || "";
    console.log("token");
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:999/foodcategory", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching food categories:", error);
      toast.error("Failed to fetch food categories.");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:999/foodcategory/${id}`);
      toast.success("Category added successfully!");
      fetchCategories();
    } catch (error) {
      toast.error("Failed to delete category. Please try again.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <FoodCategoryContext.Provider
      value={{
        categories,
        loading,
        deleteCategory,
      }}
    >
      {children}
    </FoodCategoryContext.Provider>
  );
};
