"use client";

import DateFilterDropdown from "@/components/common/dropdown/date-filter";
import UserMetricsCard from "../users/user-metric-card.component";
import { PrimaryButton } from "@/components/buttons";

const ReportFilter = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg border border-stroke bg-white shadow-default px-5 py-8">
        <h4 className="text-black text-base font-semibold">
          Generate app usage reports
        </h4>
        <div className="flex md:flex-col lg:flex-row items-center gap-x-5 my-8">
          <select className="block appearance-none py-1.5 px-4 rounded-lg text-base leading-normal bg-transparent text-black border border-gray-200">
            <option value={""}>Select report</option>
            <option value={"1"}>Transaction reports</option>
            <option value={"2"}>Balance reports</option>
            <option value={"3"}>User reports</option>
          </select>
          <DateFilterDropdown
            dateCategory={"TODAY"}
            onDateCategoryChange={(value) => {}}
            status={"successfully"}
            onStatusChange={(value) => {}}
            onCustomDateRangeChange={(first, second) => {}}
          />
          <select className="block appearance-none py-1.5 px-4 rounded-lg text-base leading-normal bg-transparent text-black border border-gray-200">
            <option value={""}>Download formats</option>
            <option value={"pdf"}>pdf</option>
            <option value={"csv"}>csv</option>
            <option value={"print"}>print</option>
          </select>
        </div>
        <div>
          <PrimaryButton
            onClick={() => {}}
            buttonStyle="dark:bg-white dark:text-blue px-1 !py-2"
          >
            <div className="flex items-center justify-center text-xs w-full">
              Generate report
            </div>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ReportFilter;
