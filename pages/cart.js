import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cartDetails}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/pizza.png"
                    alt="pizza"
                    width={100}
                    height={100}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Pepperoni</span>
              </td>
              <td>
                <span className={styles.extras}>Cheese, Multi Grain</span>
              </td>
              <td>
                <span className={styles.price}>$25.00</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$50.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.checkout}>
        <div className={styles.box}>
          <h2 className={styles.checkoutTitle}>CART TOTAL</h2>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Subtotal:</span>
            <span className={styles.textPrice}>$50.00</span>
          </p>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Discount:</span>
            <span className={styles.textPrice}>$5.00</span>
          </p>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Total:</span>
            <span className={styles.textPrice}>$45.00</span>
          </p>
          <button className={styles.btn}>Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
