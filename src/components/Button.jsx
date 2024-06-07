import styles from "./Button.module.css"

function Button({className, children, onClick}) {

    return (
        <button type="button" className={[styles.button, className].join(" ")} onClick={onClick}>{children}</button>
    );
}

export default Button;