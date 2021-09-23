import Image from 'next/image';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectTotal, selectItems } from '../slices/basketSlice';
import BasketProduct from './BasketProduct';
import { useSession } from 'next-auth/client';

const Checkout = () => {
  const basketItems = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='m-5 flex-grow shadow-sm'>
          <Image src='/prime-day-banner.png' width={1020} height={250} objectFit='contain' alt='banner' />
          <div className='bg-white p-5 flex flex-col space-y-10'>
            <h1 className='text-3xl border-b pb-4'>{basketItems.length ? 'Your shopping Basket' : 'Shopping Basket is empty'}</h1>
            {basketItems.map((item, i) => <BasketProduct key={i} {...item} />)}
          </div>

        </div>
        <div className='flex flex-col space-y-3 mx-5'>
          <h4>Subtotal ({`${basketItems.length} items`}): {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(total)}</h4>
          <button disabled={!session || !basketItems.length} className={`button ${(!session || !basketItems.length) && 'from-gray-300 to-gray-500 border-gray-300 cursor-not-allowed'}`}>{session ? 'Proceed to Checkout' : 'Sign In to Checkout'}</button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;