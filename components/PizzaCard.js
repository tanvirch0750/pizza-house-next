import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/images/pizza.png" alt="pizza" width={300} height={300} />
      </div>
      <h2 className={styles.title}>Peperonni</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        illum suscipit omnis.
      </p>
      <div className={styles.pricebox}>
        <span>$25.00</span>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default PizzaCard;
