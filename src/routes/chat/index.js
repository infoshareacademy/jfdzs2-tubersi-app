import React, { PureComponent } from 'react';

import './style.css';

import Layout from '../../components/layout';

class Chat extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      messageReference: null,
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.message = '';
    this.inputMessage = null;
  }

  componentDidMount() {
    if(this.props.firebase && !this.state.messageReference) {
      this.setState({
        messageReference: this.props.firebase
        .database()
        .ref('chat')
      })
    }
  }

  componentDidUpdate() {
    if(this.props.firebase && !this.state.messageReference) {
      this.setState({
        messageReference: this.props.firebase
        .database()
        .ref('chat')
      })
    }
  }

  scrollToBottom = (messagesEnd) => {
    if(messagesEnd) {
        messagesEnd.scrollTop = messagesEnd.scrollHeight - messagesEnd.clientHeight;
    }
  }

  sendMessage = (e) => {
    if(e) {
      if(!this.inputMessage) {
        this.inputMessage = e.target;
      }
     if(e.keyCode !== 13) {
       return;
     }
    }

    let newMessage = {
      name: this.props.actuallyUser.name,
      message: this.message,
    }
    let allMessage = [...this.props.dataBaseChat, newMessage];
    this.state.messageReference
      .set(allMessage);
    this.message = '';  
    this.inputMessage.value = '';
  }

  render() {
    return (
      <Layout>
        <div className="chat-contain ">
          <p className="chat-contain-title">
            <i className="fas fa-comments" />
            Chat użytkowników aplikacji
          </p>
          <div 
            className="chat-contain-message"
            ref={(e) => {this.scrollToBottom(e);}}
          >
            {this.props.dataBaseChat ?
              this.props.dataBaseChat.map((message, index) => {
                return(
                  <div 
                    className="chat-contain-message-contain"
                    key={index}
                  >
                    <div className="chat-contain-message-contains">
                      <div className="chat-contain-message-contain-name-contents">
                        {message.name}
                      </div>
                    </div>
                    <div className="chat-contain-message-contains"/>
                    <div className="chat-contain-message-contain-contents">
                      {message.message}
                    </div>
                  </div>
                )  
              })
              :
              null
            }
          </div>
          <div className="chat-contain-send">
            <input
              className="chat-contain-send-input"
              placeholder="Wiadomość..."
              onChange={(e) => {
                this.message = e.target.value
              }}
              onKeyDown={this.sendMessage}
            />
            <button 
              className="chat-contain-send-button"
              onClick={() => {this.sendMessage()}}
            >
              Wyślij
            </button>
          </div>
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
    );
  }
}

export default Chat;