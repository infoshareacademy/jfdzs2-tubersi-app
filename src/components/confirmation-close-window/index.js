import React from 'react';

import './style.css';

const ShowConfirmationWindowClose = (props) => { 
    return (
        <React.Fragment>
            <div 
                className="confirmation-hide"
                onClick={props.closeConfirmation}/>
            <div className="confirmation-content">
                <div className="confirmation-content-title">
                    <span className="confirmation-content-title-text">
                        Potwierdzenie
                    </span>
                    <span 
                        className="confirmation-content-title-exit glyphicon glyphicon-remove"
                        onClick={props.closeConfirmation}
                    />
                </div>
                <div className="confirmation-content-contain">
                    <p className="confirmation-content-contain-text">
                        {props.description}
                    </p>
                </div>
                <div className="confirmation-content-options">
                    <button 
                        className="confirmation-content-options-cancel"
                        onClick={props.closeConfirmation}>
                        Anuluj
                    </button>
                    <button 
                        className="confirmation-content-options-confirm"
                        onClick={props.acceptedConfirm}
                    >
                        Potwierdź
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
} 

export default ShowConfirmationWindowClose;