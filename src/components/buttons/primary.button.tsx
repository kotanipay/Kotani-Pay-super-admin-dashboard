interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  buttonStyle?: string;
}
const PrimaryButton = ({
  children,
  onClick,
  buttonStyle,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className={` ${buttonStyle}  px-7 py-3  bg-kotani-blue text-white hover:bg-kotani-orange dark:bg-kotani-lightblue  hover:bg-kotani-yellow hover:text-black text-white rounded-lg font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
