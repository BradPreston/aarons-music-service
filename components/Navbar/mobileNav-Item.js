import styles from "../../styles/mobileNav-Item.module.scss";

export default function MobileNavItem(link, icon) {
  return (
    <div className={styles.navItem}>
      <div className={styles.navItem_icon}>
        <i class={icon}></i>
      </div>
      <div>
        <a>{link}</a>
      </div>
    </div>
  );
}
