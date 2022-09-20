import React, { useState } from 'react';
import styles from '../styles/CashOnDeliveryModa.module.css';

const CashOnDeliveryModal = ({ total, createOrder, cancelCODorder }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const confirmOrder = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          You will play ${total} after the delivery
        </h2>
        <div className={styles.item}>
          <label className={styles.label}>Your Name:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="John Doe"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Your Phone Number:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="+8801302047933"
            value={customer}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Your Address:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="John Doe"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.btn} onClick={confirmOrder}>
          Confirm Order
        </button>
        <button onClick={cancelCODorder} className={styles.btn}>
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default CashOnDeliveryModal;
