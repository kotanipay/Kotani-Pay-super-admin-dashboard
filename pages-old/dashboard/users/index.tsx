import React, { useState } from "react";
import { Input } from "../../../components/input";
import { Layout } from "../../../components/layout";
import { Select } from "../../../components/select";
import { UserTable } from "../../../components/user-table";
import { Spacer } from "../../../utils/spacer";
import DownloadIcon from "../../../public/svgs/download.svg";
import { DownloadModal } from "../../../components/modals/download-modal";
import { DateFilter } from "../../../components/filter/date-filter";
import { options } from "../../../components/transaction-table";

const Users = () => {
	const [openDownload, setOpenDownload] = useState(false);
	return (
		<>
			<DownloadModal open={openDownload} setOpen={setOpenDownload} />

			<Layout>
				<div className="py-16 px-10">
					<p className="font-sans text-lg font-medium">All Users</p>

					<Spacer className="h-8" />

					<div className="flex items-center justify-between w-full rounded-lg border bg-white border-neutral-200 py-5 px-4">
						<div className="flex flex-col w-1/3 items-center justify-center">
							<p className="font-sans text-xs font-medium">Total Users</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000,000</p>
						</div>
						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div className="flex flex-col w-1/3 items-center justify-center">
							<p className="font-sans text-xs font-medium">
								Total verified users
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000</p>
						</div>

						<div className="h-12 w-[1px] bg-[#C5C5C6]"></div>

						<div className="flex flex-col w-1/3 items-center justify-center">
							<p className="font-sans text-xs font-medium">
								Total unverified user
							</p>

							<Spacer className="h-5" />

							<p className="font-sans text-lg font-semibold">5,000,000</p>
						</div>
					</div>

					<Spacer className="h-8" />

					<div className="flex flex-col bg-white border border-neutral-200 rounded-lg py-8 px-20">
						<Input type="search" placeholder="search transaction" />

						<Spacer className="h-8" />

						<div className="flex items-center justify-between w-full">
							<div className="w-1/4">
								<Select
									options={options}
									className="bg-[#F6F7F8] py-[4px]"
									listBoxStyle=""
								/>
							</div>

							<div className="flex items-center justify-end space-x-5 w-1/3 ">
								<button
									onClick={() => setOpenDownload(true)}
									className="flex items-center justify-end space-x-2 w-full">
									<DownloadIcon />
									<span className="font-sans text-sm">Download</span>
								</button>

								<div className="w-1/2 justify-end flex">
									<DateFilter />
								</div>
							</div>
						</div>

						<Spacer className="h-8" />
						<UserTable />
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Users;
