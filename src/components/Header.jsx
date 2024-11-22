import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import userProfile from "../assets/images/icon-user-profile.svg";
import logout from "../assets/images/icon-logout.svg";

const Header = () => {
  const [userDropdownToggleState, setUserDropdownToggleState] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerInner}>
          <div className={styles.userProfileWrapper}>
            <div
              className={styles.userProfileTrigger}
              onClick={() => setUserDropdownToggleState(!userDropdownToggleState)}
            >
              <img src={userProfile} alt="user profile" />
            </div>
            {userDropdownToggleState && (
              <div className={styles.userProfileDropdown}>
                <ul>
                  <li>
                    <div className={styles.user}>
                      <div className={styles.avatar}>N</div>
                      <div className={styles.userInfo}>
                        <h5>NAVEEN</h5>
                        <p>Online</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.logoutBlock}>
                    <div className={logout}>
                      <img className={styles.logoutIcon} src={logout} alt="logout" />
                    </div>
                    <div className={styles.logoutText}>
                    <Link to="/">Logout</Link>
                    </div>
                    
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
