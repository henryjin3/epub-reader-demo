import type { NextPage } from 'next';
import Head from 'next/head';
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
          <Link href="/bibi/index.html?book=EbookSample">Bibi (unzipped)</Link>
        </h1>
        <h1 className={styles.title}>
          <Link href="/bibi/index.html?book=EbookSample.epub">Bibi (epub)</Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
