import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
  <header className={styles.header}>
    <h1>Where in the world?</h1>
    <div>
    <FontAwesomeIcon
          icon={faMoon}
          className={styles.searchIcon}
        />
    <button className={styles.themeButton}>Dark Mode</button>
    </div>
  </header>);
}