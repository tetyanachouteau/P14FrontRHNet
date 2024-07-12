import React from "react";
import styles from "./Select.module.css";

function Select({ label, children, controlId, onChange, hasError, value }) {

    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <div className={styles.group}>
            {hasError && <div className={styles.errorMsg}>{hasError}</div>}
            <div className={styles.groupInput}>
                <label className={styles.label} htmlFor={controlId}>{label}</label>
                <select
                    id={controlId}
                    value={value}
                    className={`${styles.select} ${value !== children[0].props.value ? styles["select-completed"] : ""} ${hasError ? styles.error : ""}`}
                    onChange={handleChange}
                >
                    {children}
                </select>

            </div>
        </div>
    );
}

export default Select;
