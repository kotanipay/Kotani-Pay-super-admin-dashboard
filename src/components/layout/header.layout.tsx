import { IoMdEye, IoMdEyeOff, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import DarkModeSwitcher from "./dark-mode-switcher";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    // sticky top-0 z-9999
    <header className="flex drop-shadow-1 dark:bg-zinc-800 dark:drop-shadow-none py-0">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11 w-full">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-zinc-800 lg:hidden"
          >
            <IoMdMenu size={22} />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            {/* <img src={Logo} alt="Logo" /> */}
          </Link>
        </div>

        {/* <div className="hidden sm:block "></div> */}

        {/* <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4"> */}
            {/* <DarkModeSwitcher /> */}
            {/* <DropdownNotification />
            <DropdownMessage /> */}
          {/* </ul>
        </div> */}
      </div>
    </header>
  );
};

export default Header;