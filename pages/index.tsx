import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ePub Reader Demos</title>
        <meta name="description" content="ePub Reader Demos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/react-reader">React Reader (based on ePub.js)</Link>
        </h1>
        <h1 className={styles.title}>
          <Link href="/vivliostyle">@vivliostyle/react</Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
