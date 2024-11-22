import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.signInCard}>
        <h1>Welcome Back!</h1>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <div className={`${styles.inputWrapper} ${styles.email}`}>
            <input id="email" type="email" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Email</label>
          <div className={`${styles.inputWrapper} ${styles.password}`}>
            <input id="password" type="password" />
            <a className={styles.forgotPassword}>Forgot Password?</a>
          </div>
        </div>
        <div className={styles.formCheck}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className={styles.ctaPrimary}
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
