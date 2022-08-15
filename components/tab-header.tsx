import { ReactNode } from "react";

interface TabHeaderProps {
	selected?: boolean;
	onClick?: () => void;
	children?: ReactNode;
}

export const TabHeader: React.FC<TabHeaderProps> = ({
	selected,
	children,
	onClick,
}) => {
	return (
		<div onClick={onClick}>
			<div className="relative pb-2 ">
				<p
					className={
						selected
							? " text-primary-100 font-medium "
							: " text-[#737373] text-opacity-70"
					}>
					{children}
				</p>

				{selected ? (
					<div
						className="w-full bg-primary-100 absolute bottom-0"
						style={{
							height: "4px",
							borderRadius: "3px",
						}}
					/>
				) : null}
			</div>
		</div>
	);
};
