import classNames from "classnames";
import React, { useState } from "react";
import { Spacer } from "../utils/spacer";
import { Input } from "./input";
import { DownloadModal } from "./modals/download-modal";
import { Select } from "./select";
import { TableHead, TransactionRow } from "./transaction-row";
import DownloadIcon from "../public/svgs/download.svg";
import { Button } from "./button";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { DateFilter } from "./filter/date-filter";

export const options = [
	{
		label: "All transactions",
		value: "All transactions",
	},
	{
		label: "Deposits",
		value: "Deposits",
	},
	{
		label: "Withdrawals",
		value: "Withdrawals",
	},
];

export const TableHeader: React.FC<{ title: string; position?: string }> = ({
	title,
	position,
}) => {
	return (
		<th
			className={classNames(
				"text-[#737373] font-sans font-light text-xs w-1/5",
				position
			)}>
			{title}
		</th>
	);
};

export const TransactionTable: React.FC<{
	hideSearch?: boolean;
	hideButtons?: boolean;
}> = ({ hideSearch, hideButtons }) => {
	const [openDownload, setOpenDownload] = useState(false);

	return (
		<>
			<DownloadModal open={openDownload} setOpen={setOpenDownload} />

			<div
				className={classNames("", {
					"py-8 px-20 flex flex-col bg-white border border-neutral-200 rounded-lg":
						!hideSearch,
				})}>
				{hideSearch ? null : (
					<>
						<Input type="search" placeholder="search transaction" />

						<Spacer className="h-8" />

						<div className="flex items-center justify-between w-full">
							<div className="w-1/4">
								<Select options={options} className="" listBoxStyle="" />
							</div>

							<div className="flex items-center justify-end space-x-5 w-1/3 ">
								<button
									onClick={() => setOpenDownload(true)}
									className="flex items-center justify-end space-x-2 w-full">
									<DownloadIcon />
									<span className="font-sans text-sm">Download</span>
								</button>

								<div className="w-full flex justify-end">
									<DateFilter />
								</div>
							</div>
						</div>

						<Spacer className="h-8" />
					</>
				)}
				<table className="w-full">
					<thead className="text-left">
						<tr className="text-left">
							<TableHead title="Amount ($)" position="pl-2" />
							<TableHead title="Tx hash" />
							<TableHead title="Date" />
							<TableHead title="Phone number" position="text-left" />
							<TableHead
								title="Status"
								position="text-left bg-white w-[15%] pr-2"
							/>
						</tr>
					</thead>
					<tbody className="text-left h-[300px] overflow-y-auto">
						{Array(6)
							.fill(null)
							.map((row, idx) => {
								return <TransactionRow key={idx} />;
							})}
					</tbody>
				</table>

				<Spacer className="h-6" />

				{hideButtons ? null : (
					<div className="flex items-center justify-end w-full space-x-4">
						<Button small variant="tertiary" disabled>
							<span className="text-xs">Previous</span>
						</Button>
						<Button small variant="tertiary">
							<span className="text-xs">Next</span>
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
