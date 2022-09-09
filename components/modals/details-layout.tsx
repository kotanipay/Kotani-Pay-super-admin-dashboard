import { Dialog, Transition } from "@headlessui/react";
import React, { Children, Fragment, ReactNode } from "react";
import { Spacer } from "../../utils/spacer";

export const DetialsLayout: React.FC<{
	open?: boolean;
	close?: () => void;
	children?: ReactNode;
	modalWidth?: string;
}> = ({ open, close, children, modalWidth = "lg:w-[38%] w-full" }) => {
	return (
		<>
			<Transition appear show={open} as={Fragment}>
				<Dialog
					as="div"
					className={`fixed z-50 top-0  right-0 ${modalWidth}`}
					onClose={() => close?.()}>
					<div className="min-h-screen">
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-in duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0 bg-[#000] bg-opacity-30 z-[-10]" />
						</Transition.Child>

						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full">
							{children}
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
