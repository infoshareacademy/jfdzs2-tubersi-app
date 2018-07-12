import React, { PureComponent } from 'react';
import Layout from '../../components/layout';

import './style.css';

class KeyboardControls extends PureComponent {
    render() {
        return (
            <Layout>
                <div className="keyboard-controls-contain">
                    <p className="keyboard-controls-contain-title">
                        STEROWANIE PLAYEREM
                    </p>
                    <div className="keyboard-controls-contain-underline"/>
                    <div className="keyboard-controls-contain-section-left">
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-left-home">
                                Home
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Uruchomienie sterowania odtwarzacza.
                             </p>
                        </div>
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-left-page-up">
                                <p>Page</p>
                                <p>Up</p>
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Następna piosenka.
                            </p>
                        </div>
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-left-page-down">
                                <p>Page</p>
                                <p>Down</p>
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Poprzednia piosenka.
                            </p>
                        </div>
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-left-space">
                                Spacja
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Start/Pauza wideo.
                            </p>
                        </div>
                    </div>
                    <div className="keyboard-controls-contain-section-right">
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-right-arrow-up">
                                <span className="glyphicon glyphicon-arrow-up" />
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Zwiększenie głośności muzyki.
                            </p>
                        </div>
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-right-arrow-down">
                                <span className="glyphicon glyphicon-arrow-down" />
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Zmniejszenie głośności muzyki.
                            </p>
                        </div>
                        <div className="keyboard-icon-contain">
                            <div className="keyboard-controls-contain-section-right-arrow-right">
                                <span className="glyphicon glyphicon-arrow-right" />
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Przewinięcie muzyki do przodu o 5 sekund.
                            </p>
                        </div>
                        <div className="keyboard-icon-contain">    
                            <div className="keyboard-controls-contain-section-right-arrow-left">
                                <span className="glyphicon glyphicon-arrow-left" />
                            </div>
                            <p className="keyboard-controls-contain-section-right-text">
                                - Przewinięcie muzyki do tyłu o 5 sekund.
                            </p>
                        </div>
                    </div>
                    <div className="keyboard-controls-contain-underline"/>
                </div>
                <div 
                    className="playlist-empty-contain"
                    style={{
                    height: "100px",
                    width: "100%",
                    float: "left"
                    }}
              />
            </Layout>
        )
    }
}

export default KeyboardControls;