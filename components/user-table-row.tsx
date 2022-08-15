import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spacer } from "../utils/spacer";

export const UserTableRow = () => {
	const router = useRouter();
	const [status, setStatus] = useState<"success" | "failed">("failed");
	const isSuccess = status === "success";
	const isFailure = status === "failed";

	const id = 1234;

	return (
		<tr
			className="text-left cursor-pointer hover:bg-primary-100 hover:bg-opacity-10 hover:px-2"
			onClick={() => router.push(`users/${id}`)}>
			<Spacer className="h-2" />

			<td className="py-2 flex items-center space-x-2 pl-2">
				<p className="font-sans sm:text-sm sm:font-normal font-medium text-2xl text-neutral-600 ">
					John Doe
				</p>
			</td>
			<td>
				<div className="flex items-center space-x-2">
					<p className="font-sans text-sm">67378980</p>
				</div>
			</td>

			<td>
				<p className="font-sans text-sm">24th May, 2021</p>
			</td>
			<td className="text-left">
				<p className="font-sans text-sm">233 378980</p>
			</td>

			<td className="text-center pr-2">
				<button
					className={classNames("py-2 rounded-2xl text-sm w-full", {
						"bg-lightgreen text-green": isSuccess,
						"bg-secondary-100 text-secondary-200": isFailure,
					})}>
					{isSuccess ? "updated" : "Not Upgraded"}
				</button>
			</td>
		</tr>
	);
};
