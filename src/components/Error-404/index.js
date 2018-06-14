import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import ErrorPopUpEmail from '../Error-Pop-Up-Email';

import './style.css';

export default class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpVisible: false,
        }
    }

    setVisiblePopUp = () => {this.setState({popUpVisible: !this.state.popUpVisible});};

    render() {
        return  <div className="error">
                    {this.state.popUpVisible ?
                        <FadeIn>
                            <ErrorPopUpEmail
                                setVisiblePopUp = 
                                    {this.setVisiblePopUp}/>
                        </FadeIn>
                        :null
                    }
                    
                    <div className="error-title">
                        <div className="error-title-contain">
                            <p className="error-title-contain-text-404">
                                <img className="error-title-contain-text-image"
                                     src={require('../../Images/Error-404.gif')}
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
                        <button className="error-content-button-search col-xs-12 col-sm-2">
                            Szukaj
                        </button>
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
                        <p className="error-content-help-suggestion col-xs-12 col-sm-2"
                           onClick={this.setVisiblePopUp} 
                        >
                            @tubersi
                        </p>
                    </div>
                    <div className="error-icon">
                        <div className="error-icon-contain">
                            <img className="error-contain-icon-image"
                                 src={require('../../Images/Youtube-icon-64-64.png')}
                                 alt="error-icon"
                            />
                            <p className="error-icon-contain-text">
                                Strona Główna
                            </p>
                        </div>
                    </div>
                    <div className="pop"></div>
                </div>
    }
}


 
