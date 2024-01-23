"use client";

import { MdClose } from "react-icons/md";

interface UserEditProps {
  setShowEditUser: (value: boolean) => void;
}

const UserEdit = ({ setShowEditUser }: UserEditProps) => {
  return (
    <>
      <div className="w-full text-black dark:text-white flex items-center space-x-6 border-b-2 px-8 py-6  border-neutral-200">
        <button onClick={() => setShowEditUser(false)}>
          <MdClose />
        </button>
        <h2 className="text-base font-medium">Edit user profile</h2>
      </div>
      <form className="w-full px-10 py-12 flex flex-col">
        <div className="w-full mb-5 ">
          <label className="text-black dark:text-white text-base ">
            Full Name
          </label>
          <input
            type="text"
            className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent text-black border border-gray-200"
          />
        </div>

        <div className="w-full mb-5 flex w-full gap-x-4">
          <div className="grow">
            <label className="text-black dark:text-white text-base ">
              Date of Birth
            </label>
            <input
              type="date"
              className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent text-black border border-gray-200"
            />
          </div>
          <div className="grow">
            <label className="text-black dark:text-white text-base ">
              Occupation
            </label>
            <input
              type="text"
              className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent text-black border border-gray-200"
            />
          </div>
        </div>
        <div className="w-full mb-5 ">
          <label className="text-black dark:text-white text-base ">
            Gender
          </label>
          <select className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent text-black border border-gray-200">
            <option value={""}></option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>
        </div>
        <input
          className={`inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded-2xl py-1 px-3 py-3 leading-normal no-underline bg-kotani-blue text-white hover:bg-kotani-orange block w-full`}
          type="submit"
          value={"Save Updates"}
        />
      </form>
    </>
  );
};

export default UserEdit;
