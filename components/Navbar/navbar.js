import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar_logo}>
        <Link href="/">
          <img src="/logo-text.png"></img>
        </Link>
      </h1>

      <ul className={!open ? styles.navbar_menu : styles.navbar_menu_open}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/history">
            <a>History</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={styles.navbar_menu_contact}>
        <a href="#">Call</a>
        <a href="/contact">Email</a>
      </div>
      <div className={styles.navbar_menu_icon} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
