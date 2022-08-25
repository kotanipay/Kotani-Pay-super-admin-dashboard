import React, { useState } from "react";
import { BreadCrumb } from "../../../components/breadcrumb";
import { Button } from "../../../components/button";
import { Layout } from "../../../components/layout";
import { Spacer } from "../../../utils/spacer";
import testProfile from "../../../public/images/test-profile.jpg";
import Image from "next/image";
import { TransactionTable } from "../../../components/transaction-table";
import { EditProfile } from "../../../components/modals/edit-profile";
import { checkAuthStatus } from "../../../utils/check-auth";

export const Detail: React.FC<{ title: string; value: string }> = ({
	title,
	value,
}) => {
	return (
		<div className="flex flex-col items-center space-y-6">
			<p className="font-sans text-[#4F4E4E] text-xs">{title}</p>
			<p className="font-sans text-sm">{value}</p>
		</div>
	);
};

const UserDetails = () => {
	const [openEdit, setOpenEdit] = useState(false);
	const [verUser, setVerUser] = useState(false);

	return (
		<>
			<EditProfile open={openEdit} closeModal={() => setOpenEdit(false)} />

			<Layout>
				<div className="px-8">
					<Spacer className="h-16" />

					<BreadCrumb />

					<Spacer className="h-8" />

					<div className="flex items-center justify-between w-full">
						<p>User Details</p>

						<div className="flex items-center space-x-4">
							<Button small onClick={() => setOpenEdit(true)}>
								<span className="text-sm">Edit user profile</span>
							</Button>
							<Button small>
								<span className="text-sm">Reset user PIN</span>
							</Button>
						</div>
					</div>

					<Spacer className="h-8" />

					<div className="border-2 bg-white border-neutral-200 rounded-lg py-12">
						<div className="flex flex-col items-center">
							<button
								onClick={() => setVerUser(!verUser)}
								className="rounded-full flex flex-col items-center justify-center bg-[#C4C4C4]] overflow-hidden w-[60px] h-[60px]">
								<Image
									className="flex rounded-full items-center justify-center"
									src={testProfile}
									width={60}
									height={60}
									alt=""
								/>
							</button>

							<Spacer className="h-1" />

							<p className="font-sans font-medium">John Doe</p>
							{verUser ? (
								<span className="font-sans text-green text-xs">
									Verified user
								</span>
							) : (
								<span className="font-sans text-secondary-200 text-xs">
									Unverified user
								</span>
							)}
						</div>

						<Spacer className="h-16" />

						<div className="flex items-center justify-between w-[75%] mx-auto">
							<Detail title="Date joined" value="25th June, 2022" />
							<Detail title="Gender" value="Male" />
							<Detail title="Date of birth" value="25th June, 2022" />
							<Detail title="Occupation" value="Student" />
						</div>
					</div>
					<Spacer className="h-8" />

					<TransactionTable />
				</div>
			</Layout>
		</>
	);
};

export default UserDetails;

export const getServerSideProps = checkAuthStatus(true);
