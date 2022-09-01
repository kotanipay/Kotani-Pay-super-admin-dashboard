import React, { useEffect, useState } from "react";
import { Input } from "../../../components/input";
import { Layout } from "../../../components/layout";
import { Select } from "../../../components/select";
import { UserTable } from "../../../components/user-table";
import { Spacer } from "../../../utils/spacer";
import DownloadIcon from "../../../public/svgs/download.svg";
import { DownloadModal } from "../../../components/modals/download-modal";
import { DateFilter } from "../../../components/filter/date-filter";
import { options } from "../../../components/transaction-table";
import { checkAuthStatus } from "../../../utils/check-auth";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/api";
import { UserDetails } from "../../../utils/types";

const Users = () => {
	const [userSearch, setUserSearch] = useState("");
	const [allUsers, setAllUsers] = useState<UserDetails[]>([]);
	const [openDownload, setOpenDownload] = useState(false);
	const [filteredUsers, setFilterUsers] = useState<UserDetails[]>([]);

	const { data, isLoading: isFetchingAllUsers } = useQuery(
		["all-users"],
		async () => fetchData(`/api/get-users`),
		{
			refetchOnMount: false,
			staleTime: 1000 * 60 * 60 * 24,
		}
	);

	useEffect(() => {
		setFilterUsers(
			allUsers.filter(users =>
				users?.name?.toLowerCase()?.match(userSearch?.toLowerCase())
			)
		);
	}, [userSearch]);

	useEffect(() => {
		setAllUsers(data?.users);
	}, [data]);

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
						<div className="flex items-center justify-between w-full">
							<div className="w-1/2">
								<Input
									type="search"
									placeholder="search users"
									onChange={e => setUserSearch(e.target.value)}
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

						<UserTable
							isLoading={isFetchingAllUsers}
							users={userSearch ? filteredUsers : allUsers}
						/>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Users;

export const getServerSideProps = checkAuthStatus(true);
