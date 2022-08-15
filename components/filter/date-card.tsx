import React, { useRef, useState } from "react";
import { Spacer } from "../../utils/spacer";
import { Button } from "../button";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { CheckSelect } from "./check-select";
import { CustomDatePicker } from "./date-picker";
import format from "date-fns/format";

const selectDates = ["Today", "7 Days", "30 Days", "1 year"];

export const DateCard = () => {
	const [date, setDate] = useState<Date[]>([]);
	const start = date[0] ? format(new Date(date[0]), "MMM, do yyyy") : "";

	return (
		<div className="bg-[#FAFBFC] rounded-lg border border-neutral-200">
			<div className="flex items-center justify-between w-full px-6 py-5 border-b border-neutral-200">
				{selectDates.map((selectDate, idx) => {
					return (
						<button
							key={idx}
							className="font-sans text-xs hover:text-primary-100">
							{selectDate}
						</button>
					);
				})}
			</div>

			<Spacer className="h-5" />

			<div className="flex flex-col space-y-4 justify-start px-6 border-b border-neutral-200">
				<p className="font-sans text-xs">Custom date range</p>

				<div className="relative">
					<Flatpickr
						options={{
							mode: "range",
							dateFormat: "M j, Y",
							position: "below left",
							defaultDate: new Date(),
						}}
						value={date[0]}
						onChange={event => setDate(event)}
						render={({}, ref) => {
							return <CustomDatePicker inputRef={ref} value={date} />;
						}}
					/>
				</div>

				<Spacer className="h-1" />

				<p className="font-sans text-xs">Status</p>

				<CheckSelect />

				<Spacer className="h-3" />
			</div>

			<Spacer className="h-5" />

			<div className="flex items-center justify-end w-full px-6 space-x-4">
				<Button small variant="tertiary">
					<span className="text-xs">Clear</span>
				</Button>
				<Button small variant="primary">
					<span className="text-xs">Apply filter</span>
				</Button>
			</div>

			<Spacer className="h-5" />
		</div>
	);
};
