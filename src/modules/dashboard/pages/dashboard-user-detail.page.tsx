"use client";

import DefaultLayout from "@/components/layout/default.layout";
import React from "react";
import UserMetricsCardGroup from "../components/users/user-metrics.component";
import {
  KotaniTable,
  TableColumn,
} from "@/components/common/table/kotani-table";
import { useRouter } from "next/navigation";
import UserDetails from "../components/users/user-details.component";
import { SideModalLayout } from "@/components/layout/side-modal.layout";
import TransactionDetails from "../components/users/transaction-details.component";

export interface TransactionModel {
  amount: number;
  txHash: string;
  date: string;
  phoneNumber: string;
  status: string;
}
export const mockTransactions: TransactionModel[] = [
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Failed",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Pending",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Success",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Success",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Success",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Failed",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Pending",
  },
  {
    amount: 1000,
    txHash: "0x123456789087654321",
    date: "25th June, 2022",
    phoneNumber: "08012345678",
    status: "Pending",
  },
];

const columns: TableColumn<TransactionModel>[] = [
  // { key: "id", label: "", sortable: false },
  { key: "amount", label: "Amount ($)", sortable: true },
  { key: "txHash", label: "Tx hash", sortable: true },
  { key: "date", label: "Date", sortable: true },
  { key: "phoneNumber", label: "Phone Number", sortable: true },
  { key: "status", label: "Status", sortable: true, color: true },
];

export const DashboardUserDetailPage = () => {
  const router = useRouter();
  const [item, setItem] = React.useState<TransactionModel | undefined>(
    undefined
  );
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">
          All Users <span>{">"} John Doe</span>
        </h1>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12">
          <UserDetails />
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
              // router.push(`/dashboard/users/${row.userId}`);
            }}
          />
        </div>
      </div>
      <SideModalLayout
        open={item != undefined}
        close={() => setItem(undefined)}
      >
        <TransactionDetails item={item} onClick={()=> setItem(undefined)} />
      </SideModalLayout>
    </DefaultLayout>
  );
};
