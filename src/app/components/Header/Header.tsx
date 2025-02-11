import styles from "./Header.module.css";

const navigationItems = ["My Notes", "Settings"];

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navigationContainer}>
        {navigationItems.map((item, index) => (
          <a key={index} href="#" className={styles.navigationItem}>
            {item}
          </a>
        ))}
      </div>
      <div className={styles.profileContainer}>
        <a href="#" className={styles.profileItem}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Header;
