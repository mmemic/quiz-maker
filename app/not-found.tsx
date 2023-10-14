import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <p className='text-6xl font-bold'>404</p>
      <p className='text-4xl font-semibold'>Not Found</p>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
