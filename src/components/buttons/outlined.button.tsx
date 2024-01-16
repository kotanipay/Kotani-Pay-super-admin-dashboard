interface OutlinedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  buttonStyle?: string;
}
const OutlinedButton = ({ children, onClick, buttonStyle, ...props }: OutlinedButtonProps) => {
  return (
    <button
      {...props}
      className={`group border border-blue-700 dark:bg-blue-600 hover:bg-blue-800 px-7 py-3 rounded-lg font-semibold ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
