import styles from "./GroupInput.module.css"

function GroupInput({title, children}) {

    return (
        <fieldset className={styles.fs}>
            {title && <legend className={styles.title}>{title}</legend>}
            {children}
        </fieldset>
    );
}


export default GroupInput;