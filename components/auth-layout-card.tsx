import Image from "next/image";
import React, { ReactNode } from "react";
import Logo from "../public/images/logo.png";

export const AuthLayoutCard: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<div className="w-full h-screen m-0 p-0 bg-neutral-100 auth-pg">
			<div className="auth-card">
				<div className="flex items-center justify-center w-full">
					<Image src={Logo} width={240} height={130} />
				</div>
				<div
					style={{ boxShadow: "4px 4px 90px rgba(0, 0, 0, 0.1)" }}
					className="flex flex-col sm:w-[500px] w-[330px] rounded-3xl bg-white border-2 border-neutral-200 max-h-[570px] py-8 px-9">
					{children}
				</div>
			</div>
		</div>
	);
};
