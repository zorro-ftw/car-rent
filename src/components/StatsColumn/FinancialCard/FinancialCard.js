import styles from "./FinancialCard.module.scss";

export default function FinancialCard({ mode, stats }) {
  // The modeDecider will behave like an information vault and allow us to get all the
  // necessary info to render only using mode.
  const modeDecider = {
    income: {
      title: "Income",
      lastWeek: "income",
      todayAmount: stats.today.income,
      yesterdayAmount: stats.yesterday.income,
      lastWeekAmount: stats.lastWeek.income,
    },
    expense: {
      title: "Expenses",
      lastWeek: "expenses",
      todayAmount: stats.today.expense,
      yesterdayAmount: stats.yesterday.expense,
      lastWeekAmount: stats.lastWeek.expense,
    },
  };

  // This variable will contain every info needed to render the card
  // according to stats & mode.
  const modeInfo = modeDecider[mode];

  // Using getChangeText function to get the text to display.
  // The function will get rid of any minus signs and decide on arrow direction.
  const change = getChangeText(modeInfo.todayAmount, modeInfo.yesterdayAmount);

  return (
    <div className={styles.finCard}>
      <div className={styles.finCard__heading}>
        <span className={styles.finCard__title}>{modeInfo.title}</span>
        <span className={styles.finCard__date}>Today</span>
      </div>
      <div className={styles.finCard__divider} />
      <div className={styles.finCard__info}>
        <div className={styles.finCard__infoAmount}>
          <span
            className={styles.finCard__amount}
          >{`$${modeInfo.todayAmount}`}</span>
          <span
            className={`${styles.finCard__change} ${
              modeInfo.todayAmount - modeInfo.yesterdayAmount <= 0
                ? mode === "expense"
                  ? styles.good
                  : styles.bad
                : mode === "expense"
                ? styles.bad
                : styles.good
            }`}
          >{`${change}`}</span>
        </div>
        <p
          className={styles.finCard__compare}
        >{`Compared to $${modeInfo.yesterdayAmount} yesterday`}</p>
        <div className={styles.finCard__lastWeek}>
          <span>{`Last week ${modeInfo.lastWeek}`}</span>
          <span>{`$${modeInfo.lastWeekAmount}`}</span>
        </div>
      </div>
    </div>
  );
}

function getChangeText(today, yesterday) {
  let dummy = ((today - yesterday) * 100) / yesterday;

  if (dummy <= 0) {
    dummy *= -1;
    return `↓ ${dummy.toFixed(1)}%`;
  } else {
    return `↑ ${dummy.toFixed(1)}%`;
  }
}
