import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, total, quantity } = useSelector((state) => state.cart);

  console.log(open);

  // This values are the props in the UI
  const amount = '2';
  const currency = 'USD';
  const style = { layout: 'vertical' };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              console.log(details);
            });
          }}
        />
      </>
    );
  };

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
            {products.map((product) => (
              <tr key={product.id} className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extraIng.map((ing) => (
                      <span key={ing._id}>{ing.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.quantity * +product.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.checkout}>
        <div className={styles.box}>
          <h2 className={styles.checkoutTitle}>CART TOTAL</h2>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Subtotal:</span>
            <span className={styles.textPrice}>${total}</span>
          </p>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Discount:</span>
            <span className={styles.textPrice}>$5.00</span>
          </p>
          <p className={styles.totalText}>
            <span className={styles.textTitle}>Total:</span>
            <span className={styles.textPrice}>${total - 5}</span>
          </p>

          {open ? (
            <div className={style.paymentMethods}>
              <button className={styles.btnPayment}>Cash On Delivery</button>
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'ASJHOHiRcFQSVieopnP3sFEDK4P7SfnCDOfEsnJTmGCgRQZqu0Le_VuTRXtFOIvXihrotVSZt9nnwzdt',
                  components: 'buttons',
                  currency: 'USD',
                  'disable-funding': 'credit,card,venmo',
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.btn}>
              Checkout Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
