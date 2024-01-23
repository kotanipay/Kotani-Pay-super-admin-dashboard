"use client";

import {
  TableColumn,
  KotaniTable,
} from "@/components/common/table/kotani-table";
import DefaultLayout from "@/components/layout/default.layout";
import { SideModalLayout } from "@/components/layout/side-modal.layout";
import { useRouter } from "next/navigation";
import React from "react";
import TransactionDetails from "../components/users/transaction-details.component";
import {
  TransactionModel,
  mockTransactions,
} from "./dashboard-user-detail.page";
import TransactionSummary from "../components/transactions/transaction-summary.component";

const columns: TableColumn<TransactionModel>[] = [
  // { key: "id", label: "", sortable: false },
  { key: "amount", label: "Amount ($)", sortable: true },
  { key: "txHash", label: "Tx hash", sortable: true },
  { key: "date", label: "Date", sortable: true },
  { key: "phoneNumber", label: "Phone Number", sortable: true },
  { key: "status", label: "Status", sortable: true, color: true },
];
export const DashboardTransactionsPage = () => {
  const router = useRouter();
  const [item, setItem] = React.useState<TransactionModel | undefined>(
    undefined
  );
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">Transactions</h1>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12">
          <TransactionSummary />
        </div>
        <div className="col-span-12">
          <KotaniTable
            data={mockTransactions}
            loading={false}
            columns={columns}
            itemsPerPage={100}
            pageButtonLimit={20}
            onRowClick={(row) => {
              setItem(row);
            }}
          />
        </div>
      </div>
      <SideModalLayout
        open={item != undefined}
        close={() => setItem(undefined)}
      >
        <TransactionDetails item={item} onClick={() => setItem(undefined)} />
      </SideModalLayout>
    </DefaultLayout>
  );
};
