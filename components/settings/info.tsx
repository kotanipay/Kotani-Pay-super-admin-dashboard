import React from "react";
import { Spacer } from "../../utils/spacer";
import { Button } from "../button";
import { Input } from "../input";
import Plus from "../../public/svgs/plus.svg";

export const AccountInfo = () => {
	return (
		<div className="flex flex-col items-center justify-center w-[70%] mx-auto rounded-lg border bg-white border-neutral-200 py-5 px-8">
			<div className="w-[70%] mx-auto">
				<Spacer className="h-8" />

				<button
					style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)" }}
					className="relative rounded-full flex items-center justify-center bg-[#C4C4C4] border-4 border-white w-[100px] h-[100px] mx-auto">
					<span className="absolute right-0 bottom-0">
						<Plus />
					</span>
				</button>

				<Spacer className="h-8" />

				<Input label="Full Name" largeLabel placeholder="Muhammed Shaik" />

				<Spacer className="h-8" />

				<Input label="Email" largeLabel placeholder="user@email.com" />

				<Spacer className="h-8" />

				<div className="flex justify-center">
					<Button
						onClick={() => {
							// if (!isValidPassword(password) && !!password) {
							// 	setPasswordErr(ErrorType.PASSWORD);
							// }
						}}>
						Update
					</Button>
				</div>
				<Spacer className="h-8" />
			</div>
		</div>
	);
};
