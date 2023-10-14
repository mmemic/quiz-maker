import clsx from 'clsx';

type LoadingProps = {
  isLoading: boolean;
  className?: string;
};
export default function Loading({ isLoading, className }: LoadingProps) {
  return (
    <span
      className={clsx(
        className,
        'loading loading-spinner loading-md',
        {
          visible: isLoading,
        },
        { invisible: !isLoading }
      )}
    />
  );
}
