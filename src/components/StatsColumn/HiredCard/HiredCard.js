import styles from "./HiredCard.module.scss";

export default function HiredCard({ stats }) {
  const change = getChange(stats);

  return (
    <div className={styles.hiredCard}>
      <div className={styles.hiredCard__heading}>
        <span className={styles.hiredCard__title}>Hire vs Cancel</span>
        <span className={styles.hiredCard__date}>Today</span>
      </div>
      {/* Row 1 starts here (Total Hired row) */}
      <div className={styles.hiredCard__row}>
        <div className={`${styles.hiredCard__circle} ${styles.circle1}`} />
        <span className={styles.hiredCard__category}>Total Hired</span>
        <span className={styles.hiredCard__change}>
          {change.hired.percent}{" "}
          <b
            className={
              change.hired.direction === "up" ? styles.good : styles.bad
            }
          >{`${change.hired.direction === "up" ? "↑" : "↓"}`}</b>
        </span>
      </div>
      {/* Row 1 ends here (Total Hired row) */}

      {/* Row 2 starts here (Total Canceled row) */}
      <div className={styles.hiredCard__row}>
        <div className={`${styles.hiredCard__circle} ${styles.circle2}`} />
        <span className={styles.hiredCard__category}>Total Hired</span>
        <span className={styles.hiredCard__change}>
          {change.canceled.percent}{" "}
          <b
            className={
              change.canceled.direction === "up" ? styles.good : styles.bad
            }
          >{`${change.canceled.direction === "up" ? "↑" : "↓"}`}</b>
        </span>
      </div>
      {/* Row 2 ends here (Total Canceled row) */}

      {/* Row 3 starts here (Total Pending row) */}
      <div className={styles.hiredCard__row}>
        <div className={`${styles.hiredCard__circle} ${styles.circle3}`} />
        <span className={styles.hiredCard__category}>Total Hired</span>
        <span className={styles.hiredCard__change}>
          {change.pending.percent}{" "}
          <b
            className={
              change.pending.direction === "up" ? styles.good : styles.bad
            }
          >{`${change.pending.direction === "up" ? "↑" : "↓"}`}</b>
        </span>
      </div>
      {/* Row 3 ends here (Total Pending row) */}
    </div>
  );
}

function getChange(stats) {
  const hiredChangePercent =
    ((stats.today.hired - stats.yesterday.hired) * 100) / stats.yesterday.hired;
  const canceledChangePercent =
    ((stats.today.canceled - stats.yesterday.canceled) * 100) /
    stats.yesterday.canceled;
  const pendingChangePercent =
    ((stats.today.pending - stats.yesterday.pending) * 100) /
    stats.yesterday.pending;

  return {
    hired: {
      percent: `${
        hiredChangePercent < 0 ? hiredChangePercent * -1 : hiredChangePercent
      }%`,
      direction: `${hiredChangePercent < 0 ? "down" : "up"}`,
    },
    canceled: {
      percent: `${
        canceledChangePercent < 0
          ? canceledChangePercent * -1
          : canceledChangePercent
      }%`,
      direction: `${canceledChangePercent < 0 ? "down" : "up"}`,
    },
    pending: {
      percent: `${
        pendingChangePercent < 0
          ? pendingChangePercent * -1
          : pendingChangePercent
      }%`,
      direction: `${pendingChangePercent < 0 ? "down" : "up"}`,
    },
  };
}
