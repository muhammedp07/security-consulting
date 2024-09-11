import styles from '../styles/About.module.css';
import BackButton from '../components/BackButton'; // Import the BackButton

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
      </header>
      <main className={styles.main}>
        <p>Information about your background, experience, and the consulting services you offer.</p>
      </main>
      <BackButton /> {/* Include the BackButton */}
      <footer className={styles.footer}>
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
}
