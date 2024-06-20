import React from 'react';
import Styles from './Modal.module.css';
import Button from './Button';
import closeIcon from '../assets/images/closeIcon.png'; 


const Modal = ({ show, children, config }) => {
    // If 'show' is false, do not render the modal
    if (!show) {
        return null;
    }
    const handleSave = () => {
        console.log("Save button clicked");
    };

    // Default configuration for the modal if none is provided
    const defaultConfig = {
        buttons: [
            {
                label: "Save",
                action: handleSave,
                className: "save-button",
                icon: closeIcon,
            }
        ],
        showCloseIcon: true, // Default to not show the close icon
        onCloseIcon: () => {
            // Default close action sets show to false
            console.log("Close icon clicked (default action)");
        },
    };

    // Merge default config with provided config
    const configuration = { ...defaultConfig, ...config };

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                {/* Modal title and optional close icon */}
                <div className={Styles.title}>
                    {configuration.title}
                    {configuration.showCloseIcon && 
                        <img alt="close cross" className={Styles.cross} onClick={configuration.onCloseIcon} src={closeIcon}/>
                    }
                </div>
                {/* Modal children content */}
                <div className={Styles.children}>
                    {children}
                </div>
                {/* Modal button group */}
                <div className={Styles.buttonGroup}>
                    {/* Check if buttons array exists and then map over it */}
                    {configuration.buttons && configuration.buttons.map((button, index) => (
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
