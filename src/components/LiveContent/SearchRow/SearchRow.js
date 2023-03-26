import Image from "next/image";
import styles from "./SearchRow.module.scss";
import bell from "../../../../public/assets/notification_top.svg";
import search from "../../../../public/assets/search.svg";

export default function SearchRow() {
  return (
    <div className={styles.searchRow}>
      <Image src={bell} alt="notifications" />
      <form className={styles.searchRow__form}>
        <div className={styles.searchRow__container}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
          />
          <Image className={styles.searchRow__icon} src={search} alt="search" />
        </div>
      </form>
    </div>
  );
}
