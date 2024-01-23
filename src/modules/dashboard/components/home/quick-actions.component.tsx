import { PrimaryButton } from "@/components/buttons";
import { FaUpload } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const QuickActions = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-black text-lg font-semibold ">Quick Actions</h3>
      <div className="flex justify-between gap-x-2 mt-5 mb-10">
        <PrimaryButton
          onClick={() => {}}
          buttonStyle="dark:bg-white dark:text-blue px-1 py-1 w-full"
        >
          <div className="flex items-center justify-center text-xs w-full">
            <FaUpload />
            Upload user ID
          </div>
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {}}
          buttonStyle="dark:bg-white dark:text-blue px-1.5 py-1 w-full"
        >
          <div className="flex w-full items-center justify-center gap-x-1 text-xs">
            Reset user PIN
          </div>
        </PrimaryButton>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 rounded-lg">
        <h4 className="text-black text-sm font-bold">Recent Users</h4>

        <div className="my-2">
          {new Array(5).fill(0).map((_, i) => (
            <Link
              key={i}
              href="/"
              className="flex items-center gap-3 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <Image
                src={"/images/test-profile.jpg"}
                alt="User"
                className="rounded-full object-cover h-10 w-10"
                height={100}
                width={100}
              />

              <div className="flex flex-1 items-center justify-between">
                <h5 className="font-medium text-black dark:text-white">
                  Devid Heilo
                </h5>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <Link className="text-kotani-blue text-sm hover:text-kotani-orange" href={'/dashboard/users'}>
            See all users
          </Link>
        </div>
      </div>
    </div>
  );
};
export default QuickActions;
