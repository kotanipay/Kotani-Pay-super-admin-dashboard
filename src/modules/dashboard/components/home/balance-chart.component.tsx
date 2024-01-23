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
  colors: ["#80CAEE", "#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

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
  stroke: {
    width: [2, 2],
    curve: "smooth",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: false,
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
  series: {
    name: string;
    data: number[];
  }[];
}

const BalanceChart: React.FC = () => {
  const [option, setOption] = useState<DropdownOption>({
    value: "balance",
    label: "Balance",
  });
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product Two",
        data: [
          30000, 25000, 36000, 30000, 4500, 3500, 44000, 52000, 59000, 36000,
          39000, 51000,
        ],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white mt-10 px-5 pt-5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full justify-between items-center my-5">
          <Dropdown
            value={option}
            options={[
              { value: "balance", label: "Balance" },
              { value: "wallets", label: "Wallets" },
              { value: "cusd", label: "cUSD" },
            ]}
            onChange={(value) => {
              setOption(value);
            }}
          />
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
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
