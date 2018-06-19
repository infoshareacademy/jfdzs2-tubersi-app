import React, { Component } from 'react';

import './style.css';

export default class ErrorPopUpEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameToSendEmail: '',
            messageToSendEmail: '',
        }
    };

    handleSetName = e => {
        this.setState({
            nameToSendEmail: e.target.value
        });
    };

    handleSetMessage = e => {
        this.setState({
            messageToSendEmail: e.target.value
        });
    };

    async handleSubmit(e) {
        e.preventDefault();
        const {nameToSendEmail, messageToSendEmail} = this.state;
    };

    render() {
        return  <React.Fragment>
                    <div className="error-pop-up"
                         onClick={this.props.setVisiblePopUp}
                    />
                    <div className="error-pop-up-contain">
                        <span className="error-pop-up-contain-exit glyphicon glyphicon-remove "
                              onClick={this.props.setVisiblePopUp}   
                        />
                        <form className="error-pop-up-contain-form"
                              onSubmit={this.handleSubmit.bind(this)}
                        >
                            <p className="error-pop-up-contain-form-title">
                                Wyślij do nas wiadomość z problemem!
                            </p>
                            <p className="error-pop-up-contain-form-text">
                                Imię:
                            </p>
                            <input className="error-pop-up-contain-form-input" 
                                placeholder="Imię..."
                                onChange={this.handleSetName}
                            />
                            <p className="error-pop-up-contain-form-text">
                                Wiadomość:
                            </p>
                            <textarea className="error-pop-up-contain-form-textarea"
                                      rows="7"
                                      placeholder="Wiadomość..."
                                      onChange={this.handleSetMessage}
                            />    
                            <input className="error-pop-up-contain-form-submit" 
                                   type="submit" 
                                   value="Wyślij" 
                            />
                        </form>
                    </div>
                </React.Fragment>
    };
}