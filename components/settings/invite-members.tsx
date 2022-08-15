import React from "react";
import Modal from "../modals/modal";
import Close from "../../public/svgs/close.svg";
import { Spacer } from "../../utils/spacer";
import { Input } from "../input";
import { CheckSelect } from "../filter/check-select";
import { Button } from "../button";

const roleOptions = [
	{
		label: "Engineer",
		value: "Engineer",
	},
	{
		label: "Operations",
		value: "Operations",
	},
	{
		label: "Admin",
		value: "Admin",
	},
	{
		label: "View-Only",
		value: "View-Only",
	},
];

export const Invite: React.FC<{
	open?: boolean;
	setOpen?: (open: boolean) => void;
}> = ({ open, setOpen }) => {
	return (
		<Modal
			open={open}
			setOpen={setOpen}
			className="w-[430px] h-[360px] py-4 rounded-lg">
			<div className="flex items-center px-5 justify-between w-full">
				<p className="font-sans text-sm">Invite team member</p>
				<button onClick={() => setOpen?.(false)}>
					<Close />
				</button>
			</div>

			<Spacer className="h-4" />

			<div className="h-[1px] bg-neutral-200 w-full"></div>

			<Spacer className="h-6" />

			<div className="px-5 flex flex-col text-left">
				<Input label="Email" largeLabel placeholder="user@email.com" />

				<Spacer className="h-4" />

				<CheckSelect
					type="Single"
					placeholder="select"
					light
					options={roleOptions}
				/>
			</div>

			<Spacer className="h-7" />

			<div className="h-[1px] bg-neutral-200 w-full"></div>

			<Spacer className="h-8" />

			<div className="flex items-center space-x-2 justify-end w-full px-4">
				<Button
					variant="tertiary"
					small
					className="flex items-center space-x-2">
					<span>Cancel</span>
				</Button>
				<Button
					variant="primary"
					small
					onClick={() => {}}
					className="flex items-center space-x-2">
					<span>Send invite</span>
				</Button>
			</div>
		</Modal>
	);
};
