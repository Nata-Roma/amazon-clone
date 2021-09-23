import Image from 'next/image';
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const basketItems = useSelector(selectItems);

  return (
    <header>
      <div className='bg-amazon_blue flex items-center p-1 flex-grow py-2'>
        <div className='flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='/amazon_logo.png'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
            alt='Amazon Logo'
            onClick={() => router.push('/')}
          />
        </div>
        <div className='bg-yellow-400 hover:bg-yellow-500 h-10 hidden sm:flex flex-grow cursor-pointer rounded-md'>
          <input
            type='text'
            className='p-2 h-full w-2 rounded-l-md focus:outline-none flex-grow flex-shrink px-4'
          />
          <SearchIcon className='h-10 p-2' />
        </div>
        <div className='text-white text-xs flex items-center space-x-6 mx-6'>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p>{session ? `Hello ${session.user.name}` : 'Sign In'}</p>
            <p className='md:text-sm font-extrabold'>Accounts & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='md:text-sm font-extrabold'>& Orders</p>
          </div>
          <div className='link flex items-center relative' onClick={() => router.push('/checkout')}>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline md:text-sm font-extrabold mt-2'>
              Basket
            </p>
            <span className='text-center absolute w-4 h-4 rounded-full bg-yellow-400 top-0 right-0 md:right-10'>
              {basketItems.length}
            </span>
          </div>
        </div>
      </div>
      <div className='bg-amazon_blue-light flex items-center text-white text-sm space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Today&#39;s Deals</p>
        <p className='link'>Customer Service</p>
        <p className='link'>Registry</p>
        <p className='link hidden lg:inline-flex'>Gift Cards</p>
        <p className='link hidden lg:inline-flex'>Sell</p>
        <p className='link hidden lg:inline-flex'>Buy again</p>
      </div>
    </header>
  );
};

export default Header;
