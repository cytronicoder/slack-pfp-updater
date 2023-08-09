import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/api/current/" className={styles.avatar} />
      </main>
    </div>
  );
}
