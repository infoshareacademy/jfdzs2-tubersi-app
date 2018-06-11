import React, { Component } from 'react';

import './style.css';

export default class Error404 extends Component {

    render() {
        return  <div className="error">
                    <div className="error-title">
                        <img className="error-message"
                             src={require('../../Images/Error-message.png')}
                             alt="error-message"
                        />
                    </div>
                    <div className="error-content col-xs-10 col-xs-offset-1">
                        <p className="error-help-text">Znajdź szukaną podstronę, kawałku, lub playlistę na Tubersi</p>
                        <label>Name</label>
                        <input type="text" name="name"/>
                        <span>Enter your full name here</span>
                    </div>
                </div>
    }
}


 
