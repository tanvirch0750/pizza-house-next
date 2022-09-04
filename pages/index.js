import Head from 'next/head';
import HomeSlider from '../components/HomeSlider';

export default function Home() {
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
    </>
  );
}
