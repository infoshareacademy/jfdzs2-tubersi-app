/* eslint-disable */
import React, { PureComponent} from 'react';
import YouTube from 'react-youtube';

import './style.css';
import './list-music-player.css';

class Player extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      musicNumber: 0,
      playerState: false,
      durationTime: '0:00',
      timeActually: '0:00',
      rangeValue: 0,
      soundValue: 0,
      visibleAlbumPlaylist: true,
      visiblePlayer: true,
    }
    this.controlVideo = null;
    this.setPosition = null;
    this.getTime = null;

  }

  componentDidMount() {
    this.getTime = setInterval(this.getDurationTimeVideo, 1000);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.playListActually !== this.props.playListActually) {
      this.setState({
        musicNumber: 0,
      })
    }
    if(this.controlVideo) {
      if(this.controlVideo.getVolume() !== this.state.soundValue && !this.controlVideo.isMuted) {
        this.setState({
          soundValue: this.controlVideo.getVolume(),
        })
      }
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
    if(this.controlVideo.isMuted()) {
      this.setState({
        soundValue: 0,
      })
    }
    else {
      this.setState({
        soundValue: this.controlVideo.getVolume(),
      })
    }
   
  }

  getDurationTimeVideo = () => {
    if(this.controlVideo) {
     let timeDurationEnd = Math.round(this.controlVideo.getDuration());
     let timeActually = Math.round(this.controlVideo.getCurrentTime());
     this.formatNumberToTime(timeDurationEnd, 'duration');
     this.formatNumberToTime(timeActually, 'actually');
     this.setProgressBarInputChange(timeDurationEnd, timeActually);
    }
  }

  setProgressBarInputChange = (durationTime, actuallyTime) => {
    let time = actuallyTime / durationTime * 100;
    this.setState({
        rangeValue: Math.floor(time),
    })
  }

  formatNumberToTime = (numberToFormat, timeSet) => {
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
      this.setState({
        durationTime: this.setFormatTime(seconds, minutes, hours),
      })
    }
    else if(timeSet === 'actually') {
      this.setState({
          timeActually: this.setFormatTime(seconds, minutes, hours),
      })
    }
    else {
      return this.setFormatTime(seconds, minutes, hours);
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
        playerState: false,
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

  playOrPauseVideo = () => {
    if(this.controlVideo) {
      this.setState({
        playerState: !this.state.playerState,
      })
      if(!this.state.playerState) {
        this.controlVideo.pauseVideo();
      }
      else {
       this.controlVideo.playVideo(); 
      }
    }
  }

  playNextVideo = () => {
    if(this.controlVideo) {
        if(this.props.playListActually.music.length - 1 > this.state.musicNumber) {
          this.checkNextVideo();
        }
        else {
            this.setState({
              musicNumber: 0,
              playerState: false,
            })
        }
    }
  }

  playPreviousVideo = () => {
    if(this.controlVideo) {
        if(this.state.musicNumber === 0) {
            this.setState({
                musicNumber: this.props.playListActually.music.length - 1,
                playerState: false,
            })
        }
        else {
            this.setState({
                musicNumber: this.state.musicNumber - 1,
                playerState: false,
            })
        }
    }
  }

  seekToNext = () => {
      let timeDurationEnd = Math.floor(this.controlVideo.getDuration());
      let timeActually = Math.floor(this.controlVideo.getCurrentTime());

      if(timeActually + 5 < timeDurationEnd) {
        this.controlVideo.seekTo(timeActually + 5);
      }
      else {
        this.playNextVideo();
      }
  }

  seekToPrevious = () => {
      let timeActually = Math.floor(this.controlVideo.getCurrentTime());

      if(timeActually - 5 > 0) {
          this.controlVideo.seekTo(timeActually - 5);
      }
      else {
          this.playPreviousVideo();
      }
  }

  seekVideo = (e) => {
    if(this.controlVideo) {
        this.setState({
            rangeValue: e.target.value,
        })
        let timeDuration = Math.floor(this.controlVideo.getDuration());
        let counter = e.target.value / 100;
        this.controlVideo.seekTo(Math.floor(timeDuration * counter));
    }
  }

  setSound = (e) => {
    if(this.controlVideo) {
      this.setState({
        soundValue: e.target.value,
      })
      if(e.target.value > 0) {
        this.controlVideo.unMute();
      }
      else {
        this.controlVideo.mute();
      }
      this.controlVideo.setVolume(e.target.value);
    }
  }

  setMuteSound = (e) => {
    if(e.target.className === 'content-player-controls-sound glyphicon glyphicon-volume-off' ||
       e.target.className === 'content-player-controls-sound glyphicon glyphicon-volume-down' ||
       e.target.className === 'content-player-controls-sound glyphicon glyphicon-volume-up') {
       if(this.controlVideo) {
       if(this.controlVideo.isMuted()) {
          this.controlVideo.unMute();
        }      
        else {
          this.controlVideo.mute();
        }
      }
    }
  }

  checkStatusSound = () => {
    if(this.controlVideo) {
      if(this.controlVideo.isMuted()) {
        return "content-player-controls-sound glyphicon glyphicon-volume-off";
      }
      else {
        if(this.state.soundValue === 0) {
          return "content-player-controls-sound glyphicon glyphicon-volume-off";
        }
        else if(this.state.soundValue < 50) {
          return "content-player-controls-sound glyphicon glyphicon-volume-down";
        }
        else {
          return "content-player-controls-sound glyphicon glyphicon-volume-up";
        }
      }
    }
  }

  getValueSound() {
    if(this.controlVideo) {
      if(this.controlVideo.isMuted()){
        return 0;
      }
      else {
        return this.state.soundValue;
      }
    }
  }

  breakDurationOnNumber(duration) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    if(parseInt(duration.substr(-3))) {
      seconds += parseInt(duration.substr(-3));
    } 
    else {
      seconds += parseInt(duration.substr(-2));
    }
    minutes += this.getMinute(duration);
    hours += this.getHours(duration);
    seconds = this.countTime(seconds);
    minutes += seconds.timeAdd;
    seconds = seconds.time;
    minutes = this.countTime(minutes);
    hours += minutes.timeAdd;
    minutes = minutes.time;
    return this.formatNumberToTime(hours * 3600 + minutes * 60 + seconds, null);
  }

  countTime(time) {
    let timeAdd = time;
    time %= 60;
    timeAdd -= time;
    timeAdd /= 60;
    return {
      time,
      timeAdd,
    }
  }

  getMinute(duration) {
    let indexStartMinute = duration.indexOf('M');
    if(indexStartMinute !== -1) {
      if(parseInt(duration.substr(indexStartMinute - 2))) {
        return parseInt(duration.substr(indexStartMinute - 2));
      } 
      else {
        return parseInt(duration.substr(indexStartMinute - 1));
      }
    }
    return 0;
  }

  getHours(duration) {
    let indexStartHours = duration.indexOf('H');
    if(indexStartHours !== -1) {
      if(parseInt(duration.substr(indexStartHours - 2))) {
        return parseInt(duration.substr(indexStartHours - 2));
      } 
      else {
        return parseInt(duration.substr(indexStartHours - 1));
      }
    }
    return 0;
  }

  render() {
    return (
      <React.Fragment>
      <div 
        className="content-player"
        style={this.state.visibleAlbumPlaylist ?
                {top: "75px"}
                :
                {top: "-100%"}
              }
      >
        <div className="content-player-options">
          <span className="content-player-controls-fullscreen">
            FULLSCREEN {" "}
            <span className="glyphicon glyphicon-fullscreen"/>
          </span>   
          <span 
            className="content-player-options-hide glyphicon glyphicon-minus"
            onClick={() => {
              this.setState({
                visibleAlbumPlaylist: false,
              })
            }} 
          />
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
        <div className="content-player-title-play">
          {this.props.playListActually.music[
            this.state.musicNumber
          ].title}
        </div>
        <div className="content-player-playlist">
             {this.props.playListActually.music.map((music, index) => {
               let time = this.breakDurationOnNumber(music.duration);
               return (
                 <div 
                  className="content-player-playlist-list"
                  key={index}
                  onClick={() => {
                    this.setState({
                      musicNumber: index,
                    })
                  }}
                  style={
                    this.state.musicNumber === index ?
                      {backgroundColor: "rgb(45,46,50)"}
                      :
                      {opacity: 0.5}
                  }
                 >
                   <div className="content-player-playlist-list-contain"> 
                    <img
                        className="content-player-playlist-list-containt-avatar"
                        src={music.avatar}
                        alt={index + "avatar-music"}
                      />
                    </div>
                  <div className="content-player-playlist-list-title">
                    {music.title}
                  </div>
                  <div className="content-player-playlist-list-time">
                    {time}
                  </div>
                 </div>
                )
             })}
        </div>
      </div>
      <div 
        className="content-player-control-video"
        style={!this.state.visibleAlbumPlaylist && this.state.visiblePlayer ?
          {top: "75px"}
          :
          {top: "-100%"}
        }       
      >
      <div className="content-player-options">
      <span 
        className="content-player-options-list glyphicon glyphicon-th-list" 
        onClick={() => {
          this.setState({
            visibleAlbumPlaylist: true,
          })
        }}
        />
      <span 
        className="content-player-options-hide glyphicon glyphicon-minus"
        onClick={() => {
          this.setState({
            visiblePlayer: false,
          })
        }}
      />
      <span 
        className="content-player-options-close glyphicon glyphicon-remove" 
        onClick={()=>{this.props.activeVideoAndSetPlayList(false, null)}}
        />
      <div className="content-player-options-underline" />
    </div>  
        <div className="content-player-actually-marquee">
              <marquee
                  direction="left"
                  scrollamount="2"
                  scrolldelay="1"
              >
                  {this.props.playListActually.music[this.state.musicNumber].title}
              </marquee>
            </div>
          <div
              className="content-player-actually-music-title"
          >
            <p className="content-player-actually-music-title-time">
              {this.state.timeActually} / {this.state.durationTime}
            </p>
          </div>
          <div className="content-player-controls">
              <span 
                className="content-player-controls-icons glyphicon glyphicon-step-backward"
                onClick={this.playPreviousVideo}
              />
              <span 
                className="content-player-controls-icons glyphicon glyphicon-backward"
                onClick={this.seekToPrevious}
              />
              <span 
                onClick={this.playOrPauseVideo}
                className={this.state.playerState ?
                            "content-player-controls-icons glyphicon glyphicon-play"
                            :
                            "content-player-controls-icons glyphicon glyphicon-pause"
                          }
              />
              <span 
                className="content-player-controls-icons glyphicon glyphicon-forward"
                onClick={this.seekToNext}
              />
              <span 
                className="content-player-controls-icons glyphicon glyphicon-step-forward"
                onClick={this.playNextVideo}
              />
              <div 
                className={this.checkStatusSound()}
                onClick={this.setMuteSound}
                >
                  <div className="content-player-controls-sound-contain">
                    <input 
                      className="content-player-controls-sound-input"
                      type="range"
                      value={this.getValueSound()}
                      onChange={this.setSound}
                    />      
                  </div>
              </div>
              <input
                  className="content-player-controls-progress"
                  type="range"
                  value={this.state.rangeValue}
                  onChange={this.seekVideo}
              />
          </div>
        </div>
        <div 
          className="content-player-hide-player"
          style={!this.state.visiblePlayer ?
                  {top: "100px"}
                  :
                  {top: "-100%"}
                }
          onClick={() => {
              this.setState({
                visiblePlayer: true,
              })
            }}      
        >
           <span className="content-player-hide-player-icon glyphicon glyphicon-music" />
        </div>
      </React.Fragment>
    );
  }
}

const opts = {
  playerVars: { 
    autoplay: 1,
    controls: 0,
  }
};


export default Player;