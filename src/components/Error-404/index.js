import './style.css';

import React, { Component } from 'react';

export default class Error404 extends Component {

    render() {
        return  <div className="error">
                    <div className="error-title">
                        <div className="error-title-contain">
                            <p className="error-title-contain-text-404">
                                <img className="error-title-contain-text-image"
                                     src={require('../../Images/Error-404.jpg')}
                                     alt="error-404"
                                />
                                ERROR 404
                            </p>
                            <p className="error-title-contain-text-alert">
                                Strona której aktualnie szukasz, nie istnieje lub nie jest dostępna.
                            </p>
                        </div>
                    </div>
                    <div className="error-content col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        <p className="error-content-help-text">
                            Znajdź szukaną podstronę, kawałku, lub playlistę na Tubersi:
                        </p>
                        <input className="error-content-input-search col-xs-12 col-sm-8"
                               placeholder="Szukaj..."
                        />
                        <button className="error-content-button-search col-xs-12 col-sm-2">Szukaj</button>
                    </div>
                    <div className="error-content-help col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <p className="error-content-help-suggestion col-xs-12 col-sm-2">
                            Kontakt
                        </p>
                        <span className="error-content-help-suggestion-space col-xs-12 col-sm-3">
                            ---------------
                        </span>
                        <p className="error-content-help-suggestion col-xs-12 col-sm-2">
                            Status
                        </p>
                        <span className="error-content-help-suggestion-space col-xs-12 col-sm-3">
                            ---------------
                        </span>
                        <p className="error-content-help-suggestion col-xs-12 col-sm-2">
                            @tubersi
                        </p>
                    </div>
                    <div className="error-icon">
                        <img className="error-icon-image"
                             src={require('../../Images/Youtube-icon-64-64.png')}
                             alt="error-icon"
                        />
                        <p className="error-icon-text">Strona Główna</p>
                    </div>
                </div>
    }
}


 
