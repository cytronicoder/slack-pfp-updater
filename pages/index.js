import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/set-display-name", { displayName });
      alert("Display name updated successfully!");
    } catch (error) {
      alert("An error occurred while updating your display name.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Slack Shenanigans</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <img src="/api/current-profile-pic/" className={styles.avatar} />
        <h1 className={styles.title}>
          Hey! I&apos;m{" "}
          <span className={styles.underline_on_hover}>Peter.</span>
        </h1>
        <div className={styles.grid}>
          <a href={"/api/set-profile-pic/"} className={styles.card}>
            <h3>Change my avatar &rarr;</h3>
            <p>Changes on the Hack Club Slack. Have fun!</p>
          </a>
          <a href={"https://cytronicoder.com/"} className={styles.card}>
            <h3>Visit my portfolio &rarr;</h3>
            <p>If you want to know more about who made this...</p>
          </a>
        </div>
      </main>
    </div>
  );
}
