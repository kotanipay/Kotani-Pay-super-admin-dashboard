import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return (
    <main className="bg-white-650 dark:bg-zinc-900 dark:text-bodydark  flex flex-col h-screen w-full justify-center items-center">
      <ToastContainer />
      <div className="bg-auth-background lg:h-[90vh] lg:w-[90vw] h-full w-full lg:px-0 px-5 object-cover overflow-hidden">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
