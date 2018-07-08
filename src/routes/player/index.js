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
    this.setPosition = null;
    this.getTime = null;
    this.durationTime = '0:00';
    this.timeActually = '0:00';
  }

  componentDidMount() {
   this.setPosition = setInterval(this.setPositionTitle, 250);
    this.getTime = setInterval(this.getDurationTimeVideo, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.playListActually !== this.props.playListActually) {
      this.setState({
        musicNumber: 0,
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.setPosition);
    clearInterval(this.getTime);
    if(this.controlVideo) {
      this.controlVideo.clearVideo();
    }
  }

  onReady = (event) => {
    this.controlVideo = event.target;
    event.target.playVideo();
  }

  setPositionTitle = () => {
    let positionTitle = parseInt(this.state.positionTitle, 10);
    let visibilityTitle;
    if(positionTitle < - 85) {
      visibilityTitle = 'hidden';
    }
    if(positionTitle < - 87) {
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

  getDurationTimeVideo = () => {
    if(this.controlVideo) {
     let timeDurationEnd = Math.floor(this.controlVideo.getDuration());
     let timeActually = Math.floor(this.controlVideo.getCurrentTime());
     this.formatNumberToTime(timeDurationEnd, 'duration');
     this.formatNumberToTime(timeActually, 'actually'); 
    }
  }

  formatNumberToTime(numberToFormat, timeSet) {
    let times;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    if(numberToFormat > 3600) {
       times = this.formatTime(numberToFormat, 3600);
       hours = times.timeAdd;
       numberToFormat = times.time;
    }
    
    if(numberToFormat > 60) {
      times = this.formatTime(numberToFormat, 60);
      minutes = times.timeAdd;
      numberToFormat = times.time;
    }
    seconds = numberToFormat;
    if(timeSet === 'duration') {
      this.durationTime = this.setFormatTime(seconds, minutes, hours);
    }
    else {
      this.timeActually = this.setFormatTime(seconds, minutes, hours);
    }
  }

  setFormatTime(seconds, minutes, hours) {
    let textTime ='';
    if(hours > 0) {
      textTime += hours + ':';
      if(minutes > 9) {
        textTime += minutes + ':';
      } 
      else {
        textTime += '0' + minutes + ':';
      }

      if(seconds > 9) {
        textTime += seconds;
      }
      else {
        textTime += '0' + seconds;
      }  
    }

    else if(minutes > 0) {
      textTime += minutes + ':';
      if(seconds > 9) {
        textTime += seconds;
      }
      else {
        textTime += '0' + seconds;
      }  
    }
    else {
      textTime += '0:';
      if(seconds > 9) {
        if(seconds > 59) {
          textTime = '1:00';
        }
        else {
          textTime += seconds;
        }
      }

      else {
        textTime += '0' + seconds;
      } 
    }

    return textTime;
  }

  formatTime(time, divider) {
    let timeAdd = time;
    time %= divider;
    timeAdd -= time;
    timeAdd /= divider;
    return {
      time,
      timeAdd,
    }
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
        <div className="content-player-options">
          <span className="content-player-options-hide glyphicon glyphicon-minus" />
          <span 
            className="content-player-options-close glyphicon glyphicon-remove" 
            onClick={()=>{this.props.activeVideoAndSetPlayList(false, null)}}
            />
          <div className="content-player-options-underline" />
        </div>
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
            {this.props.playListActually.music[this.state.musicNumber].title.length > 16 ?
              ' .......'
              :
              ''
            }
          </p>
          <p className="content-player-actually-music-title-time">
            {this.timeActually} / {this.durationTime}
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