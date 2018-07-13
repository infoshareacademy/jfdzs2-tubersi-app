import React, { PureComponent} from 'react';
import YouTube from 'react-youtube';
import FadeIn from 'react-fade-in';

import ShowConfirmationWindowClose from '../../components/confirmation-close-window';
import CloudInformationHelp from '../../components/cloud-information-help';

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
      keySterringVideo: false,
      animateInformationOnActiveKey: false,
      showConfirmationCloseVideo: false,
      setStyleIcon: window.innerWidth < 768 ? true : false,
      fullscreen: false,
      showMoreOptionsWhenFullScreen: false,
      showOptionsPlayer: false,
      enterMouseOnPlayerWhenFullscreen: false,
    }
    this.controlVideo = null;
    this.setPosition = null;
    this.getTime = null;
    this.animateWhenActiveOrUnactiveKey = null;
    this.animateWhenActiveFullScreen = null;
    this.animateWhenMouseMove = null;
  }

  componentDidMount() {
    this.getTime = setInterval(this.getDurationTimeVideo, 1000);
    window.addEventListener("keydown", this.controlPLayerForKeyBoard);
    window.addEventListener("resize", this.setStyleIconWhenResize);
    window.addEventListener("mousemove",  this.showOptionPlayerVideoWhenMouseMove);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.playListActually !== this.props.playListActually) {
      this.setState({
        musicNumber: 0,
      });
    }
    if(this.controlVideo) {
      if(this.controlVideo.getVolume() !== this.state.soundValue && !this.controlVideo.isMuted) {
        this.setState({
          soundValue: this.controlVideo.getVolume(),
        });
      }
    }
    if(this.state.keySterringVideo !== prevState.keySterringVideo) {
      this.setState({
        animateInformationOnActiveKey: true,
      });
      if(this.animateWhenActiveOrUnactiveKey) {
        clearTimeout(this.animateWhenActiveOrUnactiveKey);
      }
      this.animateWhenActiveOrUnactiveKey = setTimeout(() => {
        this.setState({
          animateInformationOnActiveKey: false,
        });
        this.animateWhenActiveOrUnactiveKey = null;
      }, 2000);
    }
    if(this.state.fullscreen && this.state.fullscreen !== prevState.fullscreen) {
        this.setState({
          showMoreOptionsWhenFullScreen: true,
        });
        this.animateWhenActiveFullScreen = setTimeout(() => {
          this.setState({
            showMoreOptionsWhenFullScreen: false,
          });  
        },4000);
    }
    else if(!this.state.fullscreen && this.state.fullscreen !== prevState.fullscreen) {
      this.setState({
        showMoreOptionsWhenFullScreen: false,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.setPosition);
    clearInterval(this.getTime);
    if(this.controlVideo) {
      this.controlVideo.clearVideo();
    }
    window.removeEventListener("keypress", this.controlPLayerForKeyBoard);
    window.removeEventListener("resize", this.setStyleIconWhenResize);
    window.removeEventListener("mousemove", this.showOptionPlayerVideoWhenMouseMove);
  }

  controlPLayerForKeyBoard = (e) => {
    if(e.keyCode === 36) { 
      this.setState({
        keySterringVideo: !this.state.keySterringVideo,
       });
    }
    if(e.keyCode === 27) {
      this.setState({
        fullscreen: false,
      });
    }
    if(this.state.keySterringVideo || this.state.fullscreen) {
      if(this.controlVideo) {
        if(e.keyCode === 38) {
          if(this.controlVideo.getVolume() + 10 < 100) {
            this.setSound(null , this.controlVideo.getVolume() + 10);
          }
          else {
            this.setSound(null , 100);
          }
          this.showOptionPlayerVideoWhenMouseMove();
        }
        else if(e.keyCode === 40) {
           this.setSound(null , this.controlVideo.getVolume() - 10);  
           this.showOptionPlayerVideoWhenMouseMove();
        }
        else if(e.keyCode === 39) {
          this.seekToNext();
          this.showOptionPlayerVideoWhenMouseMove();
        }
        else if(e.keyCode === 37) {
          this.seekToPrevious();
          this.showOptionPlayerVideoWhenMouseMove();
        }
        else if(e.keyCode === 32) {
          if(this.controlVideo) {
            this.setState({
              playerState: !this.state.playerState,
            });
            if(this.state.playerState) {
              this.controlVideo.pauseVideo();
            }
            else {
             this.controlVideo.playVideo(); 
            }
            this.showOptionPlayerVideoWhenMouseMove();
          }
        }
        else if(e.keyCode === 33) {
          this.playNextVideo();
          this.showOptionPlayerVideoWhenMouseMove();
        }
        else if(e.keyCode === 34) {
          this.playPreviousVideo();
          this.showOptionPlayerVideoWhenMouseMove();
        }
      }
    }
  }

  showOptionPlayerVideoWhenMouseMove = () => {
    if(!this.state.enterMouseOnPlayerWhenFullscreen) {
      if(!this.state.showOptionsPlayer) {
        this.setState({
          showOptionsPlayer: true,
        });
        if(this.animateWhenMouseMove) {
          clearTimeout(this.animateWhenMouseMove);
        }
        this.animateWhenMouseMove = setTimeout(() => {
          this.setState({
            showOptionsPlayer: false,
          })
        },5000);
      }
    }
    else {
      if(this.animateWhenMouseMove) {
        clearTimeout(this.animateWhenMouseMove);
      }
    }
  }

  setStyleIconWhenResize = () => {
    if(window.innerWidth < 768) {
      if(!this.state.setStyleIcon){
        this.setState({
          setStyleIcon: true,
        });
      }
    }
    else {
      if(this.state.setStyleIcon){
        this.setState({
          setStyleIcon: false,
        });
      }
    }
  }

  onReady = (event) => {
    this.controlVideo = event.target;
    event.target.playVideo();
    if(this.controlVideo.isMuted()) {
      this.setState({
        soundValue: 0,
      });
    }
    else {
      this.setState({
        soundValue: this.controlVideo.getVolume(),
      });
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
    });
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
      });
    }
    else if(timeSet === 'actually') {
      this.setState({
          timeActually: this.setFormatTime(seconds, minutes, hours),
      });
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
       });
    }
  }

  whenError =() => {
    if(this.props.playListActually.music.length - 1 === this.state.musicNumber) {
      this.controlVideo.stopVideo();
    }
    else {
      this.setState({
        musicNumber: this.state.musicNumber + 1,
       });
    }
  }

  playOrPauseVideo = () => {
    if(this.controlVideo) {
      this.setState({
        playerState: !this.state.playerState,
      });
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
            });
        }
    }
  }

  playPreviousVideo = () => {
    if(this.controlVideo) {
        if(this.state.musicNumber === 0) {
            this.setState({
                musicNumber: this.props.playListActually.music.length - 1,
                playerState: false,
            });
        }
        else {
            this.setState({
                musicNumber: this.state.musicNumber - 1,
                playerState: false,
            });
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
        });
        let timeDuration = Math.floor(this.controlVideo.getDuration());
        let counter = e.target.value / 100;
        this.controlVideo.seekTo(Math.floor(timeDuration * counter));
    }
  }

  setSound = (e, value) => {
    if(this.controlVideo) {
      this.setState({
        soundValue: e ? e.target.value : value,
      });
      if(e ? e.target.value : value > 0) {
        this.controlVideo.unMute();
      }
      else {
        this.controlVideo.mute();
      }
      this.controlVideo.setVolume(e ? e.target.value : value);
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
      if(this.controlVideo.isMuted()) {
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
    
    if(parseInt(duration.substr(-3), 10)) {
      seconds += parseInt(duration.substr(-3), 10);
    } 
    else {
      seconds += parseInt(duration.substr(-2), 10);
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
      if(parseInt(duration.substr(indexStartMinute - 2), 10)) {
        return parseInt(duration.substr(indexStartMinute - 2), 10);
      } 
      else {
        return parseInt(duration.substr(indexStartMinute - 1), 10);
      }
    }
    return 0;
  }

  getHours(duration) {
    let indexStartHours = duration.indexOf('H');
    if(indexStartHours !== -1) {
      if(parseInt(duration.substr(indexStartHours - 2), 10)) {
        return parseInt(duration.substr(indexStartHours - 2), 10);
      } 
      else {
        return parseInt(duration.substr(indexStartHours - 1), 10);
      }
    }
    return 0;
  }

  closeVideo = () => {
    this.props.activeVideoAndSetPlayList(false, null);
  }

  closeConfirmation = () => {
    this.setState({
      showConfirmationCloseVideo: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.fullscreen ?
          <div className="hide-option-youtube-when-fullscreen" 
            onClick={this.playOrPauseVideo}
          />
          :
          null
        }
        <div 
          className="player-content-fullscreen-show-more-options"
          style={{
            top: this.state.showMoreOptionsWhenFullScreen ? "50px" : "-100%",
          }}  
        > 
          Aby zamknąć pełny ekran, wciśnij {" "} 
          <span className="player-content-fullscreen-show-more-options-text">
            Esc
          </span>       
        </div>
        {this.state.showConfirmationCloseVideo ?
          <FadeIn>
            <ShowConfirmationWindowClose
              description = {
                "Czy jesteś pewny, że chcesz zakończyć słuchanie playlisty? Ta akcja spowoduje, że playlista przestanie grać."
              }
              closeConfirmation = {this.closeConfirmation}
              acceptedConfirm = {this.closeVideo}
            />
          </FadeIn>
          :
          null
        }
        <div 
          className="information-user-active-unactive-key"
          style={this.state.animateInformationOnActiveKey ? 
                {right: "50px"}
                :
                {right: "-350px"}
              }
        >
          <span 
            style={{
            color: "#fff",
            opacity: 0.5, 
    
          }}
          >
            Sterowanie Playerem:
          </span>
          <span
            style={this.state.keySterringVideo ?
                  {color: "rgb(92,184,92)"}
                  :
                  {color: "rgb(217,83,79)"}
                  }
          >
            {this.state.keySterringVideo ?
              " Aktywne"
              :
              " Nieaktywne"
            }
          </span>
        </div>
        <div 
          className={!this.state.fullscreen ?
                      "content-player"
                      :
                      "content-player-fullscreen"
                    }
          style={!this.state.fullscreen ?
                  this.state.visibleAlbumPlaylist ?
                    {top: "75px"}
                    :
                    {top: "-100%"}
                  :
                  null
                }
        >
          {!this.state.fullscreen ?
            <div className="content-player-options">
              <span 
                className="content-player-controls-fullscreen"
                onClick={() => {
                  this.setState({
                    fullscreen: true,
                  })
                }}
                >
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
              >
                <CloudInformationHelp 
                  text="Przycisk ukrywa widok aktualnej odtwarzanej playlisty oraz przełącza na odtwarzacz wideo" 
                  styleCloud={{
                    left: "-50px",
                    top: "32px",
                  }}
                  styleIndicator={{
                    top: "-22px",
                    left: "55px",
                    transform: "rotate(270deg)",

                  }}
                  />
              </span>
              <span 
                className="content-player-options-close glyphicon glyphicon-remove" 
                onClick={()=>{
                  this.setState({
                    showConfirmationCloseVideo: true,
                  })
                }}
                />
              <div className="content-player-options-underline" />
            </div>
            :
            null
          }
          <YouTube
            className={this.state.fullscreen ?
                        "player-fullscreen"
                        :
                        "player"
                      }
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
          {!this.state.fullscreen ?
            <React.Fragment>
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
            </React.Fragment>
            :
            null
          }
        </div>
        <div 
          className="content-player-control-video"
          onMouseEnter={()=> {
            if(!this.state.enterMouseOnPlayerWhenFullscreen){
              this.setState({
                enterMouseOnPlayerWhenFullscreen: true,
              })
            }
          }}
          onMouseLeave={()=> {
            if(this.state.enterMouseOnPlayerWhenFullscreen){
              this.setState({
                enterMouseOnPlayerWhenFullscreen: false,
                showOptionsPlayer: false,
              })
            }
          }}
          style={(!this.state.visibleAlbumPlaylist && this.state.visiblePlayer) || this.state.fullscreen ?
            {bottom: this.state.fullscreen ? 
              this.state.showOptionsPlayer || this.controlVideo.getPlayerState() !== 1 ? 
                "0px" 
                : 
                "-100%" 
              : 
              "50px",
            height: this.state.fullscreen ? "180px" : "250px",
            border: this.state.fullscreen ? "unset" : "0.5px solid rgb(99, 99, 102)",
            borderRadius: this.state.fullscreen ? "unset" : "15px",
            background: this.state.fullscreen ? "unset" : "linear-gradient(#2D2E32, black)",
            width: this.state.fullscreen ? 
              "100%" 
              : 
              window.innerWidth < 768 ?
                "400px" 
                : 
                "700px"
            }
            :
            {bottom: "-100%",
            height: "180px",

            }
          }       
        >
          {!this.state.fullscreen ?
            <React.Fragment>
              <div className="content-player-options">
                <span 
                  className="content-player-options-list glyphicon glyphicon-th-list" 
                  onClick={() => {
                    this.setState({
                      visibleAlbumPlaylist: true,
                    })
                  }}
                >
                  <CloudInformationHelp 
                      text="Przycisk przywraca widok odtwarzanej playlisty oraz chowa odtwarzacz wideo." 
                      styleCloud={{
                        left: "-50px",
                        top: "35px",
                      }}
                      styleIndicator={{
                        top: "-22px",
                        left: "55px",
                        transform: "rotate(270deg)",
          
                      }}
                  />
                </span>
                <span 
                  className="content-player-options-hide glyphicon glyphicon-minus"
                  onClick={() => {
                    this.setState({
                      visiblePlayer: false,
                    })
                  }}
                >
                  <CloudInformationHelp 
                    text="Przycisk ukrywa widok odtwarzacza wideo oraz wyświetla ikonkę z prawej stony z aktualnym tytułem." 
                    styleCloud={{
                      left: "-50px",
                      top: "35px",
                    }}
                    styleIndicator={{
                      top: "-22px",
                      left: "55px",
                      transform: "rotate(270deg)",
          
                    }}
                  />
                </span>
                <span 
                  className="content-player-options-close glyphicon glyphicon-remove" 
                  onClick={()=>{
                    this.setState({
                      showConfirmationCloseVideo: true,
                    })
                  }}
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
            </React.Fragment>
            :
            null
          }
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
              {this.state.fullscreen ?
                <span 
                  className="content-player-hide-fullscreen glyphicon glyphicon-fullscreen" 
                  onClick={() => {
                    this.setState({
                      fullscreen: false,
                    })
                  }}
                />
                :
                null
              }
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
                  {top: "40%"}
                  :
                  {top: "-100%"}
                }
          onClick={() => {
              this.setState({
                visiblePlayer: true,
              })
            }}      
        >
          <CloudInformationHelp 
            text="Przycisk ukrywa widok ikonki nutki oraz przywraca widok odtwarzacza wideo." 
            styleCloud={{
              left: this.state.setStyleIcon ? "-100px" : "-100px",
              top: this.state.setStyleIcon ? "90px" : "140px",
            }}
            styleIndicator={{
              top: this.state.setStyleIcon ? "-23px" : "-24px",
              left: this.state.setStyleIcon ? "120px" : "150px",
              transform: "rotate(270deg)",
            }}
           />
           <span className="content-player-hide-player-icon glyphicon glyphicon-music" />
           <marquee
                  direction="left"
                  scrollamount="2"
                  scrolldelay="1"
              >
                  {this.props.playListActually.music[this.state.musicNumber].title}
              </marquee>
        </div>
      </div>
    );
  }
}

const opts = {
  playerVars: { 
    autoplay: 1,
    controls: 0,
    rel: 0,
    enablejsapi: 0,
    iv_load_policy: 3,
    showinfo: 0,
  }
};


export default Player;