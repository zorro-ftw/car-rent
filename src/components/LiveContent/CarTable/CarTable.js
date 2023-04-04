import styles from "./CarTable.module.scss";
import filter from "../../../../public/assets/filter.svg";
import Image from "next/image";
import CarItem from "./CarItem/CarItem";

export default async function CartTable() {
  const status = await getCarStatus();

  const renderCars = status.map((car, index) => (
    <CarItem key={car.id} car={car} index={index} />
  ));

  return (
    <div className={styles.carTable}>
      <div className={styles.carTable__topRow}>
        <h4 className={styles.carTable__title}>Live Car Status</h4>
        <div className={styles.carTable__filter}>
          <Image src={filter} alt="filter" />
          <span>Filter</span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Car no</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Earning</th>
            <th>{""}</th>
          </tr>
        </thead>

        <tbody>{renderCars}</tbody>
      </table>
    </div>
  );
}

async function getCarStatus() {
  const res = await fetch(
    "https://jazzy-selkie-d6e3b7.netlify.app/api/carStatus"
  );
  const data = await res.json();
  return data;
}
