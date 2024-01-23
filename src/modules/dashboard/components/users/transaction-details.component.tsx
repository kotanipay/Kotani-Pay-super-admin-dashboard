"use client";

import { MdClose } from "react-icons/md";
import { TransactionModel } from "../../pages/dashboard-user-detail.page";
import { PrimaryButton } from "@/components/buttons";

interface TransactionDetailsProps {
  item: TransactionModel | undefined;
  onClick: () => void;
}

const TransactionDetails = ({ item, onClick }: TransactionDetailsProps) => {
  return (
    <>
      <div className="w-full text-black dark:text-white flex items-center space-x-6 border-b-2 px-8 py-6  border-neutral-200">
        <button onClick={() => onClick()}>
          <MdClose />
        </button>
        <h2 className="text-base font-medium">Details</h2>
      </div>
      <div className="w-full px-10 py-12 flex flex-col">
        {item?.status === "Failed" ? (
          <>
            <div className="bg-red-100 text-black px-2 py-4 rounded-lg text-center">
              DISBURSE FAILED: Insufficient funds in customer wallet
            </div>
            <div className="flex justify-center mt-5">
              <PrimaryButton
                onClick={() => {}}
                buttonStyle="dark:bg-white dark:text-blue px-1 !py-4"
              >
                <div className="text-xs">Retry payment</div>
              </PrimaryButton>
            </div>
          </>
        ) : item?.status === "Pending" ? (
          <>
            <div className="bg-yellow-100 text-black px-2 py-4 rounded-lg text-center">
              Transaction queued : pending payment
            </div>
            <div className="flex justify-center mt-5">
              <PrimaryButton
                onClick={() => {}}
                buttonStyle="dark:bg-white dark:text-blue px-1 !py-4"
              >
                <div className="text-xs">Pause payment</div>
              </PrimaryButton>
            </div>
          </>
        ) : (
          <>
            <div className="bg-green-100 text-black px-2 py-4 rounded-lg text-center">
              Transaction successful
            </div>
          </>
        )}
        <h4 className="text-black font-bold text-lg mt-14 mb-5">
          Transaction Information
        </h4>
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Type</p>
          <p className="font-semibold">Deposit</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Amount</p>
          <p className="font-semibold">$200.00</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Date</p>
          <p className="font-semibold">18 Nov, 2020</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Wallet debited</p>
          <p className="font-semibold">USD</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Tx hash</p>
          <p className="font-semibold">kjsaNDJ456saNDJ45...</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Description</p>
          <p className="font-semibold">some stuff to sort out</p>
        </div>
        <div className="h-7 bg-gray-100 w-full rounded-lg my-10" />
        <h4 className="text-black font-bold text-lg mb-5">
          Beneficiary details
        </h4>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Name</p>
          <p className="font-semibold">$200.00</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Phone number</p>
          <p className="font-semibold">18 Nov, 2020</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Momo</p>
          <p className="font-semibold">USD</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Bank</p>
          <p className="font-semibold">-</p>
        </div>
        <div className="border-b border-stroke my-5" />
        <div className="flex justify-between w-full text-black">
          <p className="opacity-70">Account number</p>
          <p className="font-semibold">-</p>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
