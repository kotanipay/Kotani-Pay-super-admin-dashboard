import React from "react";
import DashboardIcon from "../public/svgs/dashboard.svg";
import AnalyticsIcon from "../public/svgs/analytics.svg";
import UserIcon from "../public/svgs/users.svg";
import TransactionIcon from "../public/svgs/transaction.svg";
import ReportIcon from "../public/svgs/report.svg";
import generateIcon from "../public/svgs/generate.svg";
export interface NavItemsValues {
	name: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	href: string;
	active?: boolean;
	subNav?: {
		name: string;
		icon: React.FC<React.SVGProps<SVGSVGElement>>;
		href: string;
	};
}

export const navItemData: NavItemsValues[] = [
	{
		name: "Dashboard",
		icon: DashboardIcon,
		href: "",
	},
	{
		name: "Analytics",
		icon: AnalyticsIcon,
		href: "analytics",
	},
	{
		name: "Users",
		icon: UserIcon,
		href: "users",
	},
	{
		name: "Transaction",
		icon: TransactionIcon,
		href: "transaction",
	},
	{
		name: "Reports",
		icon: ReportIcon,
		href: "reports",
		subNav: {
			name: "Generated reports",
			icon: generateIcon,
			href: "generate-reports",
		},
	},
];
