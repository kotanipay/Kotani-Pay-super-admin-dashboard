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
      className={`bg-kotani-blue text-white hover:bg-kotani-orange dark:bg-kotani-lightblue  hover:bg-kotani-yellow text-white px-7 py-3 rounded-lg font-semibold ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
