import styles from '../styles/Services.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import BackButton from '../components/BackButton';

export default function Services() {
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
        <h1>Our Services</h1>
        <p>Explore our range of cybersecurity solutions designed to protect and enhance your digital security.</p>
      </section>

      <section className={styles.services}>
        <div className={styles.serviceItem}>
          <h2>Phishing Link Scanner</h2>
          <p>A simple yet effective phishing link scanner built with Python and Flask. This tool provides a web-based interface for users to check if a URL might be a phishing attempt. The application uses a custom phishing detection algorithm and features a modern neon-themed design.</p>
          <p><a href="https://phishinglinkcanner.lol" target="_blank" rel="noopener noreferrer">Check the web application here</a></p>
          <p><a href="https://github.com/muhammedp07/plscanner" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        
        <div className={styles.serviceItem}>
          <h2>Vulnerability Management System</h2>
          <p>The Vulnerability Management System is a Python-based tool designed to scan and manage vulnerabilities on target IP addresses. It utilizes the nmap tool for network scanning and SQLite for storing and managing scan results.</p>
          <p><a href="https://github.com/muhammedp07/vulnerability-management-system" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        
        <div className={styles.serviceItem}>
          <h2>Vulnerability Scanner</h2>
          <p>A simple vulnerability scanner written in Python that scans for open ports on a target machine within a specified range. Provides basic information about each open port.</p>
          <p><a href="https://github.com/muhammedp07/vulnerability-scannerr" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        
        <div className={styles.serviceItem}>
          <h2>Cybersecurity Consulting</h2>
          <p>We offer expert advice on data security, best practices, and more. Our consultancy services are designed to help you secure your systems and protect your data from potential threats. Connect with us to learn more about how we can assist with your cybersecurity needs.</p>
          <p><a href="https://www.linkedin.com/in/muhammedpatel007/" target="_blank" rel="noopener noreferrer">Connect with us on LinkedIn</a></p>
        </div>
        <BackButton />
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel - Cybersecurity Consulting</p>
      </footer>
    </div>
  );
}
