import Image from 'next/image';
import styles from '../styles/Footer.module.css';
//grid grid-footer
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoCol}>
          <a href="#" className={styles.footerLogo}>
            PizzaHouse
          </a>

          <ul className={styles.socialLinks}>
            <li>
              <a href="#" className={styles.footerLink}>
                <Image
                  className={styles.socialIcon}
                  src="/images/logo-instagram.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                <Image
                  className={styles.socialIcon}
                  src="/images/logo-facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                <Image
                  className={styles.socialIcon}
                  src="/images/logo-twitter.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright &copy; <span className={styles.year}>2022</span> by
            PizzaHouaw. All rights reserved.
          </p>
        </div>
        <div className={styles.addressCol}>
          <p className={styles.footerHeading}>Contact Us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              112 Mirpur., 2nd Floor, Dhaka, 1208
            </p>
            <p>
              <a className={styles.footerLink} href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a
                className={styles.footerLink}
                href="mailto:hello@pizzahouse.com"
              >
                hello@pizzahouse.com
              </a>
            </p>
          </address>
        </div>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Create account
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                For Business
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Resources</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Help center
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
