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

							<button className="text-primary-100 text-xs mr-6">
								See all balances
							</button>
						</div>

						<Spacer className="h-6" />

						<div className="flex items-center justify-between w-full rounded-lg border bg-white border-neutral-200 py-5 px-4">
							<OverviewDetail icon={Btc} name="Balance" amount="$ 300,000.00" />

							<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>
							<OverviewDetail
								icon={CUSD}
								name="cUSD transacted"
								amount="400,000.00"
							/>
							<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

							<OverviewDetail icon={User} name="Users" amount="500,000.00" />

							<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

							<OverviewDetail
								icon={Wallet}
								name="Wallets"
								amount="600,000.00"
							/>

							<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

							<OverviewDetail icon={Jenga} name="Jenga" amount="600,000.00" />
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

							<RecentUser />
							<RecentUser />
							<RecentUser />
							<RecentUser />
							<RecentUser />

							<button className="text-primary-100 text-center font-sans text-sm">
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
