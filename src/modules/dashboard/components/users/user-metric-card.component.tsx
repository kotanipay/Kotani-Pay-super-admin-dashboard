import Image from "next/image";

interface UserMetricsCardProps {
  amount: string;
  title: string;
  showBorder?: boolean;
}
const UserMetricsCard = ({
  amount,
  title,
  showBorder = true,
}: UserMetricsCardProps) => {
  return (
    <div
      className={`my-6 px-7.5 0 dark:border-strokedark dark:bg-boxdark ${
        showBorder ? "border-r-2 border-gray-30" : ""
      }`}
    >
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-2 ">
            <span className="text-xs text-black dark:text-white">{title}</span>
          </div>
          <h3 className="text-lg text-black dark:text-white font-bold">{amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserMetricsCard;
