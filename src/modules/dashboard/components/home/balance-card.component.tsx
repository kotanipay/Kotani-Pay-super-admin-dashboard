import Image from "next/image";

interface BalanceCardComponentProps {
  amount: string;
  image: string;
  title: string;
  showBorder?: boolean;
}
const BalanceCardComponent = ({
  amount,
  image,
  title,
  showBorder = true,
}: BalanceCardComponentProps) => {
  return (
    <div
      className={`my-6 px-7.5 0 dark:border-strokedark dark:bg-boxdark ${
        showBorder ? "border-r-2 border-gray-30" : ""
      }`}
    >
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-2 ">
            <Image priority src={image} height={18} width={18} alt="alt" />
            <span className="text-xs text-black dark:text-white">{title}</span>
          </div>
          <h3 className="text-lg text-black dark:text-white">{amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default BalanceCardComponent;
