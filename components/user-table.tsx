import { TableHead, TransactionRow } from "./transaction-row";
import { UserTableRow } from "./user-table-row";

export const UserTable = () => {
	return (
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
				{Array(6)
					.fill(null)
					.map((row, idx) => {
						return <UserTableRow key={idx} />;
					})}
			</tbody>
		</table>
	);
};
