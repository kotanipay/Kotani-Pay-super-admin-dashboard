"use client";

import UserMetricsCard from "../users/user-metric-card.component";

const TransactionSummary = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 rounded-lg border border-stroke bg-white shadow-default">
          <UserMetricsCard
            title="Total successful withdrawals"
            amount="5,000,000"
          />
          <UserMetricsCard title="Total failed withdrawals" amount="5,000" />
          <UserMetricsCard title="Total successful deposits" amount="5,000" />
          <UserMetricsCard
            title="Total failed deposits"
            amount="5,000,000"
            showBorder={false}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionSummary;
