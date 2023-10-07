import { ComponentProps } from 'react';

export default function Button({
  className,
  children,
  ...props
}: ComponentProps<'button'>) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
