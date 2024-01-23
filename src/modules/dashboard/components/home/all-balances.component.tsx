import { MdClose } from "react-icons/md";
import Image from "next/image";

interface AllBalancesComponentProps {
  setShowAllBalances: (arg: boolean) => void;
}
export const AllBalancesComponent = ({
  setShowAllBalances,
}: AllBalancesComponentProps) => {
  return (
    <>
      <div className="w-full text-black dark:text-white flex items-center space-x-6 border-b-2 px-8 py-6  border-neutral-200">
        <button onClick={() => setShowAllBalances(false)}>
          <MdClose />
        </button>
        <h2 className="text-base font-medium">All account balances</h2>
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full px-10 py-12">
        <div className="flex flex-col gap-y-3 rounded-lg border border-stroke py-3 px-4">
          <div className="flex gap-x-2 ">
            <Image priority src={'/icons/usdc.png'} height={16} width={16} alt="alt" />
            <span className="text-xs text-black dark:text-white">USDc</span>
          </div>
          <h3 className="text-lg text-black dark:text-white">4,000.00</h3>
        </div>
        <div className="flex flex-col gap-y-3 rounded-lg border border-stroke py-3 px-4">
          <div className="flex gap-x-2 ">
            <Image priority src={'/icons/usdc.png'} height={16} width={16} alt="alt" />
            <span className="text-xs text-black dark:text-white">USDc</span>
          </div>
          <h3 className="text-lg text-black dark:text-white">4,000.00</h3>
        </div>
        <div className="flex flex-col gap-y-3 rounded-lg border border-stroke py-3 px-4">
          <div className="flex gap-x-2 ">
            <Image priority src={'/icons/usdc.png'} height={16} width={16} alt="alt" />
            <span className="text-xs text-black dark:text-white">USDc</span>
          </div>
          <h3 className="text-lg text-black dark:text-white">4,000.00</h3>
        </div>
      </div>
    </>
  );
};
