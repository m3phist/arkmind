"use client";

import CardMostExpensiveItems from "@/app/dashboard/CardMostExpensiveItems";
import CardOrdersSummary from "./CardOrdersSummary";
import CardMostOrderedItems from "./CardMostOrderedItems";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardMostExpensiveItems />
      <CardMostOrderedItems />
      <CardOrdersSummary />
    </div>
  );
};

export default Dashboard;
