import React, { Fragment, useState } from "react";
import CaretDown from "../../public/svgs/caret-down.svg";
import NotChecked from "../../public/svgs/empty-check.svg";
import Checked from "../../public/svgs/checked.svg";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

interface SelectOption {
	label: string;
	value: string;
}

const defaultOptions: SelectOption[] = [
	{
		label: "Successful",
		value: "Successful",
	},
	{
		label: "Pending",
		value: "Pending",
	},
	{
		label: "Failed",
		value: "Failed",
	},
];

interface Props {
	placeholder?: string;
	options?: SelectOption[];
	type?: "Single" | "Multiple";
	value?: string;
	onClick?: () => void;
	light?: boolean;
}

export const CheckSelect: React.FC<Props> = ({
	options = defaultOptions,
	placeholder = "Pending, failed",
	type = "Multiple",
	value,
	onClick,
	light,
}) => {
	const [openSelect, setOpenSelect] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	return (
		<div className="relative">
			<div
				onClick={() => setOpenSelect(!openSelect)}
				className={classNames(
					"inline-flex w-full space-x-3 items-center justify-between rounded-md text-sm font-sans focus:ring-1 focus:outline-primary-200 border border-neutral-200",
					{
						"bg-[#F6F7F8]": !light,
						"bg-white": light,
					}
				)}>
				<input
					type="text"
					placeholder={placeholder}
					className={classNames(
						"w-full px-3 rounded-lg focus:outline-none ring-0",
						{
							"bg-[#F6F7F8] py-3": !light,
							"bg-white py-4": light,
						}
					)}
					value={
						type === "Multiple"
							? selectedOptions.map(option => {
									return " " + option;
							  })
							: value
					}
				/>

				<span
					className={
						openSelect
							? "rotate-180 pl-3 cursor-pointer"
							: "pr-3 cursor-pointer"
					}>
					<CaretDown />
				</span>
			</div>

			<Transition
				as={Fragment}
				show={openSelect}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<div
					className={classNames(
						"absolute  divide-y-2 w-full flex flex-col rounded-lg z-40  border-2 border-[#DEE3ED]",
						{
							"bg-[#F6F7F8] top-[52px]": !light,
							"bg-white top-14": light,
						}
					)}>
					{options?.map(option => {
						const selected = selectedOptions.includes(option.value);

						return (
							<button
								key={option.label}
								onClick={() => {
									if (type === "Multiple") {
										if (!selected) {
											setSelectedOptions([...selectedOptions, option.value]);
											return;
										}
										setSelectedOptions(
											selectedOptions.filter(selectedOption => {
												return selectedOption !== option.value;
											})
										);
									}
									onClick?.();
								}}
								className="flex items-center space-x-3 px-2 py-3 hover:bg-primary-100 hover:bg-opacity-10">
								<span>{selected ? <Checked /> : <NotChecked />}</span>

								<span className="font-sans text-sm capitalize">
									{option.label}
								</span>
							</button>
						);
					})}
				</div>
			</Transition>
		</div>
	);
};
