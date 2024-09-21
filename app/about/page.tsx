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
        <p>
          🔭 I’m currently working on becoming a better version of myself every day. <br />
          🌱 I’m learning threat analysis, penetration testing, and vulnerability assessment. <br />
          🎭 I’m open to collaborating on any project—literally anything! <br />
          💬 Ask me about cybersecurity secrets (shh, don’t tell the hackers), my code's trust issues, 
          or how I'm the superhero Gotham never asked for. Let’s chat about hacking, coding, 
          and transforming coffee into code! <br />
          ⚡ Fun fact: I think I’m funny (and I genuinely am!).
        </p>
      </section>

      <BackButton /> {/* Include the BackButton */}
      
      <footer className={styles.footer}>
        <p>© 2024 Muhammed Patel - Cybersecurity Consulting</p>
      </footer>
    </div>
  );
}
