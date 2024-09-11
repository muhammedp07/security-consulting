import styles from '../styles/About.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import BackButton from '../components/BackButton'; 

export default function About() {
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
      
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Information about your background, experience, and the consulting services you offer.</p>
      </section>

      <BackButton /> {/* Include the BackButton */}
      
      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel - Cybersecurity Consulting</p>
      </footer>
    </div>
  );
}
