import styles from "./Error.module.css";
import React from "react";
import Border from "../components/Border";
import Callout from "../components/Callout";

const Error = () => {

  return (
    <div className={styles.content}>
      <Border />
      <div className={styles.right}>
        <h1>Error Page</h1>
        <div className={styles.callout}>
          😉
          <Callout
            title={"Error 404"}
          >
            &#9888; Oops! The page you are requesting does not exist.
          </Callout>
        </div>

        <div className={styles.callout}>
          😽
          <Callout
            title={"Help"}
            type={"info"}
          >
            <p>🛈 Back to home page by clicking the nav link.</p>  
            <p>Support contact: <a href="mailto:tetyna.chouteau@gmail.com">tetyna.chouteau@gmail.com</a></p>
          </Callout>
        </div>

        <div className={styles.callout}>
          💌
          <Callout
            title={"About HRnet - Wealth Health"}
            type={"about"}
          >
            <div>
              <p>🛈 &#9752; We are a technology department of the large financial company - WealthHealth, specializing in the finances of the flower market.</p>
              <p>The company uses an internal web application called HRnet, which manages employee records.</p>
              <p className={styles.p}>
                Flower market: The flower and plant market represented a total amount of approximately €1.6 billion in 2022. In 2022, the 13,200 French florists captured 46% of sales in value.
              </p>

            </div>
          </Callout>
        </div>
      </div>
    </div>
  );
};

export default Error;
