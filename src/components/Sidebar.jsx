import React from "react";
import logo from "../assets/images/icon-logo.svg";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";
import dashboardMenu from "../assets/images/icon-dashboard.svg"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <nav className={styles.menus}>
        <ul>
          <li>
            <Link to="/dashboard">
              <img src={dashboardMenu} alt="dashboard icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.settings}>
       
      </div>
    </aside>
  );
};

export default Sidebar;
