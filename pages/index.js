import axios from 'axios';
import Head from 'next/head';
import HomeSlider from '../components/HomeSlider';
import PizzaList from '../components/PizzaList';

export default function Home({ pizzas }) {
  return (
    <>
      <Head>
        <title>Pizza House</title>
        <meta
          name="description"
          content="Delacious pizza according to your choice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const getServerSideProps = async (req, res) => {
  const response = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzas: response.data,
    },
  };
};
