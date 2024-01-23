// component that blurs the balance takes children as props

interface MaskBalanceProps {
  blur: boolean;
  children: React.ReactNode;
}
export const MaskBalance = ({ blur, children }: MaskBalanceProps) => {
  return <div className={blur ? '' : 'blur-sm'}>{children}</div>;
};
