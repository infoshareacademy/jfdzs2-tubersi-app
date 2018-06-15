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

console.log('* [example 1.1] sending test email');
 
// Require'ing module and setting default options
 
var send = require('gmail-send')({
//var send = require('../index.js')({
  user: 'user@gmail.com',
  // user: credentials.user,                  // Your GMail account used to send emails
  pass: 'abcdefghijklmnop',
  // pass: credentials.pass,                  // Application-specific password
  to:   'user@gmail.com',
  // to:   credentials.user,                  // Send to yourself
                                           // you also may set array of recipients:
                                           // [ 'user1@gmail.com', 'user2@gmail.com' ]
  // from:    credentials.user,            // from: by default equals to user
  // replyTo: credentials.user,            // replyTo: by default undefined
  // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
  subject: 'test subject',
  text:    'gmail-send example 1',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});
 
 
// Override any default option and send email
 
console.log('* [example 1.1] sending test email');
 
var filepath = './demo-attachment.txt';  // File to attach
 
send({ // Overriding default parameters
  subject: 'attached '+filepath,         // Override value set as default
  files: [ filepath ],
}, function (err, res) {
  console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
});
 
