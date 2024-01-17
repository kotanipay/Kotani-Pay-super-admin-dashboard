import { useEffect, useRef, useState } from "react";
import { RiCouponLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
import { GoPerson, GoBook } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);

  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[999] flex h-screen w-72 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-zinc-800 rounded-2xl lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-6.5">
        <Link href="/" className={"flex items-center"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'/images/logo.png'} alt="logo" className="pr-2 h-8" />
          <h1 className="text-2xl font-bold text-black dark:text-white ">
            CouponSasa
          </h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoMdClose />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/dashboard/home"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  hover:text-black hover:dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("home")
                      ? "text-black dark:text-white"
                      : " text-gray-400"
                  }`}
                >
                  <RxDashboard size={22} />
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/dashboard/coupons"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  hover:text-black hover:dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("coupons")
                      ? "text-black dark:text-white"
                      : "text-gray-400"
                  }`}
                >
                  <RiCouponLine size={22} />
                  Coupons
                </Link>
              </li>

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/dashboard/transactions"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  hover:text-black hover:dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("transactions")
                      ? "text-black dark:text-white"
                      : "text-gray-400"
                  }`}
                >
                  <BiTransfer
                    size={22}
                    className="text-gray-400 hover:text-black hover:dark:text-white"
                  />
                  Transactions
                </Link>
              </li>
              {/* <!-- Menu Item Tables --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/dashboard/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium hover:text-black hover:dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile")
                      ? "text-black dark:text-white"
                      : "text-gray-400"
                  }`}
                >
                  <GoPerson size={22} />
                  Profile
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- open in a new window--> */}
              <li>
                <Link
                  href="https://couponsasa.readme.io"
                  target="_blank"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-400 hover:text-black hover:dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <GoBook />
                  API Documentation
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
