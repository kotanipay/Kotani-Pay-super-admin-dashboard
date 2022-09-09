import React from "react";
import { Input } from "../../components/input";
import { Layout } from "../../components/layout";
import { Select } from "../../components/select";
import { Spacer } from "../../utils/spacer";
import Btc from "../../public/svgs/btc.svg";
import CUSD from "../../public/svgs/c-usd.svg";
import Wallet from "../../public/svgs/wallet.svg";
import Jenga from "../../public/svgs/jenga.svg";
import User from "../../public/svgs/user-sm.svg";
import { TransactionTable } from "../../components/transaction-table";
import { RecentUser, UserProfile } from "../../components/user-profile";
import Upload from "../../public/svgs/upload.svg";
import { Button } from "../../components/button";
import { CustAreaChart } from "../../components/charts";
import Dropdown from "../../components/dropdown";
import { DateFilter } from "../../components/filter/date-filter";
import { checkAuthStatus } from "../../utils/check-auth";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/api";
import { UserDetails } from "../../utils/types";
import { useRouter } from "next/router";

export const OverviewDetail: React.FC<{
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	name: string;
	amount: string;
}> = ({ icon: Icon, name, amount }) => {
	return (
		<div>
			<p className="flex items-center space-x-1">
				<Icon />
				<span className="font-sans text-xs font-medium">{name}</span>
			</p>

			<Spacer className="h-4" />

			<p className="font-sans text-lg font-semibold">{amount}</p>
		</div>
	);
};

const Index = () => {
	const router = useRouter();
	const { data, isLoading: isFetchingRecentUsers } = useQuery(
		["recent-users"],
		async () => fetchData(`/api/recent-users`),
		{
			refetchOnMount: false,
			staleTime: 1000 * 60 * 60 * 24,
		}
	);

	const recentUsers: UserDetails[] = data?.users;

	return (
		<Layout>
			<div className="py-14 pl-8">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center space-x-16 w-full">
						<p className="font-sans text-2xl font-semibold">Hello Muhammed</p>
					</div>
				</div>

				<Spacer className="h-8" />

				<div className="flex items-center ">
					<div className="w-[68%] h-screen">
						<div className="flex items-center justify-between w-full">
							<div className="w-1/2">
								<Input type="search" placeholder="Search dashboard" />
							</div>

							<div className="flex items-center space-x-3 px-2">
								<Button className="flex items-center space-x-2" small>
									<span>
										<Upload />
									</span>
									<span className="text-sm">Upload user ID</span>
								</Button>
								<Button small>
									<span className="text-sm">Reset user PIN</span>
								</Button>
							</div>
						</div>

						<Spacer className="h-5" />

						<div className="flex items-center justify-between w-full">
							<p className="font-sans text-lg">Overview</p>

							{/* <button className="text-primary-100 text-xs mr-6">
								See all balances
							</button> */}
						</div>

						<Spacer className="h-6" />

						<div className="flex items-center space-x-10 justify-center w-full rounded-lg border bg-white border-neutral-200 py-5 px-4">
							<OverviewDetail
								icon={CUSD}
								name="cUSD transacted"
								amount="400,000.00"
							/>

							<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

							<OverviewDetail icon={User} name="Users" amount="500,000.00" />
						</div>

						<Spacer className="h-8" />

						<div className="border border-neutral-200 w-full rounded-lg bg-white py-8 px-4">
							<div className="w-1/4">
								<Dropdown />
							</div>

							<Spacer className="h-10" />

							<CustAreaChart />
						</div>

						<Spacer className="h-8" />

						<div className="border border-neutral-200 h-[360px] overflow-y-auto py-6 px-8 w-full rounded-lg bg-white">
							<div className="flex items-center justify-between">
								<p className="font-sans font-semibold">Recent transactions</p>
								<div className="w-1/5">
									<Select placeholder="Daily" className="py-[6px]" />
								</div>
							</div>

							<Spacer className="h-4" />

							<TransactionTable hideSearch />
						</div>

						<Spacer className="h-16" />
					</div>

					<div className="w-[32%] px-6 h-screen flex flex-col items-start">
						<div className="flex flex-col space-y-6 px-5 py-6 bg-white rounded-lg w-full border border-neutral-200">
							<p className="text-left font-sans font-semibold">Recent Users</p>

							{isFetchingRecentUsers ? (
								<div className=" inline-flex  items-center justify-center">
									<div className=" h-4 w-4 rounded-full border-2 border-t-white border-r-white border-primary-200 animate-spin mr-3"></div>
									<p className="font-sans text-primary-200"> Loading ...</p>
								</div>
							) : (
								recentUsers?.map(user => {
									return <RecentUser key={user._id} user={user} />;
								})
							)}

							<button
								onClick={() => router.push("/dashboard/users")}
								className="text-primary-100 text-center font-sans text-sm">
								See all users
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;

export const getServerSideProps = checkAuthStatus(true);
