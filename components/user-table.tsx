import { UserDetails } from "../utils/types";
import { Loader } from "./loader";
import { TableHead } from "./transaction-row";
import { UserTableRow } from "./user-table-row";

export const UserTable: React.FC<{
	users: UserDetails[];
	isLoading: boolean;
}> = ({ users, isLoading }) => {
	return isLoading ? (
		<Loader />
	) : (
		<table className="w-full">
			<thead className="text-left">
				<tr className="text-left">
					<TableHead title="Name" position="pl-2" />
					<TableHead title="User ID" />
					<TableHead title="Date joined" />
					<TableHead title="Phone number" position="text-left" />
					<TableHead
						title="User status"
						position="text-left bg-white w-[15%] pr-2"
					/>
				</tr>
			</thead>

			<tbody className="text-left">
				{users?.map((user, idx) => {
					return <UserTableRow user={user} key={idx} />;
				})}
			</tbody>
		</table>
	);
};
