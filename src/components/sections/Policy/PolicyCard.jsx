import styles from "./PolicyCard.module.css";

export default function PolicyCard({ title, children }) {
  return (
    <div className={`${styles.policyCard} animate__animated animate__fadeInUp`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
