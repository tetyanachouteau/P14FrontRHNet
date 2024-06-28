import React from 'react';
import Styles from './Modal.module.css'; // Import CSS styles for the modal
import Button from './Button'; // Import Button component
import closeIcon from '../assets/images/closeIcon.png'; // Import close icon image

const Modal = ({ show, children, config }) => {
    // If 'show' is false, do not render the modal
    if (!show) {
        return null;
    }

    // Function to handle save action
    const handleSave = () => {
        console.log("Save button clicked");
    };

    // Default configuration for the modal if none is provided
    const defaultConfig = {
        title: 'Modal Title', // Default title for the modal
        buttons: [
            {
                label: "Save", // Button label
                action: handleSave, // Function to handle button click
                className: "save-button", // CSS class for the button
                icon: closeIcon, // Icon for the button
            }
        ],
        showCloseIcon: true, // Default to show the close icon
        onCloseIcon: () => {
            // Default action when close icon is clicked
            console.log("Close icon clicked (default action)");
        },
    };

    // Merge default config with provided config
    const configuration = { ...defaultConfig, ...config };

    return (
        <div className={Styles.container}> {/* Modal container */}
            <div className={Styles.content}> {/* Modal content wrapper */}
                <div className={Styles.title}> {/* Modal title and close icon */}
                    {configuration.title} {/* Display modal title */}
                    {configuration.showCloseIcon && // Render close icon if showCloseIcon is true
                        <img
                            alt="close cross"
                            className={Styles.cross} // CSS class for the close icon
                            onClick={configuration.onCloseIcon} // Handle click on close icon
                            src={closeIcon} // Close icon image source
                        />
                    }
                </div>
                <div className={Styles.children}> {/* Modal content */}
                    {children} {/* Render modal children */}
                </div>
                <div className={Styles.buttonGroup}> {/* Modal button group */}
                    {configuration.buttons && configuration.buttons.map((button, index) => (
                        <Button 
                            key={index} 
                            className={button.className} // CSS class for the button
                            onClick={button.action} // Handle click on the button
                        >
                            {button.label} {/* Button label */}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal; // Export Modal component for use in other parts of the application
