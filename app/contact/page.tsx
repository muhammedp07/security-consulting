import styles from '../styles/Contact.module.css';
import BackButton from '../components/BackButton'; // Import the BackButton

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>
      <main className={styles.main}>
        <p>You can contact us through the following methods:</p>
        <ul>
          <li>Email: your.email@example.com</li>
          <li>LinkedIn: <a href="https://linkedin.com/in/your-profile">Your LinkedIn</a></li>
          <li>Discord: your-discord-id</li>
        </ul>
      </main>
      <BackButton /> {/* Include the BackButton */}
      <footer className={styles.footer}>
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
}
