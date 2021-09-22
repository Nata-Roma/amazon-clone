import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className='relative'>
    <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={5000}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img loading='lazy' src='/carousel_1.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/carousel_2.jpg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='/carousel_3.jpg' alt='' />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
