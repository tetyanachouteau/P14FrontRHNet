import React from 'react';
import PropTypes from 'prop-types';
import styles from './Callout.module.css';

/**
 * Callout component
 * @param {string} className - Additional CSS class names to apply to the callout.
 * @param {string} type - Type of callout (e.g., 'success', 'warning', 'info').
 * @param {string} title - Title of the callout.
 * @param {string} icon - Icon to display in the callout.
 * @param {ReactNode} children - The content of the callout.
 */
function Callout({ className, type = "erreur404", icon, title, children }) {
    return (
        <div className={`${styles.callout} ${styles[type]} ${className ?? ""}`}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

Callout.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node.isRequired
};

export default Callout;
