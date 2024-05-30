// src/components/Modal.js
import React from 'react';
import Styles from './Modale.module.css'
import { Button } from 'react-bootstrap';

const Modale = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                {children}
                <Button className={Styles.button} onClick={onClose}>OK</Button>
            </div>
        </div>
    );
};

export default Modale;
