import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export interface DropdownOption {
  value: string;
  label: string;
}
interface DropdownProps {
  value: DropdownOption;
  options: DropdownOption[];
  onChange: (value: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
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

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="flex flex-col">
          <span className="block text-base font-semibold text-black dark:text-white">
            {value.label}
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
        className={`absolute z-50 left-5 mt-4 flex flex-col rounded-sm border border-stroke bg-gray-100 shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="group text-black flex flex-col py-2 ">
          {options.map((option, i) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option);
                setDropdownOpen(false);
              }}
              className={`cursor-pointer flex items-center py-3 px-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base px-6 ${
                option.value === value.value ? "text-primary" : ""
              } ${options.length - 1 === i ? "" : "border-b border-stroke"}`}
            >
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
