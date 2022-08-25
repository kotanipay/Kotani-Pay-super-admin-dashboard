import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../../components/button";
import {
	CustAreaChart,
	CustBarChart,
	CustPieChart,
} from "../../../components/charts";
import { DateFilter } from "../../../components/filter/date-filter";
import { Layout } from "../../../components/layout";
import { TransactionTable } from "../../../components/transaction-table";
import { UserTable } from "../../../components/user-table";
import { checkAuthStatus } from "../../../utils/check-auth";
import { Spacer } from "../../../utils/spacer";

const Reports = () => {
	const router = useRouter();

	return (
		<Layout>
			<div className="px-10 py-16">
				<p className="font-sans text-lg font-medium">Reports</p>

				<Spacer className="h-3" />

				<div className="flex items-center space-x-4 justify-end w-full">
					<Button
						variant="primary"
						small
						onClick={() => router.push("/dashboard/reports/generate-reports")}>
						Generate full report
					</Button>

					<Button variant="tertiary" small>
						Download options
					</Button>
				</div>

				<Spacer className="h-6" />

				{/* ///////// USER GROWTH /////////   */}

				<div className="border border-neutral-200 overflow-y-auto py-6 px-8 w-full rounded-lg bg-white">
					{/* ///////// USER REPORTS /////////   */}

					<div className="flex items-center justify-between w-full">
						<p className="font-sans">User reports</p>

						<DateFilter />
					</div>

					<Spacer className="h-6" />

					<div className="flex items-center justify-between w-full rounded-lg border bg-white border-neutral-200 py-5">
						<div className="w-full flex flex-col items-center justify-center">
							<p className="font-sans text-xs font-medium">Total Users</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,00</p>
						</div>
						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div className="w-full flex flex-col items-center justify-center">
							<p className="font-sans text-xs font-medium">
								Total verified users
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000</p>
						</div>

						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div className="w-full flex flex-col items-center justify-center">
							<p className="font-sans text-xs font-medium">
								Total unverified user
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000</p>
						</div>
					</div>

					<Spacer className="h-6" />

					<div className="flex flex-col items-center w-full rounded-lg border bg-white border-neutral-200 py-5 px-8">
						<UserTable />

						<Spacer className="h-6" />

						<p className="font-sans text-[#4F4E4E] text-sm">
							Showing 5 out of 5000
						</p>
					</div>

					<Spacer className="h-6" />

					<div className="flex flex-col w-full rounded-lg border bg-white border-neutral-200 py-5 px-8">
						<p className="font-sans">User growth</p>

						<Spacer className="h-9" />

						<CustAreaChart width={950} />
					</div>

					<Spacer className="h-6" />
				</div>

				<Spacer className="h-16" />

				{/* ///////// TRANSACTION REPORTS /////////   */}

				<div className="flex flex-col w-full rounded-lg border bg-white border-neutral-200 py-7 px-8">
					<div className="flex items-center justify-between w-full">
						<p className="font-sans">Transaction reports</p>

						<DateFilter />
					</div>

					<Spacer className="h-6" />

					<div className="flex items-center justify-between w-full rounded-lg border bg-white border-neutral-200 py-5 px-8">
						<div>
							<p className="font-sans text-xs font-medium">
								Total successful withdrawals
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000,000</p>
						</div>
						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div>
							<p className="font-sans text-xs font-medium">
								Total failed withdrawals
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000</p>
						</div>

						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div>
							<p className="font-sans text-xs font-medium">
								Total successful deposits
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000,000</p>
						</div>

						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div>
							<p className="font-sans text-xs font-medium">
								Total failed deposits
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000</p>
						</div>
					</div>

					<Spacer className="h-6" />

					<div className="rounded-lg border bg-white border-neutral-200 py-5 px-8">
						<TransactionTable hideSearch hideButtons />

						<p className="font-sans text-center text-[#4F4E4E] text-sm">
							Showing 5 out of 10,000 results
						</p>
					</div>

					<Spacer className="h-6" />

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
				</div>
			</div>
		</Layout>
	);
};

export default Reports;

export const getServerSideProps = checkAuthStatus(true);
