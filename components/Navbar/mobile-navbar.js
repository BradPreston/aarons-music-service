import Link from "next/link";
import styles from "../../styles/mobile-navbar.module.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNavbar() {
  return (
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNav_wrapper}>
        <Link href="/">
          <a className={styles.mobileNav_wrapper_item}>
            <i>
              <FontAwesomeIcon icon={faHome} />
            </i>
            Home
          </a>
        </Link>
        <Link href="/history">
          <a className={styles.mobileNav_wrapper_item}>
            <i>
              <FontAwesomeIcon icon={faLandmark} />
            </i>
            History
          </a>
        </Link>
        <Link href="/photos">
          <a className={styles.mobileNav_wrapper_item}>
            <i>
              <FontAwesomeIcon icon={faImages} />
            </i>
            Photos
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.mobileNav_wrapper_item}>
            <i>
              <FontAwesomeIcon icon={faAddressBook} />
            </i>
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}
