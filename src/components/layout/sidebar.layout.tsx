"use client";
import { useEffect, useRef, useState } from "react";
import { DiGoogleAnalytics } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { PiArticleFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

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
      className={`absolute left-0 top-0 z-[999] flex h-screen w-72.5 flex-col overflow-y-hidden bg-white dark:bg-zinc-800 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0 shadow" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/" className={"flex items-center mt-6"}>
          <Image src={"/images/logo.png"} alt="logo" width={230} height={100} />
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
            <ul className="mb-6 flex flex-col gap-3">
              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-3 px-4 rounded-lg  hover:bg-kotani-blue-100 hover:text-kotani-blue  hover:dark:text-white duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname === "/dashboard"
                      ? "text-kotani-blue font-semibold bg-kotani-blue-100"
                      : " text-black "
                  }`}
                >
                  <MdDashboard size={22} />
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/dashboard/analytics"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-3 px-4 rounded-lg  hover:bg-kotani-blue-100 hover:text-kotani-blue  hover:dark:text-white duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname.includes("analytics")
                      ? "text-kotani-blue font-semibold bg-kotani-blue-100"
                      : " text-black "
                  }`}
                >
                  <DiGoogleAnalytics size={22} />
                  Analytics
                </Link>
              </li>

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/dashboard/users"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-3 px-4 rounded-lg  hover:bg-kotani-blue-100 hover:text-kotani-blue  hover:dark:text-white duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname.includes("users")
                      ? "text-kotani-blue font-semibold bg-kotani-blue-100"
                      : " text-black "
                  }`}
                >
                  <FaUsers size={22} />
                  Users
                </Link>
              </li>
              {/* <!-- Menu Item Tables --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/dashboard/transaction"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-3 px-4 rounded-lg  hover:bg-kotani-blue-100 hover:text-kotani-blue  hover:dark:text-white duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname.includes("transaction")
                      ? "text-kotani-blue font-semibold bg-kotani-blue-100"
                      : " text-black "
                  }`}
                >
                  <BiTransfer size={22} />
                  Transaction
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- open in a new window--> */}
              <li>
                <Link
                  href="/dashboard/reports"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-3 px-4 rounded-lg  hover:bg-kotani-blue-100 hover:text-kotani-blue  hover:dark:text-white duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname.includes("reports")
                      ? "text-kotani-blue font-semibold bg-kotani-blue-100"
                      : " text-black "
                  }`}
                >
                  <PiArticleFill size={22} />
                  Reports
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
