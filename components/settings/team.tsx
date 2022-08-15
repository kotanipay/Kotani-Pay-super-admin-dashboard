import React, { useState } from "react";
import { Button } from "../button";
import Plus from "../../public/svgs/plus-sm.svg";
import ManageIcon from "../../public/svgs/manage.svg";
import { Spacer } from "../../utils/spacer";
import classNames from "classnames";
import { TableHead } from "../transaction-row";
import { Invite } from "./invite-members";

export const TeamRow = () => {
	return (
		<tr className="text-center">
			<Spacer className="h-2" />

			<td className="py-2 flex items-center space-x-2 w-full pl-4">
				<p className="font-sans sm:text-sm sm:font-normal font-medium text-2xl text-neutral-600">
					John Doe
				</p>
			</td>
			<td className="text-left">
				<p className="font-sans text-sm">Chris@Kotanipay.com</p>
			</td>

			<td className="text-left">
				<p className="font-sans text-sm">Engineer</p>
			</td>
		</tr>
	);
};

export const Team = () => {
	const [openInvite, setOpenInvite] = useState(false);

	return (
		<>
			<Invite open={openInvite} setOpen={setOpenInvite} />

			<div className="flex flex-col items-center justify-center w-[80%] mx-auto rounded-lg border bg-white border-neutral-200 py-5 px-8">
				<div className="flex items-center justify-between w-full">
					<p className="font-sans w-1/3 pl-4">Team members (4)</p>

					<div className="flex items-center space-x-4 justify-end w-full">
						<Button
							variant="tertiary"
							small
							className="flex items-center space-x-2">
							<ManageIcon />
							<span>Manage roles</span>
						</Button>
						<Button
							variant="primary"
							small
							onClick={() => setOpenInvite(true)}
							className="flex items-center space-x-2">
							<Plus />
							<span>Add Team member</span>
						</Button>
					</div>
				</div>

				<Spacer className="h-8" />

				<div className="bg-neutral-200 h-[1px] w-full"></div>

				<Spacer className="h-8" />

				<table className="w-full">
					<thead className="text-left">
						<tr className="text-left">
							<TableHead title="Name" position="pl-4" />
							<TableHead title="Email" position="text-left" />
							<TableHead title="Role" position="text-left" />
						</tr>
					</thead>
					<tbody className="text-left">
						{Array(4)
							.fill(null)
							.map((row, idx) => {
								return <TeamRow key={idx} />;
							})}
					</tbody>
				</table>
			</div>
		</>
	);
};
