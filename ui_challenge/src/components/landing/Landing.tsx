import React, { useState } from "react";
import styles from "./Landing.module.css";
import CustomButton from "../Button/Button"; 
import Right from "../RightSide/Right"; 
import logo from "../../assets/logo.svg";
import bg from "../../assets/bg-pattern-desktop.svg";

function Landing() {
  const [email, setEmail] = useState("");          
  const [error, setError] = useState(false);       

  // simple email   validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
      console.log("Email submitted:", email);
      
    }
  };

  return (
    <main
      className={styles.container}
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
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

          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />

            <CustomButton 
              text=">" 
              onClick={handleSubmit} 
            />

            {error && (
              <p className={styles.errorMsg}>Please provide a valid email</p>
            )}
          </form>
        </div>
      </div>

      <Right />
    </main>
  );
}

export default Landing;
