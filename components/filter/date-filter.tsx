import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CaretDown from "../../public/svgs/caret-down.svg";
import { DateCard } from "./date-card";

export const DateFilter = () => {
	const dateRef = useRef(null);
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col relative z-50">
			<button
				onClick={() => setOpen(!open)}
				className="inline-flex w-32 space-x-3 items-center justify-between rounded-md px-5 py-3 text-sm font-sans border border-neutral-200 bg-[#DEE3ED] bg-opacity-30 text-neutral-900 hover:bg-opacity-30">
				<span>Today</span>
				<span className={open ? "rotate-180" : ""}>
					<CaretDown />
				</span>
			</button>

			<Transition
				as={Fragment}
				show={open}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<div
					ref={dateRef}
					className="absolute top-14 right-0 w-80 bg-[#FAFBFC] z-50">
					<DateCard />
				</div>
			</Transition>
		</div>
	);
};
