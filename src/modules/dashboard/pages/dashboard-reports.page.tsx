"use client";

import {
  KotaniTable,
  TableColumn,
} from "@/components/common/table/kotani-table";
import DefaultLayout from "@/components/layout/default.layout";
import React from "react";
import TransactionSummary from "../components/transactions/transaction-summary.component";
import ReportFilter from "../components/reports/report-filter.component";

interface ReportsModel {
  name: string;
  date: string;
  format: string;
}
const mockReports: ReportsModel[] = [
  {
    name: "Transaction reports",
    date: "12/12/2020",
    format: "pdf",
  },
  {
    name: "Transaction reports",
    date: "12/12/2020",
    format: "pdf",
  },
  {
    name: "Balance reports",
    date: "12/12/2020",
    format: "csv",
  },
  {
    name: "User reports",
    date: "12/12/2020",
    format: "print",
  },
  {
    name: "User reports",
    date: "12/12/2020",
    format: "pdf",
  },
];

const columns: TableColumn<ReportsModel>[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "date", label: "Date joined", sortable: true },
  { key: "format", label: "Format", sortable: true },
];

export const DashboardReportsPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-grow items-center justify-between py-1">
        <h1 className="text-black text-2xl font-bold">Reports</h1>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-10">
        <div className="col-span-12">
          <ReportFilter />
        </div>
        <div className="col-span-12">
          <KotaniTable
            data={mockReports}
            loading={false}
            columns={columns}
            itemsPerPage={100}
            pageButtonLimit={20}
            actions={(item) => [
              {
                label: "Download",
                onClick: () => {},
              },
            ]}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};
