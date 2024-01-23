"use client";

import UsersCardComponent from "./user-card.component";

const UsersGroups = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg border border-stroke bg-white shadow-default py-14">
        <UsersCardComponent
          title="Verified users"
          amount="5,000"
          image="/svgs/verified.svg"
        />
        <div className="border-b-2 border-gray-30 mx-10"/>
        <UsersCardComponent
          title="Unverified users"
          amount="5,000"
          image="/svgs/unverified.svg"
        />
        <div className="border-b-2 border-gray-30 mx-10"/>
        <UsersCardComponent
          title="Total users"
          amount="5,000"
          image="/svgs/users.svg"
        />
      </div>
    </>
  );
};

export default UsersGroups;
