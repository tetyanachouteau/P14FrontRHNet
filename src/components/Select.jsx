import React, { useState } from "react";
import styles from "./Select.module.css";

function Select({ label, children, controlId, onChange, hasError }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(e);
        setIsCompleted(value !== "");
        setShowError(value === "");
    };

    return (
        <div className={styles.group}>
            {showError && <div className={styles.errorMsg}>Selection is required</div>}
            <div className={styles.groupInput}>
                <label className={styles.label} htmlFor={controlId}>{label}</label>
                <select
                    id={controlId}
                    className={`${styles.select} ${isCompleted ? styles["select-completed"] : ""} ${showError ? styles.error : ""}`}
                    onChange={handleChange}
                >
                    {children}
                </select>
            </div>
        </div>
    );
}

export default Select;
