import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';


const BasketProduct = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
  isPrime,
}) => {

  const dispatch = useDispatch();

  const itemAddToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
      rating,
      isPrime,
    };
    dispatch(addToBasket(product));
  }

  const itemRemoveFromBasket = () => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='grid grid-cols-5 my-5'>
      <Image className='mr-5' src={image} width={200} height={200} objectFit='contain' alt='' />
      <div className='col-span-3'>
        <p className='mb-2'>{title}</p>
        <div className='flex'>
          {Array(Math.round(rating.rate))
            .fill()
            .map((_, i) => (
              <StarIcon className='h-5 text-yellow-500' key={i} />
            ))}
        </div>
        <p className='my-2 text-xs line-clamp-3'>{description}</p>
        <p className='mb-5'>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(price)}
        </p>
        {isPrime && (
          <div className='flex items-center space-x-2'>
            <img loading='lazy' className='w-12' src='/prime-tag.png' alt='' />
            <p className='text-xs text-gray-500'>FREE next-fay delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 justify-self-end my-auto'>
        <button className='button' onClick={itemAddToBasket}>Add to Basket</button>
        <button className='button' onClick={itemRemoveFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default BasketProduct;