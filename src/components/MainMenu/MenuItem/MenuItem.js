import Image from "next/image";
import styles from "./MenuItem.module.scss";
import bell from "../../../../public/assets/bell.svg";
import booking from "../../../../public/assets/booking.svg";
import car from "../../../../public/assets/car.svg";
import dashboard from "../../../../public/assets/dashboard.svg";
import payment from "../../../../public/assets/payment.svg";
import report from "../../../../public/assets/report.svg";
import settings from "../../../../public/assets/settings.svg";
import transaction from "../../../../public/assets/transaction.svg";

export default function MenuItem({ text, isActive, onClick }) {
  const imageDecider = {
    Dashboard: dashboard,
    Drivers: car,
    Bookings: booking,
    Notifications: bell,
    Settings: settings,
    "Payment Details": payment,
    Transactions: transaction,
    "Car Report": report,
  };

  return (
    <li
      className={`${styles.menu__item} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(text)}
    >
      <div
        className={`${styles.menu__itemInd} ${isActive ? "" : styles.idle}`}
      />
      <Image src={imageDecider[text]} alt={text} />
      {text}
    </li>
  );
}
