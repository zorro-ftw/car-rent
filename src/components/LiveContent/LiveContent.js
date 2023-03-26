import CartTable from "./CarTable/CarTable";
import styles from "./LiveContent.module.scss";
import SearchRow from "./SearchRow/SearchRow";

export default function LiveContent() {
  return (
    <section className={styles.content}>
      <SearchRow />
      <CartTable />
    </section>
  );
}
