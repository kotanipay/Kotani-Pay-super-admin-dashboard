import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import CaretDown from "../public/svgs/caret-down.svg";

export const BreadCrumb: React.FC = () => {
	const router = useRouter();

	const crumbs = router.asPath.split("/");

	return (
		<div className="flex items-center space-x-2">
			{crumbs.map((crumb, idx) => {
				const isLast = idx === crumbs.length - 1;
				const isFirst = idx === 0;

				return (
					<button
						key={idx}
						onClick={() => {
							if (isLast) {
								return;
							}
							router.push(`/dashboard/${crumb}`);
						}}
						className={classNames("flex items-center space-x-2", {
							"font-sans text-lg font-semibold cursor-not-allowed": isLast,
							" text-[#737373]": !isLast,
							hidden: crumb === "dashboard",
						})}>
						<span>{crumb === "users" ? "All users" : crumb}</span>
						<span
							className={classNames("-rotate-90", {
								hidden: isLast || isFirst,
							})}>
							<CaretDown />
						</span>
					</button>
				);
			})}
		</div>
	);
};
