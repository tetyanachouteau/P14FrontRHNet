// src/components/Modal.js
import Styles from './Modal.module.css';
import Button from './Button';

const Modal = ({ show, children, config }) => {
    // If 'show' is false, do not render the modal
    if (!show) {
        return null;
    }

    // Default configuration for the modal if none is provided
    const configuration = config ?? {
        buttons: [
            {
                label: "OK",
                action: () => {}, // Default action does nothing
                className: {} // Default class name
            }
        ],
        showCloseIcon: false, // Default to not show the close icon
        onCloseIcon: () => {
            show = false; // Default close action sets show to false
        },
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                {/* Modal title and optional close icon */}
                <div className={Styles.title}>
                    {configuration.title}
                    {configuration.showCloseIcon && 
                        <div className={Styles.cross} onClick={configuration.onCloseIcon}>&#x274C;</div>
                    }
                </div>
                {/* Modal children content */}
                <div className={Styles.children}>
                    {children}
                </div>
                {/* Modal button group */}
                <div className={Styles.buttonGroup}>
                    {/* Iterate over the configuration.buttons array and render each button */}
                    {configuration.buttons.map((button, index) => (
                        <Button 
                            key={index} 
                            className={button.className} 
                            onClick={button.action}
                        >
                            {button.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;

// Configuration of the modal is done through the 'config' prop, which can include:
// - buttons: Array of button configurations, each with a label, action (callback function), and className.
// - showCloseIcon: Boolean to determine if the close icon should be shown.
// - onCloseIcon: Function to be called when the close icon is clicked.
