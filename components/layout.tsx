import React, { useState } from "react";
import { Sidebar } from "./sidebar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [openSideBar, setOpenSideBar] = useState(false);

	return (
		<div className="flex bg-[#FAFAFA] h-screen">
			<Sidebar open={openSideBar} onClose={() => setOpenSideBar(false)} />

			{/* {openSideBar ? null : ( */}
			<div className="sm:w-[80%] w-full flex flex-col h-full overflow-y-auto">
				<main>{children}</main>
			</div>
			{/* // )} */}
		</div>
	);
};
