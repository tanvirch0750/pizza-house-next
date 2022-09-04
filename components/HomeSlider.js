import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/HomeSlider.module.css';

const images = [
  '/images/banner1.png',
  '/images/banner2.png',
  '/images/banner3.png',
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'right') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('left')}
      >
        <Image
          src="/images/arrowl.png"
          alt="arrow right"
          width={50}
          height={50}
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={image} alt="Pizza image" layout="fill" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('right')}
      >
        <Image
          src="/images/arrowr.png"
          alt="arrow right"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default HomeSlider;
