"use client";

import { SideModalLayout } from "@/components/layout/side-modal.layout";
import BalanceCardComponent from "./balance-card.component";
import { useState } from "react";
import { AllBalancesComponent } from "./all-balances.component";

const BalanceCardGroup = () => {
  const [showAllBalances, setShowAllBalances] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full justify-between items-center mb-4">
          <h3 className="text-black text-lg font-semibold">Overview</h3>
          <button
            className="text-kotani-blue text-sm hover:text-kotani-orange"
            onClick={() => setShowAllBalances(true)}
          >
            See all balances
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 rounded-lg border border-stroke bg-white shadow-default">
          <BalanceCardComponent
            title="Balance"
            amount="$ 3,000,000"
            image="/svgs/btc.svg"
          />
          <BalanceCardComponent
            title="cUSD transacted"
            amount="400,000.00"
            image="/svgs/c-usd.svg"
          />
          <BalanceCardComponent
            title="Users"
            amount="500,000"
            image="/svgs/users.svg"
          />
          <BalanceCardComponent
            title="Wallets"
            amount="400,000"
            image="/svgs/wallet.svg"
          />
          <BalanceCardComponent
            title="Jenga"
            amount="600,000"
            image="/svgs/jenga.svg"
            showBorder={false}
          />
        </div>
      </div>
      <SideModalLayout
        open={showAllBalances}
        close={() => setShowAllBalances(false)}
      >
        <AllBalancesComponent setShowAllBalances={setShowAllBalances} />
      </SideModalLayout>
    </>
  );
};

export default BalanceCardGroup;
