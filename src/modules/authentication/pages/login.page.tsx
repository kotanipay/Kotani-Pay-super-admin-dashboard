"use client";
import AuthLayout from "@/components/layout/auth.layout";
import useColorMode from "@/core/hooks/use-color-mode.hooks";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showDate, setShowDate] = React.useState(false);

  const [colorMode, setColorMode] = useColorMode();

  return (
    <AuthLayout>
      <div className="h-full flex flex-col items-center justify-center">
        <Image src={"/images/logo.png"} alt="logo" width={250} height={200} />
        <form className="bg-white dark:bg-black-700 flex flex-col items-center lg:w-[30vw] w-full rounded-2xl px-7 py-14 shadow-2xl border dark:border-gray-600 border-gray-300">
          <h4 className="text-xl text-black dark:text-white mb-16 font-semibold">
            Admin Sign In
          </h4>

          <div className="w-full mb-5 ">
            <label className="text-black dark:text-white text-base ">Email</label>
            <input
              type="email"
              className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent text-black border border-gray-200"
              placeholder="user@email.com"
            />
          </div>
          <div className="w-full">
            <label className="text-black dark:text-white text-base">Password</label>
            <div className="relative text-black dark:text-white">
              <input
                // value={password}
                className="block appearance-none w-full py-3 px-2 mt-1.5 rounded-xl text-base leading-normal bg-transparent border border-gray-200"
                type={showDate ? " text" : "password"}
              />
              {showDate ? (
                <AiFillEyeInvisible
                  onClick={() => setShowDate(!showDate)}
                  className="absolute top-[35%] right-[15px]"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowDate(!showDate)}
                  className="absolute top-[35%] right-[15px]"
                />
              )}
            </div>
          </div>
          <div className="flex my-5 w-full">
            <Link
              href={"/forget"}
              className="text-black dark:text-white text-sm hover:text-kotani-blue"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            className={`inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded-2xl py-1 px-3 py-3 leading-normal no-underline bg-kotani-blue text-white hover:bg-kotani-orange block w-full`}
            type="submit"
            value={"Sign In"}
          />
          <div className="flex justify-center mt-5 w-full text-black dark:text-white text-base font-semibold">
            Don’t have an account?
            <Link
              href={"/forget"}
              className="text-kotani-blue hover:text-kotani-orange ml-2"
            >
              Sign up
            </Link>
          </div>
        </form>
        <div className="lg:h-[250px] h-[5%]"></div>
      </div>
    </AuthLayout>
  );
};
