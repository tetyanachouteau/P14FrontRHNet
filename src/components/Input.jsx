import styles from "./Input.module.css"

function Input({ label, placeholder, type, controlId, onChange, hasError, value }) {

    return (
        <div className={styles.group}>
            {hasError && <div className={styles.errorMsg}>{hasError}</div>}
            <div className={styles.groupInput}>
                <label className={styles.label} htmlFor={controlId}>{label}</label>
                <input className={hasError ? [styles.input, styles.error].join(" ") : styles.input} value={value} onChange={onChange} id={controlId} type={type} placeholder={placeholder} aria-label={label} pattern={type === "date" ? "\\d{4}-\\d{2}-\\d{2}" : ""} />
            </div>
        </div>
    );
}


export default Input;