import Image from "next/image";
import React, { useState } from "react";
import TrendUp from "../public/svgs/trend-up.svg";
import TrendDown from "../public/svgs/trend-down.svg";
import Copy from "../public/svgs/copy.svg";
import classNames from "classnames";
import { Spacer } from "../utils/spacer";
import { TransactionDetails } from "./modals/transaction-details";

export const TableHead: React.FC<{ title: string; position?: string }> = ({
	title,
	position,
}) => {
	return (
		<th
			className={classNames(
				"py-2 font-sans text-xs text-[#737373] font-light",
				position
			)}>
			{title}
		</th>
	);
};

export const TransactionRow = () => {
	const [openDetails, setOpenDetails] = useState(false);
	const [change, setChange] = useState(false);
	const [status, setStatus] = useState<"success" | "failed" | "pending">(
		"pending"
	);
	const isSuccess = status === "success";
	const isFailure = status === "failed";
	const isPending = status === "pending";

	return (
		<>
			<TransactionDetails
				openDetails={openDetails}
				closeModal={() => setOpenDetails(false)}
			/>

			<tr
				className="text-left cursor-pointer hover:bg-primary-100 hover:bg-opacity-10 hover:px-2 hover:rounded-lg"
				onClick={() => setOpenDetails(true)}>
				<Spacer className="h-2" />

				<td className="py-2 flex items-center space-x-2">
					<button onClick={() => setChange(!change)} className="">
						{change ? <TrendUp /> : <TrendDown />}
					</button>

					<p className="font-sans sm:text-sm sm:font-normal font-medium text-2xl text-neutral-600 ">
						200.00
					</p>
				</td>
				<td className="">
					<span className="flex items-center space-x-2">
						<p className="font-sans text-sm">kjsaNDJ456...</p>

						<button>
							<Copy />
						</button>
					</span>
				</td>

				<td className=" ">
					<p className="font-sans text-sm">10 Nov,2021 </p>
					<p className="font-sans text-xs text-[#605C5C] font-light">
						4 hours ago
					</p>
				</td>

				<td className="text-center">
					<button
						className={classNames(
							"px-5 py-2  rounded-2xl text-sm w-full capitalize",
							{
								"bg-lightgreen text-green": isSuccess,
								"bg-tertiary-100 text-tertiary-300": isPending,
								"bg-secondary-100 text-secondary-200": isFailure,
							}
						)}>
						{status}
					</button>
				</td>
			</tr>
		</>
	);
};
