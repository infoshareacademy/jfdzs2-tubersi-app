import React, { PureComponent} from 'react';
import YouTube from 'react-youtube';

import './style.css';

class Player extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      positionTitle: '105%',
      visibilityTitle: 'visible',
      musicNumber: 0,
    }
    this.controlVideo = null;
  }

  componentDidMount() {
    setInterval(this.setPositionTitle, 250);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.playListActually !== this.props.playListActually) {
      this.setState({
        musicNumber: 0,
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.setPositionTitle);
    this.controlVideo.stopVideo();
  }

  onReady = (event) => {
    this.controlVideo = event.target;
    event.target.playVideo();
  }

  setPositionTitle = () => {
    let positionTitle = parseInt(this.state.positionTitle);
    let visibilityTitle;
    if(positionTitle < - 75) {
      visibilityTitle = 'hidden';
    }
    if(positionTitle < - 80) {
      positionTitle = 120;
    }
    else {
      positionTitle -= 1;
    }
    this.setState({
      positionTitle: positionTitle + '%',
      visibilityTitle,
    })
  }

  checkNextVideo = () => {
    if(this.props.playListActually.music.length - 1 === this.state.musicNumber) {
      this.controlVideo.stopVideo();
    }
    else {
      this.setState({
        musicNumber: this.state.musicNumber + 1,
        positionTitle: '105%',
       })
    }
  }

  whenError =() => {
    if(this.props.playListActually.music.length - 1 === this.state.musicNumber) {
      this.controlVideo.stopVideo();
    }
    else {
      this.setState({
        musicNumber: this.state.musicNumber + 1,
       })
    }
  }

  render() {
    return (
      <div className="content-player">
        <YouTube
          className="player"
          videoId={
            this.props.playListActually.music[
              this.state.musicNumber
            ].idVideo
          }
          opts={opts}
          onReady={this.onReady}
          onEnd={this.checkNextVideo}
          onError={this.whenError}
        />
        <div className="content-player-underline" />
        <div className="content-player-actually-music-title">
          <p 
            className="content-player-actually-music-title-text"
            style={{
              left: this.state.positionTitle,
              visibility: this.state.visibilityTitle,
            }}
          >
            {this.props.playListActually.music[this.state.musicNumber].title.substr(0,16)}
          </p>
        </div>
        <div className="content-player-title-music">
          
        </div>
      </div>
    );
  }
}

const opts = {
  playerVars: { 
    autoplay: 1,
    //controls: 0,
  }
};


export default Player;