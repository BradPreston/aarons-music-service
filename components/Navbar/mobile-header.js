import Link from "next/link";
import styles from "../../styles/mobile-header.module.scss";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileHeader() {
  return (
    <section role="header" className={styles.header}>
      <div className={styles.header_logo}>
        <Link href="/">
          <img src="/logo-text.png" />
        </Link>
      </div>
      <div className={styles.header_call}>
        <Link href="tel:2698232628">
          <a>
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            Call
          </a>
        </Link>
      </div>
    </section>
  );
}
