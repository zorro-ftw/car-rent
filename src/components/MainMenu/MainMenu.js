"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./MainMenu.module.scss";
import MenuItem from "./MenuItem/MenuItem";

export default function MainMenu() {
  // State to follow currently active tab & page
  const [activeTab, setActiveTab] = useState("Dashboard");

  // For the sake of responsiveness we define this state to be used in mobile & tablet version.
  const [isDrawerOpen, setDrawer] = useState(false);

  const drawerStyle = {
    "--drawer-state": isDrawerOpen ? "translateX(0px)" : "translateX(-240px)",
  };

  // Router for navigation
  const router = useRouter();

  const routeDecider = {
    Dashboard: "dashboard",
    Drivers: "drivers",
    Bookings: "bookings",
    Notifications: "notifications",
    Settings: "settings",
    "Payment Details": "payment-details",
    Transactions: "transactions",
    "Car Report": "car-report",
  };

  // Defining the navigation portion of menu items
  const menuListNav = [
    "Dashboard",
    "Drivers",
    "Bookings",
    "Notifications",
    "Settings",
  ];

  // Defining the details portion of menu items
  const menuListDet = ["Payment Details", "Transactions", "Car Report"];

  const navHandler = (tab) => {
    router.push(`/${routeDecider[tab]}`);
    setActiveTab(tab);
  };

  // Converting navigation portion to MenuItem to render
  const menuItemListNav = converToMenuItem(menuListNav, activeTab, navHandler);

  // Converting details portion to MenuItem to render
  const menuItemListDet = converToMenuItem(menuListDet, activeTab, navHandler);

  return (
    <div className={styles.menu} style={drawerStyle}>
      <div className={styles.menu__top}>
        <div
          className={styles.menu__drawerBtn}
          onClick={() => {
            setDrawer(!isDrawerOpen);
          }}
        >
          {isDrawerOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <h2 className={styles.menu__title}>CAR RENT</h2>
        <div className="menu__navigation">
          <ul className={styles.menu__list}>{menuItemListNav}</ul>
        </div>
        <div className={styles.menu__divider}></div>
        <div className="menu__details">
          <p className={styles.menu__detailsTitle}>Report</p>
          <ul className={styles.menu__list}>{menuItemListDet}</ul>
        </div>
      </div>
      <button className={styles.menu__logout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Logout
      </button>
    </div>
  );
}

// Function to convert menu lists to MenuItem components
function converToMenuItem(list, activeTab, handlerFunc) {
  return list.map((item) => (
    <MenuItem
      key={item}
      text={item}
      isActive={activeTab === item}
      onClick={handlerFunc}
    />
  ));
}
