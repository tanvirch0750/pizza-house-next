import Image from 'next/image';
import styles from '../../styles/Order.module.css';

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.notDone;
  };

  return (
    <section className={styles.container}>
      <div className={styles.orderHistory}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>5478895466</span>
                </td>
                <td>
                  <span className={styles.customer}>Tanvir Chowdhury</span>
                </td>
                <td>
                  <span className={styles.address}>Chandpur, Bangladesh</span>
                </td>
                <td>
                  <span className={styles.total}>$50.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <h2>Track Order</h2>
          <div className={statusClass(0)}>
            <Image
              src="/images/paid.png"
              alt="paid img"
              width={30}
              height={30}
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                alt="paid img"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="/images/bake.png"
              alt="paid img"
              width={30}
              height={30}
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                alt="paid img"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="/images/bike.png"
              alt="paid img"
              width={30}
              height={30}
            />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                alt="paid img"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/images/delivered.png"
              alt="paid img"
              width={30}
              height={30}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                alt="paid img"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paymentHistory}>
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
          <button disabled className={styles.btn}>
            PAID
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;
