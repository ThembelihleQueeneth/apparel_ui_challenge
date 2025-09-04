import React from "react";
import styles from "./Landing.module.css"
import CustomButton from "../Button/Button"; //importing a button 
import Right from "../RightSide/Right"; //import Right side of the page

function Landing() {
    return(
        <main className="container">
            <div className="left">
                <div className="logo"><img src="" alt="" /></div>
                <div className="content">
                    <h1 className="heading1">We're</h1><br />
                    <h2 className="heading2">coming</h2>
                    <h3 className="heading3">soon</h3>

                    <p className="description">
                        Hello fellow shoppers! We're currently building our new
                        fashion store. Add your email below to stay up-to-date with announcements
                        and our launch deals. 

                    </p>
                    <form action="#">
                        <input type="email" name="email" id="email" placeholder="Email Address " required/>
                        <CustomButton text=">" onClick={()=>{
                            console.log("Email submitted")
                        }}></CustomButton>
                        <p id="error-msg">Please provide a valid email</p>
                    </form>
                </div>

            </div>
            <Right />


        </main>

    )

}

export default Landing;