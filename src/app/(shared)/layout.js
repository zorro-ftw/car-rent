import MainMenu from "@/components/MainMenu/MainMenu";
import styles from "./shared.module.scss";

export default function SharedLayout({ children }) {
  return (
    <main className={styles.main}>
      <MainMenu />
      {children}
    </main>
  );
}
