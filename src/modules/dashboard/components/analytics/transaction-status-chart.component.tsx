"use client";
import Dropdown, { DropdownOption } from "@/components/common/dropdown";
import DateFilterDropdown from "@/components/common/dropdown/date-filter";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  // colors: ["#80CAEE", "#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "pie",
    // dropShadow: {
    //   enabled: true,
    //   color: "#623CEA14",
    //   top: 10,
    //   blur: 4,
    //   left: 0,
    //   opacity: 0.1,
    // },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  // stroke: {
  //   width: [2, 2],
  //   curve: "smooth",
  // },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 1,
    colors: "#000000",
    strokeColors: ["#80CAEE", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  // yaxis: {
  //   title: {
  //     style: {
  //       fontSize: "0px",
  //     },
  //   },
  //   min: 0,
  //   max: 100,
  // },
};

interface ChartOneState {
  series: number[];
}

const TransactionStatusChart: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [44, 55, 13],
  });

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white mt-10 px-5 pt-5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full justify-between items-center my-2">
          <span className="block text-base font-semibold text-black dark:text-white">
            Transaction flows
          </span>
          <DateFilterDropdown
            dateCategory={"TODAY"}
            onDateCategoryChange={(value) => {}}
            status={"successfully"}
            onStatusChange={(value) => {}}
            onCustomDateRangeChange={(first, second) => {}}
          />
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 mt-8">
          <ReactApexChart
            options={options}
            series={state.series}
            type="pie"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionStatusChart;
