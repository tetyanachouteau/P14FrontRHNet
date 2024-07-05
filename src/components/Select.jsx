import React, { useState } from "react";
import styles from "./Select.module.css";

function Select({ label, children, controlId, onChange, hasError, option }) {
    const [isCompleted, setIsCompleted] = useState(false);
   

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(e);
        setIsCompleted(value !== "" && value !== ""); // Check if the value is not the first option
       
    };

    return (
        <div className={styles.group}>
            {hasError && <div className={styles.errorMsg}>{hasError}</div>}
            <div className={styles.groupInput}>
                <label className={styles.label} htmlFor={controlId}>{label}</label>
                <select
                    id={controlId}
                    className={`${styles.select} ${isCompleted ? styles["select-completed"] : ""} ${hasError ? styles.error : ""}`}
                    onChange={handleChange}
                >
                    {children}
                </select>

            </div>
        </div>
    );
}

export default Select;
