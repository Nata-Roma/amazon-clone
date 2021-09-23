import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48'>
      {products &&
        products
          .slice(0, 4)
          .map((product) => <Product key={product.id} {...product} />)}
      <img className='md:col-span-full mx-auto' src='/adv_1.jpg' alt='' />
      <div className='md:col-span-2'>
        {products &&
          products
            .slice(4, 5)
            .map((product) => <Product key={product.id} {...product} />)}
      </div>
      {products &&
        products
          .slice(5)
          .map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
};

export default ProductFeed;
