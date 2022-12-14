import styles from '../styles/PizzaList.module.css';
import Heading from './Heading';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzas }) => {
  return (
    <section className={styles.container}>
      <Heading
        subTitle="Trending"
        title="Our Customers top picks"
        desc="No matter what happens, pizza will always be there for you, thick and
          thin, in the crust we trust"
      />
      <div className={styles.wrapper}>
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
};

export default PizzaList;
