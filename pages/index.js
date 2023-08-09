import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/api/current/" className={styles.avatar} />
        <div className={styles.grid}>
          <a href={"/api/set-profile"} className={styles.card}>
            <h3>Change the avatar &rarr;</h3>
            <p>Changes on the Hack Club Slack. Have fun!</p>
          </a>
          <a href={"https://cytronicoder.com"} className={styles.card}>
            <h3>Visit my portfolio &rarr;</h3>
            <p>If you want to know more about who made this...</p>
          </a>
        </div>
      </main>
    </div>
  );
}
