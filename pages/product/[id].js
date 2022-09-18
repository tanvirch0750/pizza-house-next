import axios from 'axios';
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

const Product = ({ pizza }) => {
  const { _id: id, title, img, prices, desc, extraIng } = pizza;
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [additionalIng, setAdditionalIng] = useState([]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (index) => {
    const difference = prices[index] - prices[size];
    setSize(index);
    changePrice(difference);
  };

  const handleChange = (e, ing) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(ing.price);
      setAdditionalIng((prev) => [...prev, ing]);
    } else {
      changePrice(-ing.price);
      setAdditionalIng(additionalIng.filter((aing) => aing._id !== ing._id));
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <div className={styles.imgContainer}>
          <Image src={img} alt="pizza" width={400} height={400} />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{desc}</p>
        <h3>Choose Pizza Size</h3>
        <div className={styles.pizzaSizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              src="/images/size.png"
              alt="pizza size"
              width={50}
              height={50}
            />
            <span className={styles.number}>11&quot;</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              src="/images/size.png"
              alt="pizza size"
              width={50}
              height={50}
            />
            <span className={styles.number}>16&quot;</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
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
          {extraIng.map((ing) => {
            return (
              <div key={ing.id} className={styles.option}>
                <input
                  type="checkbox"
                  id={ing.text}
                  name={ing.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, ing)}
                />
                <label htmlFor="chicken">{ing.text}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.quantity}>
            <span>Quantity:</span>
            <input
              type="number"
              defaultValue={1}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className={styles.button}>Add To Cart</button>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: response.data,
    },
  };
};

export default Product;
