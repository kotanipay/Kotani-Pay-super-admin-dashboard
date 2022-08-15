import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spacer } from "../utils/spacer";
import { Button } from "./button";

export const DownloadRow = () => {
	const router = useRouter();

	return (
		<tr className="text-left">
			<Spacer className="h-2" />

			<td className="py-2 flex items-center space-x-2 pl-2">
				<p className="font-sans sm:text-sm sm:font-normal font-medium text-2xl text-neutral-600 ">
					Transaction reports
				</p>
			</td>
			<td>
				<div className="flex items-center space-x-2">
					<p className="font-sans text-sm">24th May, 2021</p>
				</div>
			</td>

			<td>
				<p className="font-sans text-sm">pdf</p>
			</td>

			<td className="text-left pr-2">
				<Button variant="primary" small>
					Download
				</Button>
			</td>
		</tr>
	);
};
