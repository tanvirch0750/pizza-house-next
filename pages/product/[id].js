import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Product.module.css';

const demoPizza = {
  id: 1,
  title: 'Pepperoni',
  image: '/images/pizza.png',
  price: [22.2, 25.2, 30.2],
  desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit consequuntur est ullam cumque incidunt id quis soluta facilis iusto.',
};

const Product = () => {
  const { id, title, image, price, desc } = demoPizza;
  const [size, setSize] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <div className={styles.imgContainer}>
          <Image src={image} alt="pizza" width={400} height={400} />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>${price[size]}</span>
        <p className={styles.desc}>{desc}</p>
        <h3>Choose Pizza Size</h3>
        <div className={styles.pizzaSizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src="/images/size.png"
              alt="pizza size"
              width={50}
              height={50}
            />
            <span className={styles.number}>11&quot;</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src="/images/size.png"
              alt="pizza size"
              width={50}
              height={50}
            />
            <span className={styles.number}>16&quot;</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src="/images/size.png"
              alt="pizza size"
              width={50}
              height={50}
            />
            <span className={styles.number}>21&quot;</span>
          </div>
        </div>
        <h3>Choose Extra Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="multigrain"
              name="multigrain"
              className={styles.checkbox}
            />
            <label htmlFor="multigrain">Multi Grain</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="butter"
              name="butter"
              className={styles.checkbox}
            />
            <label htmlFor="butter">Butter</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="chicken"
              name="chicken"
              className={styles.checkbox}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.quantity}>
            <span>Quantity:</span>
            <input type="number" defaultValue={1} />
          </div>
          <button className={styles.button}>Add To Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
