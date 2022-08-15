import {
	LineChart,
	Line,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	AreaChart,
	Area,
	BarChart,
	Bar,
	PieChart,
	Pie,
	Cell,
} from "recharts";

const data1 = [
	{
		name: "Failed",
		value: 20,
		color: "#FFCACA",
	},
	{
		name: "Pending",
		value: 8,
		color: "#FBE490",
	},
	{
		name: "Successfull",
		value: 100,
		color: "#E1F6D7",
	},
];

const data = [
	{
		name: "Jan",
		uv: 900,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Feb",
		uv: 1400,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Mar",
		uv: 1500,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Apr",
		uv: 2400,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "May",
		uv: 1600,
		pv: 4800,
		amt: 2181,
	},

	{
		name: "Dec",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const colorText = (value: string, style: any) => {
	return <span style={style}>{value}</span>;
};

export const CustAreaChart: React.FC<{ width?: number; height?: number }> = ({
	width = 740,
	height = 380,
}) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<AreaChart
				data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="2%" stopColor="#52A6FA" stopOpacity={1} />
						<stop offset="98%" stopColor="#52A6FA" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" axisLine={false} padding={{}} tickLine={false} />
				<YAxis axisLine={false} padding={{ bottom: 30 }} tickLine={false} />
				<CartesianGrid vertical={false} strokeDasharray="1 3" />
				<Tooltip />
				<Area
					type="Function"
					dataKey="uv"
					stroke="#52A6FA"
					fillOpacity={0.1}
					fill="url(#colorUv)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export const CustBarChart: React.FC<{
	hideLegend?: boolean;
	width?: number;
	height?: number;
}> = ({ hideLegend, width = 650, height = 290 }) => {
	return (
		<ResponsiveContainer width={width} height={height}>
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="0 0" strokeWidth={0.25} />
				<XAxis dataKey="name" axisLine={false} tickLine={false} />
				<YAxis axisLine={false} tickLine={false} />

				{hideLegend ? null : (
					<Legend
						margin={{ top: 30 }}
						iconSize={30}
						formatter={name =>
							colorText(name, {
								color: "#474747",
								fontSize: "12px",
								paddingRight: "20px",
							})
						}
					/>
				)}
				<Bar dataKey="pv" fill="rgba(254, 208, 238, 0.7)" background={false} />
				<Bar dataKey="uv" fill="rgba(208, 232, 255, 0.7)" background={false} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export const CustPieChart = () => {
	return (
		<ResponsiveContainer width={320} height={290}>
			<PieChart>
				<Pie
					data={data1}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={100}
					legendType="square">
					{data1.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
					))}
				</Pie>

				<Legend
					margin={{ top: 30 }}
					iconSize={20}
					formatter={name =>
						colorText(name, {
							color: "#474747",
							fontSize: "12px",
							paddingRight: "10px",
						})
					}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};
