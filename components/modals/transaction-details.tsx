import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import Close from "../../public/svgs/close.svg";
import { Spacer } from "../../utils/spacer";
import Copy from "../../public/svgs/copy.svg";
import { Button } from "../button";
import { DetialsLayout } from "./details-layout";
import classNames from "classnames";

interface TransactionDetailProps {
	openDetails?: boolean;
	closeModal?: () => void;
}

export const Info: React.FC<{
	type: string;
	details: string | JSX.Element;
	hideLine?: boolean;
}> = ({ type, details, hideLine }) => {
	return (
		<>
			<div className="flex items-center justify-between w-full py-4">
				<p className="text-[#737373] font-sans font-light">{type}</p>
				{typeof details !== "string" ? (
					details
				) : (
					<p className="font-sans">{details}</p>
				)}
			</div>

			{hideLine ? null : <div className="h-[1px] bg-neutral-200 w-full"></div>}
		</>
	);
};

export const TransactionDetails: React.FC<TransactionDetailProps> = ({
	openDetails,
	closeModal,
}) => {
	const [status, setStatus] = useState<"success" | "failure" | "pending">(
		"success"
	);
	const isSuccess = status === "success";
	const isFailure = status === "failure";
	const isPending = status === "pending";

	return (
		<>
			<DetialsLayout open={openDetails} close={closeModal}>
				<div className="w-full transition-all transform bg-white shadow-xl h-screen overflow-y-auto">
					<div className="w-full flex items-center space-x-6 border-b-2 px-8 py-6  border-neutral-200">
						<button onClick={() => closeModal?.()}>
							<Close />
						</button>

						<h2 className="text-neutral-400 font-sans font-medium">Details</h2>
					</div>
					<div className="flex items-center justify-between w-full px-10">
						<button
							onClick={() => setStatus("success")}
							className="py-2 border border-green">
							SUCCESS
						</button>
						<button
							onClick={() => setStatus("failure")}
							className="py-2 border border-green">
							FAILED
						</button>
						<button
							onClick={() => setStatus("pending")}
							className="py-2 border border-green">
							PENDING
						</button>
					</div>

					<div className="px-8 py-6">
						<div
							className={classNames(
								"w-full px-4 py-6 text-center rounded-md font-sans",
								{
									"bg-lightgreen ": isSuccess,
									"bg-secondary-100": isFailure,
									"bg-tertiary-100": isPending,
								}
							)}>
							{isSuccess ? "Transaction successful" : null}
							{isFailure
								? "DISBURSE FAILED: Insufficient funds in customer wallet"
								: null}
							{isPending ? "Transaction queued : pending payment" : null}
						</div>

						{isSuccess ? null : (
							<>
								<Spacer className="h-6" />

								<div className="w-full flex items-center justify-center">
									<Button>
										{isPending ? "Pause Payment" : "Retry payment"}
									</Button>
								</div>
							</>
						)}

						<Spacer className="h-6" />

						<div>
							<p className="font-sans font-semibold">Transaction Information</p>

							<Spacer className="h-6" />
							<Info type="Type" details="Deposit" />
							<Info type="Amount" details="$200.00" />
							<Info type="Date" details="18 Nov, 2020" />
							<Info type="Wallet debited" details="USD" />
							<Info
								type="Tx hash"
								details={
									<div className="flex items-center space-x-2">
										<p className="font-sans">kjsaNDJ456saNDJ45...</p>
										<button className="text-primary-100">
											<Copy />
										</button>
									</div>
								}
							/>
							<Info
								type="Description"
								details="some stuff to sort out"
								hideLine
							/>
						</div>

						<Spacer className="h-6" />

						<div className="w-full h-4 bg-[#F5F5F5] rounded-lg"></div>

						<Spacer className="h-6" />

						<div>
							<p className="font-sans font-semibold">Beneficiary details</p>

							<Spacer className="h-6" />
							<Info type="Name" details="John Doe" />
							<Info type="Phone number" details="254 980451235" />
							<Info type="Momo" details="MTN Mobile" />
							<Info type="Bank" details="" />
							<Info type="Account number" details="" />
						</div>

						<Spacer className="h-8" />
					</div>
				</div>
			</DetialsLayout>
		</>
	);
};
