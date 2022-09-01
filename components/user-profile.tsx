import Image from "next/image";
import React from "react";
import testProfile from "../public/images/profile.png";
import CaretDown from "../public/svgs/caret-filled.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import Logout from "../public/svgs/log-out.svg";
import Settings from "../public/svgs/settings.svg";
import { useApi } from "../utils/api";
import { useRouter } from "next/router";
import { UserDetails } from "../utils/types";

export const UserProfile = () => {
	const router = useRouter();
	const { submit: logout } = useApi("/api/logout", {
		onSuccess() {
			router.push("/");
		},
	});

	return (
		<>
			<div className=" flex ">
				<div className="rounded-full flex items-center justify-center bg-[#C4C4C4]] overflow-hidden w-[49px] h-[49px]">
					<Image
						className="flex rounded-full items-center justify-center"
						src={testProfile}
						width={50}
						height={50}
						alt=""
					/>
				</div>

				<div className="flex ml-2 items-center">
					<div className="flex flex-col text-left">
						<p className="font-sans font-semibold">Muhammed Shaik</p>
						<p className="font-sans text-xs">admin@kotanipay.com</p>
					</div>
					<div className=" relative ">
						<Menu as="div">
							<Menu.Button className="flex font-sans text-sm leading-5 text-neutral-500 items-center bg-none ">
								{({ open }) => (
									<>
										<span className={open ? "rotate-180 ml-2" : "ml-2"}>
											{<CaretDown />}
										</span>
									</>
								)}
							</Menu.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95">
								<div className="flex flex-col">
									<Menu.Items className="flex flex-col space-y-2 py-4 absolute -top-36 -right-6 w-48 bg-[#F6F7F8] origin-top-right border border-[#B0B0B0] border-opacity-20 rounded-md shadow-xl ">
										<Menu.Item>
											<Link href="/dashboard/settings" className={``}>
												<a className="flex items-center space-x-2 px-3 pb-2">
													<Settings />
													<span>Account settings</span>
												</a>
											</Link>
										</Menu.Item>

										<div className="bg-[#B0B0B0] bg-opacity-20 h-[2px] w-full"></div>

										<Menu.Item>
											<button
												onClick={() => logout()}
												className="flex items-center space-x-2 px-3 pt-2">
												<Logout />
												<span>Log Out</span>
											</button>
										</Menu.Item>
									</Menu.Items>
								</div>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</>
	);
};

export const RecentUser: React.FC<{ user: UserDetails }> = ({ user }) => {
	return (
		<div className="flex items-center space-x-3">
			<div className="rounded-full flex items-center justify-center bg-[#C4C4C4]] overflow-hidden w-[49px] h-[49px]">
				<Image
					className="flex rounded-full items-center justify-center"
					src={testProfile}
					width={45}
					height={45}
					alt=""
				/>
			</div>

			<p className="font-sans font-semibold">{user?.name}</p>
		</div>
	);
};
