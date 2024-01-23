interface OutlinedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  buttonStyle?: string;
}
const OutlinedButton = ({ children, onClick, buttonStyle, ...props }: OutlinedButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonStyle} group border-2 border-kotani-blue hover:text-white hover:bg-kotani-blue px-5 py-3 rounded-lg font-semibold `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
