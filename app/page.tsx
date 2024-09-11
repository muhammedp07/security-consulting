import styles from './styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/images/logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Image src={logo} alt="Logo" width={100} height={100} />
        <nav className={styles.nav}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Your Security, Our Priority</h1>
        <p>We offer top-notch cybersecurity solutions like Phishing Link Scanner, Vulnerability Management System, and Vulnerability Scanner to keep your data safe.</p>
        <div className={styles.heroButtons}>
          <a href="/services" className={styles.button}>Explore Services</a>
          <a href="/contact" className={styles.buttonSecondary}>Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceItems}>
          <div className={styles.serviceItem}>
            <h3>Phishing Link Scanner</h3>
            <p>Protect yourself from phishing attacks with our real-time scanner.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Vulnerability Management</h3>
            <p>Stay ahead of threats with our comprehensive vulnerability management tools.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Consulting</h3>
            <p>Get expert advice on data security, best practices, and more.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel - Cybersecurity Consulting</p>
      </footer>
    </div>
  );
}
