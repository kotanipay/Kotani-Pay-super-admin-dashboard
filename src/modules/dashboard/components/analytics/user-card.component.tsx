import Image from "next/image";

interface UsersCardComponentProps {
  amount: string;
  image: string;
  title: string;
}
const UsersCardComponent = ({
  amount,
  image,
  title,
}: UsersCardComponentProps) => {
  return (
    <div
      className={`my-6 mx-12 dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="flex justify-start">
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

export default UsersCardComponent;
