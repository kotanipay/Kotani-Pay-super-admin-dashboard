import React, { ReactNode } from "react";
import classnames from "classnames";
export interface ButtonProps {
	variant?: "primary" | "secondary" | "tertiary";
	className?: string;
	disabled?: boolean;
	isFullWidth?: boolean;
	onClick?: () => void;
	loading?: boolean;
	small?: boolean;
	children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	disabled,
	onClick,
	small,
	className,
	loading,
	isFullWidth,
}) => {
	const isPrimary = variant === "primary";
	const isSecondary = variant === "secondary";
	const isTertiary = variant === "tertiary";

	const loadingStyles = (
		<div className="inline-flex items-center relative">
			<div className="h-4 w-4 rounded-full border-2 border-t-white border-r-white border-primary-100 animate-spin mr-3 absolute"></div>
			<div className="h-4 w-4 rounded-full border-2 border-opacity-60 border-white animate-spin mr-3"></div>
			<p> Loading ...</p>
		</div>
	);

	return (
		<button
			onClick={onClick}
			disabled={disabled || loading}
			className={classnames(
				`rounded-2xl leading-6 font-medium  transition duration-75 ease-linear font-sans ${className}`,
				{
					"px-12 lg:py-3 py-2": !small,
					"px-5 py-2": small,
					"px-5 py-[5px]": small && isTertiary,
					"hover:shadow-md": !disabled,
					"w-full": isFullWidth,
					"bg-primary-100 cursor-not-allowed text-white": isPrimary && loading,
					"bg-primary-100 text-white": isPrimary && !loading,
					"hover:bg-primary-200": isPrimary && !disabled,
					"opacity-20 cursor-not-allowed": isPrimary && disabled,
					"border border-[#161617] border-opacity-5 text-sm leading-5 text-neutral-700":
						isSecondary,
					"border-2 border-primary-100 text-primary-100 font-sans text-sm":
						isTertiary,
					"border outline-primary-100 border-opacity-40 text-primary-100 text-opacity-40 cursor-not-allowed":
						isTertiary && disabled,
				},
				className
			)}>
			{loading ? loadingStyles : children}
		</button>
	);
};
