import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { FunctionComponent } from "react";
import format from "date-fns/format";

export interface DateRangePickerProps {
	defaultValue?: string;
	inputRef: (node: HTMLInputElement | null) => void;
	value?: string | number | Date | readonly (string | number | Date)[];
}

export const CustomDatePicker: React.FC<DateRangePickerProps> = ({
	inputRef,
	value,
}) => {
	//@ts-ignore
	const [startDate, endDate] = value;

	const start = startDate ? format(new Date(startDate), "MMM, do yyyy") : "";
	const end = endDate ? format(new Date(endDate), "MMM, do yyyy") : "";

	return (
		<div className="flex items-center border border-neutral-200 rounded-lg">
			<input
				ref={inputRef}
				className="rounded-lg py-4 px-2 w-1/2 bg-[#F6F7F8]"
			/>
			<input
				className="rounded-lg py-4 ml-[1px] px-2 w-1/2 border-l rounded-l-none focus:rounded-l-lg border-neutral-200 bg-[#F6F7F8]"
				value={end}
			/>
		</div>
	);
};
