import React from "react";
import Modal from "./modal";
import Close from "../../public/svgs/close.svg";
import HeadsUp from "../../public/svgs/heads-up.svg";
import Download from "../../public/images/download.png";
import Image from "next/image";
import { Spacer } from "../../utils/spacer";
import { Button } from "../button";

export const DownloadModal: React.FC<{
	open: boolean;
	setOpen?: (open: boolean) => void;
}> = ({ open, setOpen }) => {
	return (
		<Modal
			open={open}
			setOpen={setOpen}
			className="rounded-2xl sm:w-[430px] max-w-[430px] sm:h-[355px]">
			<>
				<div
					className={`px-7 py-6 border-b border-neutral-200 lg:bg-opacity-50 flex lg:items-center items-start justify-between rounded-t-2xl`}>
					<p
						className={`lg:w-full w-5/6 text-left flex items-center space-x-2`}>
						<HeadsUp />
						<span>Heads up!</span>
					</p>

					<button onClick={() => setOpen?.(false)}>
						<Close />
					</button>
				</div>

				<Spacer className="h-10" />

				<div className="flex flex-col space-y-5 items-center justify-center px-7 border-b border-neutral-200">
					<Image src={Download} width={37} height={37} />

					<p className="font-sans text-sm font-medium">
						You’re about to download transaction log for{" "}
						<span className="font-semibold">17th May, 2020</span> to{" "}
						<span className="font-semibold"> 22nd May, 2020</span>
					</p>

					<Spacer className="h-8" />
				</div>

				<Spacer className="h-4" />

				<div className="inline-flex space-x-3 justify-end px-7 w-full">
					<Button
						variant="tertiary"
						className="px-[12px] lg:py-[10px] border-2">
						Change filters
					</Button>

					<Button className="px-[12px] lg:py-[10px]">Download</Button>
				</div>

				<Spacer className="h-4" />
			</>
		</Modal>
	);
};
