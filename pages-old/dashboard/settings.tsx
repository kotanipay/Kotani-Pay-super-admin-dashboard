import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { Layout } from "../../components/layout";
import { AccountInfo } from "../../components/settings/info";
import { Team } from "../../components/settings/team";
import { TabHeader } from "../../components/tab-header";
import { Spacer } from "../../utils/spacer";

const Settings = () => {
	return (
		<Layout>
			<div className="py-16 px-10">
				<p className="font-sans text-lg font-medium">Account settings</p>

				<Spacer className="h-8" />

				<Tab.Group>
					<div className="relative flex justify-between">
						<div className="border-b-2 border-neutral-100 overflow-x-scroll lg:overflow-x-hidden w-[800px] lg:w-full">
							<Tab.List className="space-x-8 lg:space-x-16 flex w-[800px] lg:w-full">
								<Tab className=" border-transparent">
									{({ selected }) => (
										<TabHeader onClick={() => {}} selected={selected}>
											Account Info
										</TabHeader>
									)}
								</Tab>
								<Tab>
									{({ selected }) => (
										<TabHeader onClick={() => {}} selected={selected}>
											Team
										</TabHeader>
									)}
								</Tab>
							</Tab.List>
						</div>
					</div>

					<Spacer className="h-12" />

					<div className="w-full overflow-x-scroll lg:overflow-auto">
						<Tab.Panels>
							<div className={classNames("lg:overflow-x-auto lg:w-full", {})}>
								<Tab.Panel className="flex flex-col space-y-4">
									<AccountInfo />
								</Tab.Panel>
							</div>
							<div className={classNames("lg:overflow-x-auto lg:w-full", {})}>
								<Tab.Panel className=" flex flex-col space-y-4">
									<Team />
								</Tab.Panel>
							</div>
						</Tab.Panels>
					</div>
				</Tab.Group>
			</div>
		</Layout>
	);
};

export default Settings;
