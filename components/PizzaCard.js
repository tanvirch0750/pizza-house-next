import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = ({ pizza }) => {
  const { _id: id, img, title, desc, prices } = pizza;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link href={`/product/${id}`}>
          <Image src={img} alt="pizza" width={300} height={300} />
        </Link>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.pricebox}>
        <span>${prices[0]}</span>
        <Link href={`/product/${id}`}>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PizzaCard;
