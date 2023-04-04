import axios from "axios";
import FinancialCard from "./FinancialCard/FinancialCard";
import HiredCard from "./HiredCard/HiredCard";
import styles from "./StatsColumn.module.scss";

export default async function StatsColumn() {
  const date = getCurrentDateFormatted();
  {
    /*const stats = await getFinStats();*/
  }

  return (
    <section className={styles.stats}>
      <div className={styles.stats__titleWrapper}>
        <h3 className={styles.stats__title}>Todays Statistics</h3>
        <p className={styles.stats__date}>{date}</p>
      </div>
      {/*<FinancialCard mode={"income"} stats={stats} />
      <FinancialCard mode={"expense"} stats={stats} />
  <HiredCard stats={stats} />*/}
    </section>
  );
}

const getCurrentDateFormatted = () => {
  const date = new Date();
  const stringDate = date.toUTCString();
  let formattedDate = stringDate.slice(0, -7);
  formattedDate += date.getHours() <= 12 ? " AM" : " PM";
  return formattedDate;
};

async function getFinStats() {
  const res = await axios.get("http://localhost:3000/api/financialStats");
  return await res.data;
}
