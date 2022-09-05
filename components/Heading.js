import styles from '../styles/Heading.module.css';

const Heading = ({ subTitle, title, desc }) => {
  return (
    <div className={styles.heading}>
      <span>{subTitle}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Heading;
