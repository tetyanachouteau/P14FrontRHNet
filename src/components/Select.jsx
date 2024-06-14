// src/components/Select.js
//package
import styles from "./Select.module.css";

/**
 * Select component to render a styled select dropdown with a label.
 *
 * @param {string} label - The text to display for the label associated with the select element.
 * @param {ReactNode} children - The options to be rendered inside the select element.
 * @param {string} controlId - The id attribute for the select element, which is also used for the htmlFor attribute of the label for accessibility.
 * @param {string} title - An additional prop that might be used for other purposes (not utilized in this snippet).
 */
function Select({ label, children, controlId, onChange, hasError }) {
    return (
        <div className={styles.group}>
            {/* Display error message if hasError is true hasError renomer car c'est sinon vrais ou faut*/}
            {hasError && <div className={styles.errorMsg}>{hasError}</div>}
            <div className={styles.groupInput}>
                {/* Label for the select element */}
                <label className={styles.label} htmlFor={controlId}>{label}</label>

                {/* Select element with aria-label for accessibility */}
                <select id={controlId} aria-label={label} className={styles.select} onChange={onChange}>
                    {/* Render the children elements passed to the Select component */}
                    {children}
                </select>
            </div>
        </div>
    );
}

export default Select;

// Props explanation:
// - label: The text to display for the label associated with the select element.
// - children: The options to be rendered inside the select element.
// - controlId: The id attribute for the select element, which is also used for the htmlFor attribute of the label for accessibility.
// - title: An additional prop that might be used for other purposes (not utilized in this snippet).

// CSS classes from Select.module.css:
// - styles.group: Applies styles to the container div that wraps the label and select elements.
// - styles.label: Applies styles to the label element.
// - styles.select: Applies styles to the select element.
