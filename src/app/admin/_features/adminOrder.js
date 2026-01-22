"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:999/order"); // fetch all orders
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Could not load orders.");
      }
    };

    fetchOrders();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!orders || orders.length === 0)
    return (
      <div className="text-center text-gray-500 mt-10">No orders yet.</div>
    );

  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border p-4 rounded-lg bg-gray-50 flex flex-col gap-2"
        >
          <div className="flex justify-between">
            <span className="font-bold">${order.totalPrice}</span>
            <span className="text-gray-400">#{order._id.slice(-5)}</span>
          </div>

          <div className="mt-2">
            {order.items.map((item) => (
              <div key={item._id} className="text-black">
                • {item.productId.name || item.productId} x {item.quantity}
              </div>
            ))}
          </div>

          <div className="text-gray-500 text-sm mt-1">📍 {order.location}</div>

          <div className="text-gray-500 text-sm mt-1">
            {new Date(order.createdAt).toLocaleString()}
          </div>

          <div
            className={`mt-1 font-semibold ${
              order.status === "Pending" ? "text-yellow-500" : "text-green-500"
            }`}
          >
            {order.status || "Pending"}
          </div>
        </div>
      ))}
    </div>
  );
}
