import styles from '../styles/Contact.module.css';
import BackButton from '../components/BackButton';

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>
        
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>If you have any questions, queries, or are interested in our products, feel free to reach out to us!</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/muhammedpatel007/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/muhammedp07" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://discord.com/invite/yourinvitecode" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
      </main>
      <BackButton/>
      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel - Cybersecurity Consulting</p>
      </footer>
    </div>
  );
}
