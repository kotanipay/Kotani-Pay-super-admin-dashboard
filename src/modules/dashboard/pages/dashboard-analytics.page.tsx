"use client";

import DefaultLayout from "@/components/layout/default.layout";
import React from "react";
import UsersChart from "../components/analytics/users-chart.component";
import AnaylticsBalanceChart from "../components/analytics/balance-chart.component";
import TransactionFlowChart from "../components/analytics/transaction-flow-chart.component";
import TransactionStatusChart from "../components/analytics/transaction-status-chart.component";
import UsersGroup from "../components/analytics/users-group.component";

export const DashboardAnalyticsPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">Analytics</h1>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-12 xl:col-span-8">
          <UsersChart />
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-4">
          <UsersGroup />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10 ">
        <div className="col-span-12 lg:col-span-12 xl:col-span-8">
          <TransactionFlowChart />
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-4">
          <TransactionStatusChart />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 ">
        <AnaylticsBalanceChart />
      </div>
    </DefaultLayout>
  );
};
