import styles from "./Select.module.css"

function Select({ label, children, controlId, title }) {

    return (
        <div className={styles.group}>
            <label className={styles.label} htmlFor={controlId}>{label}</label>
            <select id={controlId} aria-label={label} className={styles.select}>
                {children}
            </select>
        </div>
    );
}


export default Select;