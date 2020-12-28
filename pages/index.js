import Layout from "../components/layout";
import Link from "next/link";

import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <Layout>
      <section className={styles.main}>
        <div className={styles.main_hero}>
          <div className={styles.main_hero_heading}>
            <h1>
              Aaron's
              <br />
              Music
              <br />
              Service
            </h1>
            <h2>
              Hand
              <br />
              crafted
              <br />
              guitars
              <br />
              since
              <br />
              1983
            </h2>
          </div>
          <div className={styles.main_hero_btn}>
            <Link href="/history">
              <a>Learn more</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
