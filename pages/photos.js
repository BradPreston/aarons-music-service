import Layout from "../components/layout";
import styles from "../styles/photos.module.scss";
import { SRLWrapper } from "simple-react-lightbox";

export default function Photos() {
  return (
    <Layout>
      <section className={styles.gallery}>
        <SRLWrapper>
          <h2 className={styles.heading}>Photos</h2>
          <a href="/store-front.png">
            <img className={styles.thumbnail} src="/store-front.png" />
          </a>
          <a href="/accessories.png">
            <img className={styles.thumbnail} src="/accessories.png" />
          </a>
          <a href="/consignment.png">
            <img className={styles.thumbnail} src="/consignment.png" />
          </a>
          <a href="/steve-working.png">
            <img className={styles.thumbnail} src="/steve-working.png" />
          </a>
          <a href="/strings.png">
            <img className={styles.thumbnail} src="/strings.png" />
          </a>
          <a href="/steve-playing.png">
            <img className={styles.thumbnail} src="/steve-playing.png" />
          </a>
          <a href="/buffer.png">
            <img className={styles.thumbnail} src="/buffer.png" />
          </a>
          <a href="/steve-working-2.png">
            <img className={styles.thumbnail} src="/steve-working-2.png" />
          </a>
          <a href="/repair-violin.png">
            <img className={styles.thumbnail} src="/repair-violin.png" />
          </a>
          <a href="/guitar-1.png">
            <img className={styles.thumbnail} src="/guitar-1.png" />
          </a>
          <a href="/guitar-3.png">
            <img className={styles.thumbnail} src="/guitar-3.png" />
          </a>
          <a href="/guitar-4.png">
            <img className={styles.thumbnail} src="/guitar-4.png" />
          </a>
          <a href="/guitar-5.png">
            <img className={styles.thumbnail} src="/guitar-5.png" />
          </a>
          <a href="/showcase.png">
            <img className={styles.thumbnail} src="/showcase.png" />
          </a>
        </SRLWrapper>
      </section>
    </Layout>
  );
}
