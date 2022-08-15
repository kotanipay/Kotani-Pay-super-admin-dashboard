import { DownloadRow } from "./dowload-row";
import { TableHead, TransactionRow } from "./transaction-row";
import { UserTableRow } from "./user-table-row";

export const DownloadTable = () => {
	return (
		<table className="w-full">
			<thead className="text-left">
				<tr className="text-left">
					<TableHead title="Name" position="w-1/3 pl-2" />
					<TableHead title="Date generated" position="w-1/3" />
					<TableHead title="Format" position="w-1/4" />
					<TableHead title="Option" position="w-1/4" />
				</tr>
			</thead>
			<tbody className="text-left">
				{Array(6)
					.fill(null)
					.map((row, idx) => {
						return <DownloadRow key={idx} />;
					})}
			</tbody>
		</table>
	);
};
