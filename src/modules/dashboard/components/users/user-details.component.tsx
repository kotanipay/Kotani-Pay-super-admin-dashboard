"use client";

import { PrimaryButton } from "@/components/buttons";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { SideModalLayout } from "@/components/layout/side-modal.layout";
import UserEdit from "./user-edit.component";

const UserDetails = () => {
  const [showEditUser, setShowEditUser] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full justify-between items-center mb-5">
          <h3 className="text-black text-lg font-semibold">User Details</h3>
          <div className="flex justify-between gap-x-2">
            <PrimaryButton
              onClick={() => {
                setShowEditUser(true);
              }}
              buttonStyle="dark:bg-white dark:text-blue px-1 !py-2"
            >
              <div className="flex items-center justify-center text-xs w-full">
                Edit user profile
              </div>
            </PrimaryButton>
            <PrimaryButton
              onClick={() => {}}
              buttonStyle="dark:bg-white dark:text-blue px-1 !py-2"
            >
              <div className="flex w-full items-center justify-center gap-x-1 text-xs">
                Reset user PIN
              </div>
            </PrimaryButton>
          </div>
        </div>
        <div className="rounded-lg border border-stroke bg-white shadow-default p-10">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <Image
                priority
                src={"/images/test-profile.jpg"}
                height={81}
                width={81}
                className="rounded-full h-28 w-28 object-cover"
                alt="alt"
              />
              <h5 className="text-black font-semibold mt-2">John Doe</h5>
              <p className="text-green-600 text-xs">Verified user</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8">
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-1 items-center">
                <p className="flex gap-x-2 text-xs text-black dark:text-white opacity-70">
                  Date joined
                </p>
                <h3 className="text-base text-black dark:text-white font-semibold">
                  25th June, 2022
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-1 items-center">
                <p className="flex gap-x-2 text-xs text-black dark:text-white opacity-70">
                  Gender
                </p>
                <h3 className="text-base text-black dark:text-white font-semibold">
                  Male
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-1 items-center">
                <p className="flex gap-x-2 text-xs text-black dark:text-white opacity-70">
                  Date of birth
                </p>
                <h3 className="text-base text-black dark:text-white font-semibold">
                  11th January, 2010
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-1 items-center">
                <p className="flex gap-x-2 text-xs text-black dark:text-white opacity-70">
                  Occupation
                </p>
                <h3 className="text-base text-black dark:text-white font-semibold">
                  Student
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideModalLayout open={showEditUser} close={() => setShowEditUser(false)}>
        <UserEdit setShowEditUser={setShowEditUser} />
      </SideModalLayout>
    </>
  );
};

export default UserDetails;
