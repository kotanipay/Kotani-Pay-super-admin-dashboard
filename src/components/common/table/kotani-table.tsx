"use client";
import React, { useState } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import Loader from "../loader";

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  circle?: boolean;
  color?: boolean;
}

export interface ActionMenuItem {
  label: string;
  onClick?: () => void;
}

interface KotaniTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  itemsPerPage: number;
  pageButtonLimit: number;
  actions?: (item?: T) => ActionMenuItem[];
  loading?: boolean;
  LoadingComponent?: JSX.Element;
  EmptyComponent?: JSX.Element;
  onRowClick?: (item: T) => void;
}

export function KotaniTable<T>({
  data,
  columns,
  itemsPerPage,
  pageButtonLimit,
  actions,
  onRowClick,
  loading = false, // Default value for loading prop is false
}: KotaniTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortAscending, setSortAscending] = useState(true);
  const [expandedRow, setExpandedRow] = useState<string | any | null>(null);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortAscending((prevSortAscending) => !prevSortAscending);
    } else {
      setSortKey(key);
      setSortAscending(true);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue === bValue) return 0;
      return sortAscending
        ? aValue > bValue
          ? 1
          : -1
        : aValue > bValue
        ? -1
        : 1;
    });
  }, [data, sortKey, sortAscending]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getTextColors = (item?: string) => {
    switch (item) {
      case "approved":
      case "paid":
      case "active":
      case "fully_paid":
      case "success":
        return "text-green-600";
      case "rejected":
      case "failed":

      case "underpaid":
        return "text-red-600";
      case "over-paid":
      case "pending":
        return "text-yellow-700";
      default:
        return "text-gray-800";
    }
  };
  const getBgColors = (item?: string) => {
    switch (item) {
      case "approved":
      case "paid":
      case "active":
      case "fully_paid":
      case "success":
        return "bg-green-100";
      case "rejected":
      case "failed":

      case "underpaid":
        return "bg-red-100";
      case "over-paid":
      case "pending":
        return "bg-yellow-100";
      default:
        return "bg-gray-100";
    }
  };
  const visibleData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg min-w-full ">
        <div className="flex h-[50vh] flex-col items-center justify-center">
          <Loader />
          <div className="mt-2">Loading...</div>
        </div>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg min-w-full ">
        <div className="flex h-[50vh] flex-col items-center justify-center">
          <MdWarning color="#1DB223" size={80} />
          <div className="mt-2">No data available</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shadow bg-white p-5 relative rounded-xl">
        <div className="rounded-xl overflow-x-auto overflow-y-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-red-300">
                {columns.map(
                  (column, index) =>
                    // check if label length is greater than 1
                    column.label.length > 1 && (
                      <th
                        onClick={() =>
                          column.sortable && handleSort(column.key)
                        }
                        key={index}
                        // text-center
                        className="px-2 py-3 bg-white text-sm leading-4 font-semibold text-black-900 tracking-wider text-start"
                      >
                        <div className="flex ">
                          {column.label}
                          {column.sortable && (
                            <button
                              onClick={() => handleSort(column.key)}
                              className="ml-1 "
                              aria-label="Sort"
                            >
                              {sortKey === column.key
                                ? sortAscending
                                  ? "↑"
                                  : "↓"
                                : ""}
                            </button>
                          )}
                        </div>
                      </th>
                    )
                )}
                {actions && (
                  // flex justify-center
                  <th className="px-6 py-3 bg-gray-50 text-black-900 text-sm  ">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item) => (
                <tr
                  key={item[columns[0].key]?.toString()}
                  className="bg-white hover:bg-gray-100 cursor-pointer"
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {columns.map(
                    (column) =>
                      column.label.length > 1 && (
                        <td
                          key={column.key.toString()}
                          // text-center
                          className="px-2 py-5 whitespace-no-wrap text-base leading-5 text-black"
                        >
                          {column.circle ? (
                            <div
                              className={`h-2 w-2 rounded-full  ${
                                item[column.key] === "active" ||
                                item[column.key] === true
                                  ? "bg-green-700"
                                  : "bg-red-700"
                              }`}
                            ></div>
                          ) : column.color ? (
                            <span
                              className={`font-semibold capitalize rounded-lg px-4 py-1 ${getTextColors(
                                item[column.key]?.toString().toLowerCase()
                              )} ${getBgColors(
                                item[column.key]?.toString().toLowerCase()
                              )}`}
                            >
                              {" "}
                              {item[column.key]?.toString() ?? "-"}
                            </span>
                          ) : Array.isArray(item[column.key]) ? (
                            // @ts-ignore
                            (item[column.key] as keyof T[])?.map(
                              (
                                vl: any,
                                index: React.Key | null | undefined
                              ) => (
                                <div key={index}>
                                  <p>{JSON.stringify(vl)}</p>
                                </div>
                              )
                            )
                          ) : item[column.key] === null ? (
                            <div>??</div>
                          ) : typeof item[column.key] === "object" ? (
                            // @ts-ignore
                            Object.entries(item[column.key]).map(
                              ([key, value], index) => (
                                <div key={index}>
                                  <span className="font-bold uppercase">
                                    {key}
                                  </span>
                                  <span className="font-light">
                                    : {value as any}
                                  </span>
                                </div>
                              )
                            )
                          ) : (
                            // check if value is an array
                            item[column.key]?.toString() ?? "-"
                          )}
                        </td>
                      )
                  )}
                  {actions && (
                    <td className=" px-2 py-2 whitespace-no-wrap text-right text-sm leading-5 font-medium flex justify-center">
                      <div className=" inline-block text-center">
                        <button
                          type="button"
                          className="p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          id="options-menu"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={() => {
                            if (expandedRow === item[columns[0].key]) {
                              setExpandedRow(null);
                            } else {
                              setExpandedRow(item[columns[0].key]);
                            }
                          }}
                        >
                          <span className="sr-only">Open options</span>
                          <MdOutlineMoreHoriz size={25} />
                        </button>

                        {expandedRow === item[columns[0].key] && (
                          <div
                            className="origin-top-right absolute right-7 z-[999] mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <div className="py-1" role="none">
                              {actions(item).map((action) => (
                                <button
                                  key={action.label}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                  onClick={() => {
                                    if (action.onClick) {
                                      action.onClick();
                                      setExpandedRow(null);
                                    }
                                  }}
                                >
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white py-3 flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white ${
                currentPage === 1
                  ? "opacity-50 pointer-events-none"
                  : "hover:text-gray-500"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white ${
                currentPage === totalPages
                  ? "opacity-50 pointer-events-none"
                  : "hover:text-gray-500"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-sm leading-5 text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}-
                  {Math.min(totalItems, currentPage * itemsPerPage)}{" "}
                </span>
                of <span className="font-medium">{totalItems}</span> results
              </div>
            </div>
            <div>
              <nav className="relative z-0 inline-flex shadow-sm">
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .slice(0, pageButtonLimit)
                  .map((page) => (
                    <button
                      key={page}
                      className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm leading-5 focus:z-10 ${
                        page === currentPage
                          ? "text-green-900 bg-green-100 font-bold"
                          : "text-gray-700 hover:text-gray-500 font-normal"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
