import React from 'react';
import styles from "./Input.module.css";

/**
 * Input component to render a styled input field with a label and error message.
 *
 * @param {string} label - The text to display for the label associated with the input element.
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {string} type - The type attribute for the input element (e.g., text, number, date).
 * @param {string} controlId - The id attribute for the input element, which is also used for the htmlFor attribute of the label for accessibility.
 * @param {function} onChange - The function to call when the value of the input changes.
 * @param {string} hasError - The error message to display if there is an error.
 * @param {string} value - The current value of the input element.
 */
function Input({ label, placeholder, type, controlId, onChange, hasError, value }) {

    return (
        <div className={styles.group}>
            {hasError && <div className={styles.errorMsg}>{hasError}</div>}
            <div className={styles.groupInput}>
                <label className={styles.label} htmlFor={controlId}>{label}</label>
                <input 
                    className={`${styles.input} ${value.trim() !== "" ? styles["input-completed"] : ""} ${hasError ? styles.error : ""}`}
                    value={value}
                    onChange={onChange}
                    id={controlId}
                    type={type}
                    placeholder={placeholder}
                    aria-label={label}
                />
            </div>
        </div>
    );
}

export default Input;
