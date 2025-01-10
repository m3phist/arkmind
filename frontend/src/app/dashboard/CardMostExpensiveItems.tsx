import { useGetDashboardMetricsQuery } from "@/state/api";
import { ChartNoAxesCombined } from "lucide-react";
import React from "react";

const CardMostExpensiveItems = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Most Expensive Items
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.mostExpensiveItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 px-7 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">{item.name}</div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ChartNoAxesCombined className="w-4 h-4" />
                  </button>
                  Trending
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardMostExpensiveItems;
