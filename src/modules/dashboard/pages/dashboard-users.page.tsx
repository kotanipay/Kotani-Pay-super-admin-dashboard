"use client";

import DefaultLayout from "@/components/layout/default.layout";
import React from "react";
import UserMetricsCardGroup from "../components/users/user-metrics.component";
import { KotaniTable, TableColumn } from "@/components/common/table/kotani-table";
import { useRouter } from "next/navigation";

interface UsersModel{
  name: string;
  userId: string;
  dateJoined: string;
  phoneNumber: string;
  status: string;
}
const mockUsers: UsersModel[] = [
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
  {
    name: "John Doe",
    userId: "1234567890",
    dateJoined: "12/12/2020",
    phoneNumber: "08012345678",
    status: "active",
  },
];

const columns: TableColumn<UsersModel>[] = [
  // { key: "id", label: "", sortable: false },
  { key: "name", label: "Name", sortable: true },
  { key: "userId", label: "User ID", sortable: true },
  { key: "dateJoined", label: "Date joined", sortable: true },
  { key: "phoneNumber", label: "Phone Number", sortable: true },
  { key: "status", label: "Status", sortable: true, color: true },
];

export const DashboardUsersPage = () => {
  const router = useRouter();
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">All Users</h1>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12">
          <UserMetricsCardGroup />
        </div>
        <div className="col-span-12">
          <KotaniTable
            data={mockUsers}
            loading={false}
            columns={columns}
            itemsPerPage={100}
            pageButtonLimit={20}
            onRowClick={(row) => {
              router.push(`/dashboard/users/${row.userId}`);
            }}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};
