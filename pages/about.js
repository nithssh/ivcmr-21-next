import Head from 'next/head'
import ContactsFooter from '../components/ContactsFooter';
import styles from '../styles/About.module.css'
import AboutDepartment from '../components/AboutDepartment';
import AboutCollege from '../components/AboutCollege';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IVCMR-21 | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AboutDepartment />
        <AboutCollege />
      </main>

      <footer className={styles.footer}>
        <ContactsFooter />
      </footer>
    </div>
  );
}