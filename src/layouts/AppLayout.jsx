// src/layouts/AppLayout.jsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import styles from "./AppLayout.module.css"

const AppLayout = ({ children }) => (
  <div className={styles.mainWrapper}>
    <Header />
    <Sidebar />
    <main>
      {children}
    </main>
  </div>
);

export default AppLayout;
