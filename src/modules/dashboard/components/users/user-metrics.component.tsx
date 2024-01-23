"use client";

import UserMetricsCard from "./user-metric-card.component";
import { useState } from "react";

const UserMetricsCardGroup = () => {

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-lg border border-stroke bg-white shadow-default">
          <UserMetricsCard
            title="Total Users"
            amount="5,000,000"
          />
          <UserMetricsCard
            title="Total verified users"
            amount="5,000"
          />
          <UserMetricsCard
            title="Total unverified user"
            amount="5,000,000"
            showBorder={false}
          />
        </div>
      </div>
    </>
  );
};

export default UserMetricsCardGroup;
