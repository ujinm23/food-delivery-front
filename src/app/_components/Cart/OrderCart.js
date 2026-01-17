"use client";
import { Empty } from "../empty";

export function OrderCart({ orders }) {
  if (!orders || orders.length === 0) {
    return (
      <Empty
        title="No orders yet?"
        description="🍕 You haven't placed any orders yet. Start exploring our menu and satisfy your cravings!"
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-14 bg-white rounded-[20px] p-4">
        <p className="text-[20px] font-semibold text-black">Order history</p>
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-[15px] p-4 flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <span className="font-bold text-black">${order.totalPrice}</span>
              <span className="text-gray-500">#{order._id.slice(-5)}</span>
            </div>
            <div className="flex flex-col gap-1">
              {order.items.map((item) => (
                <div key={item.productId} className="text-black">
                  • {item.name} x {item.quantity}
                </div>
              ))}
            </div>
            <div className="text-gray-500 text-sm">
              {new Date(order.createdAt).toLocaleDateString()}
            </div>
            <div
              className={`font-semibold ${
                order.status === "Pending"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {order.status}
            </div>
            <div className="text-gray-500 text-sm">{order.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
