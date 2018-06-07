import './style.css';

import React, { Component } from 'react';

export default class Error404 extends Component {
    render() {
        return  <div className="error">
                    <div className="error-title">
                        <div className="error-text">
                            <span className="error-letter" data-letter="4">4</span>
                            <span className="error-letter" data-letter="0">0</span>
                            <span className="error-letter" data-letter="4">4</span>
                        </div>
                        <img className="error-tube-logo-image"
                             src={require('../../Images/Error-404.png')}
                            alt="error-tube-logo"
                        />
                    </div>
                </div>
    }
}