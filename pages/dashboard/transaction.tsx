import { useQuery } from "@tanstack/react-query";
import { da } from "date-fns/locale";
import React, { useState } from "react";
import { Input } from "../../components/input";
import { Layout } from "../../components/layout";
import { Select } from "../../components/select";
import { TransactionTable } from "../../components/transaction-table";
import { fetchData } from "../../utils/api";
import { checkAuthStatus } from "../../utils/check-auth";
import { Spacer } from "../../utils/spacer";

const Transactions = () => {
	const { data } = useQuery(
		["transactions"],
		async () => fetchData(`/api/get-transactions`),
		{
			refetchOnMount: false,
			staleTime: 1000 * 60 * 60 * 24,
		}
	);

	return (
		<>
			<Layout>
				<div className="py-16 px-10">
					<p className="font-sans text-lg font-medium">Transactions</p>

					<Spacer className="h-8" />

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

					<Spacer className="h-8" />

					<TransactionTable />
				</div>
			</Layout>
		</>
	);
};

export default Transactions;

export const getServerSideProps = checkAuthStatus(true);
