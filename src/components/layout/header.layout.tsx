import { IoMdEye, IoMdEyeOff, IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import DarkModeSwitcher from './dark-mode-switcher';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {


  return (
    // sticky top-0 z-9999
    <header className="flex  bg-white drop-shadow-1 dark:bg-zinc-800 dark:drop-shadow-none rounded-2xl mx-2 lg:mx-7 md:mx-6">
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

        <div className="hidden sm:block ">
          <div className="w-full flex flex-col">
            <span className="text-xs opacity-70 text-black dark:text-white ">
              Cumulative Balance
            </span>

            <div className="flex mt-1 items-center text-black dark:text-white">
              <h1 className="text-lg font-bold flex">
                USD
                <span
                  className="ml-2"
                >
                  45000
                </span>
              </h1>
              
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            {/* <DropdownNotification />
            <DropdownMessage /> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
