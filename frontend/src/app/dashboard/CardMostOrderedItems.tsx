import { useGetDashboardMetricsQuery } from "@/state/api";
import { Flame } from "lucide-react";
import React from "react";

const CardMostOrderedItems = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Most Ordered Items
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.mostOrderItems.map((order) => (
              <div
                key={order.itemId}
                className="flex items-center justify-between gap-3 px-7 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">{order.name}</div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        {order.quantity} orders
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Flame className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardMostOrderedItems;
