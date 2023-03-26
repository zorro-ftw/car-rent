import Image from "next/image";
import styles from "./CarItem.module.scss";
import Alex from "../../../../../public/assets/alex_noman.svg";
import Razib from "../../../../../public/assets/razib_rahman.svg";
import Luke from "../../../../../public/assets/luke_norton.svg";

const imageDecider = {
  "Alex Noman": Alex,
  "Razib Rahman": Razib,
  "Luke Norton": Luke,
};

const circleDecider = {
  "In route": styles.inRoute,
  Pending: styles.pending,
  Completed: styles.completed,
};

export default function CarItem({ car, index }) {
  return (
    <tr className={styles.carItem}>
      <td className={styles.carItem__no}>{index}</td>
      <td>
        <span className={styles.carItem__id}>{car.id}</span>
      </td>
      <td className={styles.carItem__driver}>
        <Image src={imageDecider[car.driver]} alt="driver" />
        <span>{car.driver}</span>
      </td>
      <td>
        <div className={styles.carItem__status}>
          <div
            className={`${styles.carItem__circle} ${
              circleDecider[car.status]
            } `}
          />
          <span>{car.status}</span>
        </div>
      </td>
      <td className={styles.carItem__earning}>{car.earning}</td>
      <td>
        <button>Details</button>
      </td>
    </tr>
  );
}
