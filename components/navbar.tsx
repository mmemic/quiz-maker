import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar bg-secondary'>
      <Link className='btn normal-case text-2xl btn-accent' href='/'>
        <div className='flex flex-col items-end text-black rounded-md'>
          Quiz Maker
          <p className='text-base-200 text-xs'>by Enterwell</p>
        </div>
      </Link>
    </div>
  );
}
