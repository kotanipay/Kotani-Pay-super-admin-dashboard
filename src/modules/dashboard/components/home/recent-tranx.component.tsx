import { maskHashValues } from "@/components/common/mask/mask-hash";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { PiCopyFill } from "react-icons/pi";

const RecentTransactionTable = () => {
  return (
    <div className="rounded-sm border border-stroke rounded-lg mt-10 bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h3 className="text-black text-lg font-semibold mb-5">
        Recent transactions
      </h3>

      <div className="flex flex-col">
        <div className="group grid grid-cols-3 rounded-sm text-gray-400 sm:grid-cols-5">
          <div className="p-2. xl:p-5">
            <h5 className="text-sm  xsm:text-base">Amount</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm  xsm:text-base">Tx hash</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm  xsm:text-base">Date</h5>
          </div>
          <div className=" p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm  xsm:text-base">Phone number</h5>
          </div>
          <div className=" p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm  xsm:text-base">Status</h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-1 ">
            <div className="text-green-600 bg-green-100 p-1 rounded-full">
              <FaArrowTrendUp />
            </div>
            <p className="text-black dark:text-white ">200.00</p>
          </div>

          <div className="flex items-center justify-center p-1.5 text-black dark:text-white">
            <p className="mr-2">{maskHashValues("0x0a2dTa2dTf2dTa2dTf2d")}</p>
            <PiCopyFill />
          </div>

          <div className="flex items-center justify-center p-1.5">
            <div className="">
              <p className="text-black dark:text-white ">10 Nov,2021 </p>
              <p className="text-sm text-black-300 opacity-70 dark:text-white-400 ">
                4 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-black dark:text-white">+254727751832</p>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-meta-5 bg-green-100 text-green-500 px-3 py-1.5 rounded-2xl  w-36 text-center">
              Successful
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-1">
            <div className="text-red-600 bg-red-100 p-1 rounded-full">
              <FaArrowTrendDown />
            </div>
            <p className="text-black dark:text-white ">10.00</p>
          </div>

          <div className="flex items-center justify-center p-1.5 text-black dark:text-white">
            <p className="mr-2">{maskHashValues("0x0a2dTa2dTf2dTa2dTf2d")}</p>
            <PiCopyFill />
          </div>

          <div className="flex items-center justify-center p-1.5">
            <div className="">
              <p className="text-black dark:text-white ">10 Nov,2021 </p>
              <p className="text-sm text-black-300 opacity-70 dark:text-white-400 ">
                4 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-black dark:text-white">+254727751832</p>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-meta-5 bg-orange-100 text-orange-500 px-3 py-1.5 rounded-2xl  w-36 text-center">
              Pending
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-1">
            <div className="text-red-600 bg-red-100 p-1 rounded-full">
              <FaArrowTrendDown />
            </div>
            <p className="text-black dark:text-white ">10.00</p>
          </div>

          <div className="flex items-center justify-center p-1.5 text-black dark:text-white">
            <p className="mr-2">{maskHashValues("0x0a2dTa2dTf2dTa2dTf2d")}</p>
            <PiCopyFill />
          </div>

          <div className="flex items-center justify-center p-1.5">
            <div className="">
              <p className="text-black dark:text-white ">10 Nov,2021 </p>
              <p className="text-sm text-black-300 opacity-70 dark:text-white-400 ">
                4 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-black dark:text-white">+254727751832</p>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-meta-5 bg-green-100 text-green-500 px-3 py-1.5 rounded-2xl  w-36 text-center">
              Successful
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-1">
            <div className="text-green-600 bg-green-100 p-1 rounded-full">
              <FaArrowTrendUp />
            </div>
            <p className="text-black dark:text-white ">200.00</p>
          </div>

          <div className="flex items-center justify-center p-1.5 text-black dark:text-white">
            <p className="mr-2">{maskHashValues("0x0a2dTa2dTf2dTa2dTf2d")}</p>
            <PiCopyFill />
          </div>

          <div className="flex items-center justify-center p-1.5">
            <div className="">
              <p className="text-black dark:text-white ">10 Nov,2021 </p>
              <p className="text-sm text-black-300 opacity-70 dark:text-white-400 ">
                4 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-black dark:text-white">+254727751832</p>
          </div>

          <div className="flex items-center justify-center p-1.5">
            <p className="text-meta-5 bg-red-100 text-red-500 px-3 py-1.5 rounded-2xl w-36 text-center">
              Failed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactionTable;
