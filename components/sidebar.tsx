import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import logo from "../public/images/logo.png";
import { Spacer } from "../utils/spacer";
import { NavItem } from "./navitem";
// import Close from "../public/svgs/close.svg";
import { Transition } from "@headlessui/react";
import { EScreenBreakpoints, useWidth } from "../utils/use-width";
import { navItemData } from "../utils/navitem-data";
import { UserProfile } from "./user-profile";

export const Sidebar: React.FC<{
	open?: boolean;
	onClose?: () => void;
}> = ({ open, onClose }) => {
	const router = useRouter();
	const width = useWidth();

	const sideBarContent = (
		<div className="flex flex-col sm:w-[20%] w-full py-6 h-full bg-white relative">
			<div className="flex items-center justify-between w-[80%] mx-auto">
				<div className="flex items-center sm:mx-auto space-x-3">
					<Image src={logo} width={205} height={100} />
				</div>

				{/* <button className="sm:hidden block" onClick={() => onClose?.()}>
					<Close />
				</button> */}
			</div>

			<Spacer className="h-8" />

			<div className="flex flex-col justify-center items-center w-full">
				{navItemData.map((navItem, idx) => {
					const { pathname } = router;
					const isActive =
						(navItem.href
							? pathname === `/dashboard/${navItem.href}`
							: pathname === "/dashboard") ||
						pathname.split("/")[2] === navItem.href ||
						pathname === `/dashboard/${navItem.href}/${navItem.subNav?.href}`;

					return (
						<NavItem
							key={idx}
							data={navItem}
							active={isActive}
							subNav={navItem.subNav}
						/>
					);
				})}
			</div>

			<div className="absolute bottom-20 flex items-center justify-center w-full">
				<UserProfile />
			</div>
		</div>
	);

	if (width! >= EScreenBreakpoints.MD && !open) {
		return <>{sideBarContent}</>;
	}

	return (
		<Transition
			as={Fragment}
			show={open}
			enter="transition ease-in-out duration-200 transform"
			enterFrom="-translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-75"
			leaveFrom="translate-x-0"
			leaveTo="-translate-x-full">
			{sideBarContent}
		</Transition>
	);
};
