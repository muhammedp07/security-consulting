import styles from './Styles/home.module.css';
import Image from 'next/image';
import logo from '../public/images/logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={logo} alt="Logo" width={100} height={100} />
        <nav className={styles.nav}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Welcome to My Cybersecurity Consulting</h1>
        <p>Offering top-notch cybersecurity solutions and consulting services.</p>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel</p>
      </footer>
    </div>
  );
}
