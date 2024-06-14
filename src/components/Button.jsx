// src/components/Button.js
import styles from "./Button.module.css";

/**
 * Button component to render a styled button element.
 *
 * @param {string} className - Additional CSS class names to apply to the button.
 * @param {ReactNode} children - The content of the button.
 * @param {function} onClick - The function to call when the button is clicked.
 */
function Button({ className, type, children, onClick}) {
    return (
        // Button element with styles applied and optional additional class name
        <button type={ type?? "button"} className={[styles.button, className].join(" ")} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

// Props explanation:
// - className: Additional CSS class names to apply to the button.
// - children: The content of the button.
// - onClick: The function to call when the button is clicked.

// CSS class from Button.module.css:
// - styles.button: Applies styles to the button element.
