import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { OutlinedButton, PrimaryButton } from "@/components/buttons";

interface DateFilterProps {
  status?: string;
  onStatusChange?: (value: string) => void;
  dateCategory: "TODAY" | "7DAYS" | "30DAYS" | "1YEAR" | "CUSTOM";
  onDateCategoryChange: (value: string) => void;
  onCustomDateRangeChange?: (firstDate: Date, secondDate: Date) => void;
}

const DateFilterDropdown: React.FC<DateFilterProps> = ({
  status,
  onStatusChange,
  dateCategory,
  onDateCategoryChange,
  onCustomDateRangeChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    console.log("dropdownOpen", dropdownOpen);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 border px-4 py-2 rounded-lg lowercase"
        href="#"
      >
        <span className="flex flex-col">
          <span className="block capitalize text-sm font-semibold text-black dark:text-white">
            {dateCategory}
          </span>
        </span>
        <svg
          className={`hidden text-black fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute z-50 right-0 mt-4 w-[283px] py-2 flex flex-col rounded-xl border border-stroke bg-gray-100 shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="flex py-2 border-b">
          {["Today", "7 days", "30 days", "1 year"].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  onDateCategoryChange(item.toUpperCase().replace(" ", ""));
                }}
                className={`flex grow items-center justify-center p-1.5 ${
                  item.toUpperCase().replace(" ", "") === dateCategory
                    ? "text-kotani-blue"
                    : "text-black-500"
                }`}
              >
                <p className="text-xs">{item}</p>
              </button>
            );
          })}
        </div>
        <h5 className="px-3 py-2 text-xs font-semibold text-black">
          Custom date range
        </h5>
        <div className="flex px-3 text-sm mb-2">
          <input
            type="date"
            onChange={(e) => {
              e.preventDefault();
            }}
            className="w-full p-2 border border-stroke rounded border-r-1 rounded-r-none text-black"
          />
          <input
            type="date"
            onChange={(e) => {
              e.preventDefault();
            }}
            className="w-full p-2 border border-stroke rounded rounded-l-none text-black"
          />
        </div>
        {status && (
          <h5 className="px-3 py-2 text-xs font-semibold text-black">Status</h5>
        )}
        {onStatusChange && (
          <div className="flex px-3 text-sm mb-2">
            <select
              onChange={(e) => {
                e.preventDefault();
                onStatusChange?.(e.target.value);
              }}
              className="w-full p-2 border border-stroke rounded text-black"
            >
              <option value="all">All</option>
              <option value="successful">Successful</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        )}
        <div className="w-full border border-stroke mt-3" />
        <div className="px-3 flex justify-end gap-x-4 mt-5 mb-2">
          <OutlinedButton
            onClick={() => {}}
            className="py-1"
            buttonStyle="dark:bg-white text-kotani-blue dark:text-blue px-1 py-0"
          >
            <div className="flex w-full items-center justify-center gap-x-1 text-xs">
            Clear
            </div>
          </OutlinedButton>
          <PrimaryButton
            onClick={() => {}}
            buttonStyle="dark:bg-white hover:text-white dark:text-blue px-1.5 py-0"
          >
            <div className="flex w-full items-center justify-center gap-x-1 text-xs">
            Apply filter
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DateFilterDropdown;
