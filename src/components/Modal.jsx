// src/components/Modal.js
import Styles from './Modal.module.css'
import Button from './Button';

const Modal= ({ show, children, config }) => {

    if (!show) {
        return null;
    }

    const configuration = config ?? {
        buttons: [
            {
                label: "OK",
                action: () => {},
                className: {}
            }
        ],
        showCloseIcon: false,
        onCloseIcon: () => {
            show = false
        },
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.title}>
                    {configuration.title}
                    {configuration.showCloseIcon && <div className={Styles.cross} onClick={configuration.onCloseIcon}>&#x274C;</div>}
                </div>
                <div className={Styles.children}>
                {children}
                </div>
                <div className={Styles.buttonGroup}>
                    { configuration.buttons.map((el,index) => {
                        return <Button key={index} className={el.className} onClick={el.action}>{el.label}</Button>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modal;

// pas children, determiner bouton, decider quoi il fait à par rapport

//ok c'est callback
