import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Admin.module.css';

const Admin = ({ pizzas, orders }) => {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const [orderList, setOrderList] = useState(orders);
  const status = ['preparing', 'on the way', 'delivered'];

  const handleProductDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    const orderItem = orderList.filter((order) => order._id === id)[0];
    const currentStatus = orderItem.status;
    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>Products</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzaList?.map((pizza) => (
              <tr key={pizza._id} className={styles.trTitle}>
                <td>
                  <Image
                    src={pizza.img}
                    alt="pizza"
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                </td>
                <td>{pizza._id.slice(0, 5)}...</td>
                <td>{pizza.title}</td>
                <td>
                  {pizza.prices.map((price, idx) => (
                    <span key={idx}>{price}, </span>
                  ))}{' '}
                </td>
                <td>
                  <button className={styles.btn}>Edit</button>
                  <button
                    className={styles.btn}
                    onClick={() => handleProductDelete(pizza._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title}>Orders</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList?.map((order) => (
              <tr key={order._id} className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>Cash</span> : <span>Paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    onClick={() => handleStatus(order._id)}
                    className={styles.btn}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || '';

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const productResponse = await axios.get('http://localhost:3000/api/products');
  const orderResponse = await axios.get('http://localhost:3000/api/orders');

  return {
    props: {
      pizzas: productResponse.data,
      orders: orderResponse.data,
    },
  };
};

export default Admin;
