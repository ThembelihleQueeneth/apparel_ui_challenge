import React from "react";
import styles from "./Landing.module.css";
import CustomButton from "../Button/Button"; 
import Right from "../RightSide/Right"; 
import logo from "../../assets/logo.svg";

function Landing() {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          
        </div>

        <div className={styles.content}>
          <h1 className={styles.heading1}>We’re</h1>
          <h2 className={styles.heading2}>coming</h2>
          <h3 className={styles.heading3}>soon</h3>

          <p className={styles.description}>
            Hello fellow shoppers! We’re currently building our new
            fashion store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email Address" 
              required 
            />

            <CustomButton 
              text=">" 
              onClick={() => {
                console.log("Email submitted");
              }} 
            />

            <p className={styles.errorMsg}>Please provide a valid email</p>
          </form>
        </div>
      </div>

      <Right />
    </main>
  );
}

export default Landing;
