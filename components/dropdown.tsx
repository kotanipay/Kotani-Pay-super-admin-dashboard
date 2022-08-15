import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import CaretDown from "../public/svgs/caret-filled.svg";

export default function Dropdown() {
	return (
		<div className="">
			<Menu as="div" className="relative inline-block text-left">
				{({ open }) => (
					<>
						<div>
							<Menu.Button className="inline-flex w-full space-x-3 items-center justify-center rounded-md px-4 py-2 text-sm font-sans text-neutral-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<span>Balance</span>
								<span className={open ? "rotate-180" : ""}>
									<CaretDown />
								</span>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95">
							<Menu.Items
								style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)" }}
								className="absolute mt-1 z-20 w-40 divide-y-2 rounded-md bg-[#FAFBFC]">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? "" : "bg-[#FAFBFC]"
											} group flex w-full items-center rounded-md px-3 pb-4 pt-6 hover:bg-neutral-300 hover:bg-opacity-20 text-sm`}>
											Users
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? "" : "text-gray-900"
											} group flex w-full items-center hover:bg-neutral-300 hover:bg-opacity-20 px-3 py-4 text-sm`}>
											Wallets
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? "" : "text-gray-900"
											} group flex w-full items-center px-3 py-4 hover:bg-neutral-300 hover:bg-opacity-20 text-sm`}>
											cUSD
										</button>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
}
