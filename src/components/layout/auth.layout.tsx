import type { Metadata } from "next";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  children,
}: AuthLayoutProps) => {
  return <main className="dark:bg-zinc-900 dark:text-bodydark  flex flex-col h-screen w-full">{children}</main>;
};

export default AuthLayout;
