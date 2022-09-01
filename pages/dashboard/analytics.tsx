import React from "react";
import {
	CustAreaChart,
	CustBarChart,
	CustPieChart,
} from "../../components/charts";
import { DateFilter } from "../../components/filter/date-filter";
import { Layout } from "../../components/layout";
import { Spacer } from "../../utils/spacer";
import Verified from "../../public/svgs/verified.svg";
import Unverified from "../../public/svgs/unverified.svg";
import Total from "../../public/svgs/total.svg";
import { checkAuthStatus } from "../../utils/check-auth";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/api";

export const UserCard = () => {
	return (
		<div className="border border-neutral-200 w-full h-full rounded-lg bg-white py-8 px-8">
			<Spacer className="h-8" />

			<div className="flex flex-col space-y-3">
				<div className="flex items-center space-x-3">
					<Verified />
					<p className="font-sans text-xs font-semibold text-[#4F4E4E]">
						Verified users
					</p>
				</div>
				<p className="font-sans text-xl font-bold">5,000</p>
			</div>

			<Spacer className="h-8" />

			<div className="w-full h-[2px] bg-neutral-200"></div>

			<Spacer className="h-8" />

			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col space-y-3">
					<div className="flex items-center space-x-3">
						<Unverified />
						<p className="font-sans text-xs font-semibold text-[#4F4E4E]">
							Unverified users
						</p>
					</div>
					<p className="font-sans text-xl font-bold">5,000</p>
				</div>

				<button className="flex items-center space-x-1 text-primary-100 text-sm">
					<span>Resolve</span>
					<span className="mt-[2px]">{">"}</span>
				</button>
			</div>

			<Spacer className="h-8" />

			<div className="w-full h-[2px] bg-neutral-200"></div>

			<Spacer className="h-8" />

			<div className="flex flex-col space-y-3">
				<div className="flex items-center space-x-3">
					<Total />
					<p className="font-sans text-xs font-semibold text-[#4F4E4E]">
						Total users
					</p>
				</div>
				<p className="font-sans text-xl font-bold">5,000</p>
			</div>
		</div>
	);
};

const Analytics = () => {
	const { data } = useQuery(
		["user-analytics"],
		async () => fetchData(`/api/user-analytics`),
		{
			refetchOnMount: false,
			staleTime: 1000 * 60 * 60 * 24,
		}
	);

	return (
		<Layout>
			<div className="px-10 py-16">
				<p className="font-sans text-lg font-medium">Analytics</p>

				<Spacer className="h-8" />

				<div className="w-full space-x-5 flex">
					<div className="border border-neutral-200 w-[65%] rounded-lg bg-white py-8 px-8">
						<div className="flex items-center justify-between w-full">
							<p className="font-sans font-medium">Users</p>
							<DateFilter />
						</div>

						<Spacer className="h-10" />

						<CustAreaChart width={600} height={300} data={data?.usersData} />
					</div>

					<div className="w-[35%]">
						<UserCard />
					</div>
				</div>

				<Spacer className="h-8" />

				<div className="flex items-center space-x-5 w-full">
					<div className="border border-neutral-200  rounded-lg bg-white py-8 px-8 w-[65%] h-[430px]">
						<div className="flex items-center justify-between w-full">
							<p className="font-sans font-medium">Transactions flow</p>
							<DateFilter />
						</div>

						<Spacer className="h-6" />

						<CustBarChart />
					</div>
					<div className="border border-neutral-200 rounded-lg bg-white py-8 px-8 w-[35%] h-[430px]">
						<div className="flex items-center justify-between w-full">
							<p className="font-sans font-medium">Transactions status</p>
							<DateFilter />
						</div>

						<div className="flex items-center justify-center">
							<CustPieChart />
						</div>
					</div>
				</div>

				<Spacer className="h-8" />

				<div className="border border-neutral-200 w-full rounded-lg bg-white py-8 px-8">
					<div className="flex items-center justify-between w-full">
						<p className="font-sans font-medium">Balances</p>
						<DateFilter />
					</div>

					<Spacer className="h-10" />

					<CustAreaChart width={1000} height={300} />
				</div>
			</div>
		</Layout>
	);
};

export default Analytics;

export const getServerSideProps = checkAuthStatus(true);
