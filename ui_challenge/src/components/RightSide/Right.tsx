import styles from "./Right.module.css"
import React from "react"
import heroImage from "../../assets/hero-desktop.jpg"; 

const Right: React.FC = () => {
    return <div
     className={styles.right}
     style={{backgroundImage: `url(${heroImage})`}}
     ></div>
};

export default Right;


