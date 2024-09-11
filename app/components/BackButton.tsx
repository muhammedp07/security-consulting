import Link from 'next/link';
import styles from './BackButton.module.css'; 

export default function BackButton() {
  return (
    <div className={styles.backButtonContainer}>
      <Link href="/">
        <button className={styles.backButton}>Back to Home</button>
      </Link>
    </div>
  );
}
