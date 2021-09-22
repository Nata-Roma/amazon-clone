import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

const minRating = 1;
const maxRating = 5;

const Home = ({ products }) => {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon clone</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://fakestoreapi.com/products');
  let products = await res.json();
  products = products.map(product => {
    const isPrime = Math.random() < 0.5;
    return {...product, isPrime}
  })

  return {
    props: {
      products,
    },
  };
};
