import React from "react";
import { Layout } from "../../../components/layout";
import { Spacer } from "../../../utils/spacer";
import generateImg from "../../../public/images/generate.png";
import Image from "next/image";
import { Button } from "../../../components/button";
import { DownloadTable } from "../../../components/download-table";
import { CheckSelect } from "../../../components/filter/check-select";
import { DateFilter } from "../../../components/filter/date-filter";

const reports = [
	{
		label: "Transaction reports",
		value: "Transaction",
	},
	{
		label: "Balance reports",
		value: "Balance",
	},
	{
		label: "User reports",
		value: "Users",
	},
];

const format = [
	{
		label: "pdf",
		value: "pdf",
	},
	{
		label: "csv",
		value: "csv",
	},
	{
		label: "print",
		value: "print",
	},
];

const Generate = () => {
	return (
		<Layout>
			<div className="px-10 py-16">
				<p className="font-sans text-lg font-medium">Reports</p>

				<Spacer className="h-8" />

				<div className="relative">
					<div className="flex items-center justify-between border border-neutral-200 overflow-y-auto w-full rounded-lg bg-white">
						<div className="flex flex-col px-8 py-5">
							<p className="font-sans">Generate app usage reports</p>

							<Spacer className="h-20" />

							<Button variant="primary" small>
								Generate report
							</Button>
						</div>

						<Image src={generateImg} />
					</div>

					<div className="absolute top-1/3 translate-y-4 left-8 flex items-center space-x-3">
						<CheckSelect options={reports} placeholder="select reports" />

						<DateFilter />

						<CheckSelect options={format} placeholder="Download formats" />
					</div>
				</div>

				<Spacer className="h-8" />

				<p className="font-sans">Generated reports (5)</p>

				<Spacer className="h-4" />

				<div className="flex flex-col items-center justify-between border border-neutral-200 overflow-y-auto w-full rounded-lg bg-white py-5 px-8">
					<DownloadTable />

					<Spacer className="h-5" />
				</div>
			</div>
		</Layout>
	);
};

export default Generate;
