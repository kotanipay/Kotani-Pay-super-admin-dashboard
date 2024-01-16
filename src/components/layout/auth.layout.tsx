import type { Metadata } from "next";

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return (
    <main className="dark:bg-zinc-900 dark:text-bodydark  flex flex-col h-screen w-full">
      {children}
    </main>
  );
};

export default AuthLayout;
