import React from "react";
import { DetialsLayout } from "./details-layout";
import Close from "../../public/svgs/close.svg";
import { Spacer } from "../../utils/spacer";
import { Input } from "../input";
import { Select } from "../select";
import { Button } from "../button";

export const EditProfile: React.FC<{
	open?: boolean;
	closeModal?: () => void;
}> = ({ open, closeModal }) => {
	return (
		<DetialsLayout
			open={open}
			close={closeModal}
			modalWidth="lg:w-[50%] w-full">
			<div className="w-full transition-all transform bg-white shadow-xl h-screen overflow-y-auto">
				<div className="w-full flex items-center space-x-6 border-b-2 px-8 py-6  border-neutral-200">
					<button onClick={() => closeModal?.()}>
						<Close />
					</button>

					<h2 className="text-neutral-400 font-sans font-medium">
						Edit Profile
					</h2>
				</div>

				<Spacer className="h-16" />

				<div className="px-16 w-full">
					<Input label="Full Name" largeLabel />

					<Spacer className="h-8" />

					<div className="flex items-center space-x-4 justify-between">
						<Input label="Date of Birth" type="date" largeLabel />

						<Input label="Occupation" largeLabel />
					</div>

					<Spacer className="h-6" />

					<div className="w-1/2">
						<Select label="Gender" />
					</div>

					<Spacer className="h-16" />

					<div className="w-3/5 mx-auto">
						<Button isFullWidth small>
							Save updates
						</Button>
					</div>
				</div>
			</div>
		</DetialsLayout>
	);
};
