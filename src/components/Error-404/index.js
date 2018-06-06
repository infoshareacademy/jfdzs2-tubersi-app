import React, { Component } from 'react';

import './style.css';

export default class Error404 extends Component {
    render() {
        return  <div className="error">
                    <img className="error-tube-logo-image"
                         src={require('../../Images/Error-404.png')}
                         alt="error-tube-logo"
                    />
                </div>
    }
}