import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza House</title>
        <meta
          name="description"
          content="Delacious pizza according to your choice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>HomePage</h1>
    </div>
  );
}
