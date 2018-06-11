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
                    <div className="error-content col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        <p className="error-help-text">
                            Znajdź szukaną podstronę, kawałku, lub playlistę na Tubersi:
                        </p>
                        <input className="error-input-search col-xs-12 col-sm-8"
                               placeholder="Szukaj..."
                        />
                        <button className="error-button-search col-xs-12 col-sm-2">Szukaj</button>
                    </div>
                    <div className="error-help col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <p className="error-suggestion col-xs-3">
                            Kontakt
                        </p>
                        <span className="error-suggestion-space col-xs-1">
                            --
                        </span>
                        <p className="error-suggestion col-xs-3">
                            Tubersi Status
                        </p>
                        <span className="error-suggestion-space col-xs-1">
                            --
                        </span>
                        <p className="error-suggestion col-xs-3">
                            @tubersi
                        </p>
                    </div>
                    <div className="error-icon">
                        <img src={require('../../Images/Youtube-icon-64-64.png')}/>
                    </div>
                </div>
    }
}


 
