import styles from "./Error.module.css";
import React from "react";
import Border from "../components/Border";
import Callout from "../components/Callout";

const Erreur = () => {

  return (
    <div className={styles.content}>
      <Border />
      <div>
        😉
        <Callout
          title={"Error 404"}
        >
          &#9888; Oops! The page you are requesting does not exist.
        </Callout>

      </div>
      <div>
      🤩
        <Callout
          title={"Success"}
          type={"success"}

        >
          &#9880; The operation was completed successfully!
        </Callout>
</div><div>😽
        <Callout
          title={"Help"}
          type={"info"}
        >
           &#8520; Back to home page by clicking the nav link
        </Callout>
      </div>
    </div>
    
  );
};

export default Erreur;
