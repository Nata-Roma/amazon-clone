import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';

const Product = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
  isPrime,
}) => {
  // const [isPrime] = useState(Math.random() < 0.5);

  return (
    <div className='flex flex-col p-10 relative bg-white m-5 z-30'>
      <p className='absolute top-2 right-2 text-xs text-gray-400 italic'>
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit='contain'
        alt='product image'
        className='my-2 mx-auto'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex '>
        {Array(Math.round(rating.rate))
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' key={i} />
          ))}
      </div>
      <p className='my-2 text-xs line-clamp-2'>{description}</p>
      <p className='mb-5'>
        {new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(price)}
      </p>
      {isPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='/prime-tag.png' alt='' />
          <p className='text-xs text-gray-500'>FREE next-fay delivery</p>
        </div>
      )}
      <button className='mt-auto button'>Add to Busket</button>
    </div>
  );
};

export default Product;
