import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.logo}>PizzaHouse</h2>
      </div>
      <nav className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" className={styles.listItem}>
            Home
          </Link>
          <li className={styles.listItem}>About</li>
          <li className={styles.listItem}>Menus</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </nav>
      <div className={styles.item}>
        <Link href="/cart">
          <div className={styles.cart}>
            <div className={styles.imgContainer}>
              <Image src="/images/cart.png" alt="cart" width={20} height={20} />
            </div>
            <div className={styles.counter}>2</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
