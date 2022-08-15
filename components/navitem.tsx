import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavItemsValues } from "../utils/navitem-data";
import Generate from "../public/svgs/generate.svg";
import { useRouter } from "next/router";

export const NavItem: React.FC<{
	data: NavItemsValues;
	active?: boolean;
	subNav?: NavItemsValues;
}> = ({ data, active, subNav }) => {
	const router = useRouter();
	const { name, icon: Icon, href } = data;
	const [openSubNav, setOpenSubNav] = useState(false);

	useEffect(() => {
		if (router.pathname === "/dashboard/reports/generate-reports") {
			setOpenSubNav(true);
		}
	}, [router.pathname]);

	return (
		<>
			<Link href={`/dashboard/${href}`}>
				<a
					className={classNames(
						"w-[80%] mx-auto flex items-center space-x-3 py-4 px-8",
						{
							"bg-primary-100 bg-opacity-30 rounded-lg": active,
						}
					)}>
					<Icon
						className={classNames("mr-6", {
							"text-[#4F4E4E] ": !active,
							"text-primary-100": active,
						})}
					/>

					<p
						className={classNames("font-sans text-base", {
							"text-[#4F4E4E] ": !active,
							"text-primary-100": active,
						})}>
						{name}
					</p>
					{subNav?.name ? (
						<span
							onClick={() => {
								if (router.pathname === "/dashboard/reports") {
									setOpenSubNav(!openSubNav);
									return;
								}
							}}
							className={
								openSubNav
									? " text-primary-100 rotate-90  px-2"
									: active
									? "text-primary-100 -rotate-90  px-2"
									: "text-neutral-600 -rotate-90  px-2"
							}>
							{" >"}
						</span>
					) : null}
				</a>
			</Link>

			{openSubNav && subNav ? (
				<Link href={`/dashboard/${href}/${subNav?.href}`}>
					<a
						className={classNames(
							"w-[80%] mx-auto flex items-center space-x-3 py-4 px-8"
						)}>
						<Generate
							className={classNames("mr-2", {
								"text-[#4F4E4E] ": !active,
								"text-primary-100": active,
							})}
						/>

						<p
							className={classNames("font-sans text-sm", {
								"text-[#4F4E4E] ": !active,
								"text-primary-100": active,
							})}>
							{subNav?.name}
						</p>
					</a>
				</Link>
			) : null}
		</>
	);
};
