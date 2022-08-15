import classNames from "classnames";
import { Spacer } from "../utils/spacer";
import React, { Fragment, ReactNode } from "react";
import { Listbox, Transition } from "@headlessui/react";
import CaretDown from "../public/svgs/caret-filled.svg";

interface SelectOption {
	label: string;
	value: string;
}

interface SelectProps {
	id?: string;
	label?: string;
	subLabel?: string;
	placeholder?: string;
	defaultPlaceholder?: boolean;
	error?: string;
	hideLabel?: boolean;
	value?: string;
	hideErrorMessage?: boolean;
	className?: string;
	alwaysShowMask?: boolean;
	listBoxStyle?: string;
	mask?: string;
	labelStyle?: string;
	readOnly?: boolean;
	prefix?: ReactNode;
	options?: SelectOption[];
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Select: React.FC<SelectProps> = ({
	placeholder = "Select an option",
	error,
	onChange,
	id,
	label,
	subLabel,
	defaultPlaceholder,
	options,
	value,
	listBoxStyle = "mt-14",
	className,
	prefix,
	hideErrorMessage,
}) => {
	const SelectBoxError = error
		? "border border-danger-100 bg-danger-100 bg-opacity-5"
		: "border border-[#D9D9D9] focus:ring-2 focus:ring-primary-100";

	const selectedOption = options?.find(option => option.value === value);

	return (
		<div className="flex flex-col w-full">
			{label ? (
				<label className={`font-sans text-lg text-neutral-400`} htmlFor={id}>
					{label}
				</label>
			) : null}

			<Spacer className="h-1" />

			{subLabel ? (
				<>
					<p className="font-sans-body text-xs text-neutral-400">{subLabel}</p>

					<Spacer className="h-1" />
				</>
			) : null}

			<div className="relative flex">
				{prefix ? (
					<div className="absolute top-[32%] left-4">{prefix}</div>
				) : null}
				<div className=" flex flex-col w-full border border-neutral-200 rounded-lg ">
					<Listbox
						value={value}
						onChange={value => {
							onChange?.({
								target: {
									value,
								},
							} as any);
						}}>
						{open => (
							<>
								<Listbox.Button
									className={classNames(
										"border border-[#E3E6EA] bg-[#F6F7F8] box-border w-full rounded-lg py-2 text-left pl-4",
										SelectBoxError,
										className,
										{
											"pl-12 pr-5": prefix,
											"px-1": !prefix,
											"text-primary-200 font-sans-body":
												placeholder && defaultPlaceholder,
										}
									)}>
									{selectedOption?.label || (
										<span className="text-neutral-500 font-sans font-normal text-sm">
											{placeholder}
										</span>
									)}

									<span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
										<CaretDown />
									</span>
								</Listbox.Button>
								<Transition
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									<Listbox.Options
										className={classNames(
											`absolute top-12 w-full py-1 overflow-auto bg-white rounded-md shadow-lg max-h-100 border border-primary-200  focus:outline-none sm:text-sm z-50  ${listBoxStyle} `
										)}>
										{options?.map((option, idx) => (
											<Listbox.Option
												key={option.value}
												value={option.value}
												className={({ active, selected }) =>
													`${
														active || selected
															? "bg-[#F7F8FF] text-primary-100"
															: " text-neutral-400 hover:text-primary-100"
													}
											cursor-pointer select-none relative py-2 px-4 transition ease-linear `
												}>
												{option.label}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</>
						)}
					</Listbox>
					{error && !hideErrorMessage ? (
						<p className="text-secondary-200 text-sm font-sans-body mt-2">
							{error}
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
};
