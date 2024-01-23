"use client";

import DefaultLayout from "@/components/layout/default.layout";
import React from "react";
import DropdownUser from "../components/home/dropdown-user.component";
import BalanceCardGroup from "../components/home/balance-card-group.component";
import BalanceChart from "../components/home/balance-chart.component";
import RecentTransactionTable from "../components/home/recent-tranx.component";
import QuickActions from "../components/home/quick-actions.component";

export const DashboardHomePage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">Hello Muhammed</h1>
        <DropdownUser />
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-12 xl:col-span-9">
          <BalanceCardGroup />
          <BalanceChart />
          <RecentTransactionTable />
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-3 ">
          <QuickActions />
        </div>
      </div>
    </DefaultLayout>
  );
};
