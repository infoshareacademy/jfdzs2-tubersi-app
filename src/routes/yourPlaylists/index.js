/* eslint-disable */
import React, { PureComponent } from 'react';
import FadeIn from 'react-fade-in';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Layout from '../../components/layout';
import {CHARS} from '../../config';

import './playlist-style.css';
import './style.css';

class YourPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popUpAddNewPlayList: false,
      popUpUploadPlayList: false,
      namePlayList: '',
      typePlayList: '',
      descriptionPlayList: '',
      sectionChosenPlayList: false,
      numberChoosePlaylist: null,
      checkLink: true,
      showMessageWhenCreatePlaylist: false,
      showMessageWhenCopyLink: false,
      showMessageWhenUniqueNumberIsNotSucces: false,
      messageWhenUploadPlayList: '',
    }
    this.addNewPlayList = this.addNewPlayList.bind(this);
    this.addVideoWhenUpload = this.addVideoWhenUpload.bind(this);
  }

  componentDidUpdate() {
    if(this.props.actuallyUser && 
       this.props.dataBaseUsers &&
       this.state.checkLink) {
        this.setState({
          checkLink: false,
        });
        this.addVideoWhenUpload();
    }
    if(this.state.showMessageWhenCopyLink) {
      setTimeout(() => {
        this.setState({
          showMessageWhenCopyLink: false,
        })
      },2000);
    }
    if(this.state.showMessageWhenCreatePlaylist) {
      setTimeout(() => {
        this.setState({
          showMessageWhenCreatePlaylist: false,
        })
      },2000);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  changeViewPopUpAddNewPlayList = () => {
    if(this.props.actuallyUser) {
      this.setState({
        popUpAddNewPlayList: !this.state.popUpAddNewPlayList,
      });
    }
  }

  addNewPlayList(uploadPlayList) {  
    let namePlayList = uploadPlayList || this.setNewDataPlaylist();
    let playList;
    if(!this.props.actuallyUser.playList) {
      playList = [
        namePlayList,
      ]
    }
    else {
      playList = this.props.actuallyUser.playList;
      playList.push(namePlayList);
    }
    
    this.props.firebase
      .database()
      .ref('users')
      .child(this.props.actuallyUser.id)
      .child('playList')
      .set(playList);
    this.setState({
      namePlayList: '',
      typePlayList: '',
      descriptionPlayList: '',
      popUpAddNewPlayList: false,
    })  
  }

  addVideoWhenUpload(){
    let uniqueNumberUpload = window.location.href.substr(-16);
    if(this.checkCorectUniqueNumber(uniqueNumberUpload)) {
      if(this.checkExistingUniqueNumber(uniqueNumberUpload)) {
        if(!this.checkThatNewUniqueNumberIsAlready(uniqueNumberUpload)) {
          this.addNewPlayList(
            this.getPlayListUpload(uniqueNumberUpload)
          )
          this.setState({
            showMessageWhenUniqueNumberIsNotSucces: true,
            messageWhenUploadPlayList: 'Pobrano nową Playliste!',
          })  
        }
        else {
          this.setState({
            showMessageWhenUniqueNumberIsNotSucces: true,
            messageWhenUploadPlayList: 'Playlista o danym numerze już istnieje!',
          })  
        }
      }
      else {
        this.setState({
          showMessageWhenUniqueNumberIsNotSucces: true,
          messageWhenUploadPlayList: 'Playlista o danym numerze nie istnieje!',
        })
      }
    }
  }

  checkCorectUniqueNumber(number) {
    for(let i = 0; i < number.length; i++) {
      if(!CHARS.find((char) => {
        return number.charAt(i) === char     
      }))
      {
        return false;
      }
    }
    return true;
  }

  checkExistingUniqueNumber(number) {
    let database = this.props.dataBaseUsers;
    for(let i = 0; i < database.length; i++) {
      if(database[i].playList) {
        if(database[i].playList.find((list) =>{
          return list.uniqueNumber === number;
        }))
        {
          return true;
        }
      }
    }
    return false;
  }

  checkThatNewUniqueNumberIsAlready(number) {
    let actuallyUser = this.props.actuallyUser;
    if(!actuallyUser.playList) {
      return false;
    }
    if(actuallyUser.playList.find((list) => {
       return list.uniqueNumber === number; 
    }))
    {
      return true;
    }
    return false;
  }

  getPlayListUpload(number) {
    let playList;
    let database = this.props.dataBaseUsers;
    for(let i = 0; i < database.length; i++) {
      if(database[i].playList) {
        playList = database[i].playList.find((list) => {
          return list.uniqueNumber === number;
        })
        if(playList) {
          return playList;
        }
      }
    }
  }

  setNewDataPlaylist() {
    return {
      namePlayList: this.state.namePlayList || 'brak',
      typePlayList: this.state.typePlayList || 'brak',
      descriptionPlayList: this.state.descriptionPlayList || 'brak',
      author: this.props.actuallyUser.name,
      uniqueNumber: this.getNumberUnique(), 
    }
  }

  getNumberUnique() {
    let number;
    do {
      number = this.generateNewUniqueNumberPLayList();
    } while(!this.checkThatUniqueNumberIsUnique(number));
    
    return number;
  }

  generateNewUniqueNumberPLayList() {
    let uniqueNumber = '';
    for(let i = 0; i < 16; i++) {
      uniqueNumber +=
        CHARS[
          Math.round(Math.random() * CHARS.length)
        ]
    }
    return uniqueNumber;
  }

  checkThatUniqueNumberIsUnique(number) {
    var users = this.props.dataBaseUsers
    for(let i = 0; i < users.length; i++) {
      if(users[i].playList) {
        if(users[i].playList.find((list) => {
          return number === list.uniqueNumber;
        }))
        {
          return false;
        }
      }
    }
    return true;
  }

  deletePlayList(numberDelete) {
    let playList = 
      this.props.actuallyUser.playList
        .filter((list, index) => {
          return numberDelete !== index;
        });

    this.props.firebase
      .database()
      .ref('users')
      .child(this.props.actuallyUser.id)
      .child('playList')
      .set(playList);    
  }

  deleteVideo(index) {
    let filterVideoToDelete;
    let database = 
        this.props.firebase
            .database().ref('users');
    filterVideoToDelete = 
        this.props.actuallyUser
        .playList[
            this.state.numberChoosePlaylist
        ]
        .music.filter((music, numberMusic) => {
            return numberMusic !== index;
        })  
    database.child(this.props.actuallyUser.id)
        .child('playList')
        .child(this.state.numberChoosePlaylist)
        .child('music')
        .set(filterVideoToDelete);    
  }

  copyTextUniqueNumberToUploadPLayList() {
    return window.location.href +
      '/' + 
      this.props.actuallyUser.playList[
        this.state.numberChoosePlaylist
      ].uniqueNumber;
  }

  countFullTimeVideo(playList) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    playList.music.forEach((music) => {
      if(parseInt(music.duration.substr(-3))) {
        seconds += parseInt(music.duration.substr(-3));
      } 
      else {
        seconds += parseInt(music.duration.substr(-2));
      }
      minutes += this.getMinute(music.duration);
      hours += this.getHours(music.duration);
    })
    seconds = this.countTime(seconds);
    minutes += seconds.timeAdd;
    seconds = seconds.time;
    minutes = this.countTime(minutes);
    hours += minutes.timeAdd;
    minutes = minutes.time;
    return this.formatTimeDurationAllVideo(seconds, minutes, hours);
  }

  formatTimeDurationAllVideo(seconds, minutes, hours) {
    if(hours !== 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
    else if(minutes !== 0) {
      return `${minutes}m ${seconds}s`;
    }

    else {
      return `${seconds}s`;
    }
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

  chosenPlayList = () => {
    let actuallyPlaylist;
    if(this.props.actuallyUser) {
      actuallyPlaylist =
        this.props.actuallyUser.playList[
          this.state.numberChoosePlaylist
        ];
    }
    return this.props.actuallyUser ?
      this.props.actuallyUser.playList[
        this.state.numberChoosePlaylist
      ].music ? 
         <div className="section-playlist">
          <div 
            className="section-exit"
          >
            <span 
              className="section-exit-text"
              onClick={() => {
                this.setState({
                  sectionChosenPlayList: false,
                  numberChoosePlaylist: null,
                })
              }}
            >
              Zamknij [
              <span className="content-exit-icon glyphicon glyphicon-remove"/>
              ]
            </span>
            <div className="content-underline">
              <div className="content-underline-line"/>
            </div>  
          </div>
          <div className="section-playlist-main">
              <div className="section-playlist-main-image">
                <img 
                  className="section-playlist-main-image-avatar"
                  alt="avatar-play-list"
                  src={
                    actuallyPlaylist.music[
                      0
                    ]
                    .avatar
                  }
                />
                <div className="section-playlist-main-image-title">
                  {actuallyPlaylist.typePlayList}
                </div>   
              </div>
              <div className="section-playlist-main-description">
                  <p className="section-playlist-main-description-title">
                    PLAYLIST
                  </p>
                  <p className="section-playlist-main-description-nameplaylist">
                    {actuallyPlaylist.namePlayList}
                  </p>
                  <p className="section-playlist-main-description-description">
                    {actuallyPlaylist.descriptionPlayList}
                  </p>
                  <p className="section-playlist-main-description-information">
                    Created by: {actuallyPlaylist.author} 
                    . utworów {actuallyPlaylist.music.length}, 
                    całkowity czas {this.countFullTimeVideo(actuallyPlaylist)}
                  </p>
              </div>
            </div>
            <div className="section-playlist-options">
              <button 
                className="section-playlist-options-play"
                onClick={() => {
                  this.props.playListActually ?
                    this.props.playListActually.uniqueNumber === actuallyPlaylist.uniqueNumber ?
                      this.props.activeVideoAndSetPlayList(false, null)
                      :
                      this.props.activeVideoAndSetPlayList(true, actuallyPlaylist)
                    :
                    this.props.activeVideoAndSetPlayList(true, actuallyPlaylist)
                }}
                style={this.props.playListActually ?
                        this.props.playListActually.uniqueNumber === actuallyPlaylist.uniqueNumber ?
                          {backgroundColor: "rgb(217, 83, 79)"}
                          :
                          {backgroundColor: "rgb(27, 186, 84)"}
                        :
                        {backgroundColor: "rgb(27, 186, 84)"}  
                }
                >
                  {this.props.playListActually ?
                    this.props.playListActually.uniqueNumber === actuallyPlaylist.uniqueNumber ?
                      'Zatrzymaj'
                      :
                      'Graj'
                    :
                    'Graj'
                  }    
              </button>
              <button className="section-playlist-options-extends" >
                    <span className="glyphicon glyphicon-option-horizontal"/>
              </button>
            </div>
            <div className="section-playlist-underline" />
            <div className="section-playlist-music">
              <div className="section-playlist-music-legend">
                  <div className="section-playlist-music-space" />
                  <div className="section-playlist-music-legend-center">
                    Tytuł:
                  </div>
                  <div className="section-playlist-music-legend-last">
                    Dodano:
                  </div>
              </div>
              <div className="section-playlist-underline-music" />
              {actuallyPlaylist.music.map((music, index) => {
                return  <div 
                          className="section-playlist-music-list" 
                          key={index}
                        >
                          <div className="section-playlist-music-legend">
                            <div className="section-playlist-music-space">
                              <img
                                className="section-playlist-music-avatar"
                                src={music.avatar}
                                alt={index + "avatar-playlist"}
                              />
                              <span 
                                className="delete-any-music-playlist glyphicon glyphicon-trash" 
                                onClick={() => {this.deleteVideo(index)}}
                                style={{
                                  marginLeft: "15px",
                                }}
                              />
                            </div>
                            <div className="section-playlist-music-legend-center">
                              {music.title}
                            </div>
                            <div className="section-playlist-music-legend-last">
                              {music.data}
                            </div>
                          </div>
                          <div className="section-playlist-underline-music" />
                        </div> 
              })}      
            </div>
        </div>
        :
        <div className="section-playlist-empty">
          <div 
          className="section-exit"
          >
            <span 
              className="section-exit-text"
              onClick={() => {
                this.setState({
                  sectionChosenPlayList: false,
                  numberChoosePlaylist: null,
                })
              }}
            >
              Zamknij [
              <span className="content-exit-icon glyphicon glyphicon-remove"/>
              ]
            </span>
            <div className="content-underline">
              <div className="content-underline-line"/>
            </div>  
          </div>
          <p className="section-playlist-empty-text">
            Aktualnie nie masz żadnego utworu
          </p>
          <p className="section-playlist-empty-text">
            Przejdź do wyszukiwarki w zakładce "Szukaj"
          </p>
          <p className="section-playlist-empty-text">
            A następnie dodaj muzykę do odpowiedniej playlisty
          </p>
        </div>
      :
      null;
  }

  render() {
    return (
      <Layout>
        {this.state.sectionChosenPlayList ?
          this.chosenPlayList()
          :
          <div className="content-playlists">
            {this.state.showMessageWhenUniqueNumberIsNotSucces ?
              <FadeIn>
                <div className="content-when-donwload-link-upload" />
                <div className="content-when-download-link-contain">
                  <div className="content-when-download-link-table">
                    {this.state.messageWhenUploadPlayList}
                    <button 
                      className="content-when-download-link-table-button"
                      onClick={() => {
                        this.setState({
                          showMessageWhenUniqueNumberIsNotSucces: false,
                          messageWhenUploadPlayList: '',
                        })
                      }}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </FadeIn>
              :
              null
            }
            <div 
              className="content-playlist-create-new-playlist"
              style={
                this.state.showMessageWhenCreatePlaylist ?
                {bottom: "50px"}
                :
                {bottom: "-200px"}
              }
            >
              <span className="content-playlist-create-new-playlist-icon glyphicon glyphicon-music"/>
              STWORZONO NOWĄ PLAYLISTE
              <span className="content-playlist-create-new-playlist-icon glyphicon glyphicon-music"/>
            </div>
            <div className="content-playlist-title">
              <h1 className="content-playlist-title-text">
                TWOJA PLAYLISTA
              </h1>
              <button 
                className="content-playlists-options-add"
                onClick={this.changeViewPopUpAddNewPlayList}
              >
                <i className="fas fa-plus" />
                Dodaj
              </button>
            </div>
            {this.state.popUpAddNewPlayList ?
              <FadeIn>
                  <div 
                    className="content-hide-section"
                    onClick={this.changeViewPopUpAddNewPlayList}
                  />
                  <div className="content-pop-up">
                    <div 
                      className="content-exit"
                    >
                      <span 
                        className="content-exit-text"
                        onClick={this.changeViewPopUpAddNewPlayList}
                      >
                        Zamknij [
                        <span className="content-exit-icon glyphicon glyphicon-remove"/>
                        ]
                      </span>
                    </div>
                    <div className="content-underline">
                      <div className="content-underline-line"/>
                    </div>  
                      <div className="content-pop-up-title">
                        <p className="content-pop-up-title-text">
                          Dodawanie Nowej Playlisty
                        </p>
                      </div>
                      <div className="content-pop-up-name">
                        Podaj Nazwę :
                      </div>
                      <input
                        className="content-pop-up-input"
                        name="namePlayList"
                        onChange={this.handleChange}
                        value={this.state.namePlayList}
                      />
                      <div className="content-pop-up-name">
                        Podaj Gatunek :
                      </div>
                      <input
                        className="content-pop-up-input"
                        name="typePlayList"
                        onChange={this.handleChange}
                        value={this.state.typePlayList}
                      />
                      <div className="content-pop-up-name">
                        Podaj Opis (opcjonalnie)* :
                      </div>
                      <textarea
                        className="content-pop-up-description"
                        row="2"
                        name="descriptionPlayList"
                        onChange={this.handleChange}
                        value={this.state.descriptionPlayList}
                      />
                      <div>
                        <button
                          className="content-pop-up-submit"
                          onClick={() => {
                            this.addNewPlayList();
                            this.setState({
                              showMessageWhenCreatePlaylist: true,
                            })  
                          }}
                        >
                          Dodaj
                        </button>
                      </div>
                  </div>
              </FadeIn>
              :
              null
            }
            {this.state.popUpUploadPlayList ?
              <FadeIn>
                <div className="section-upload-hide"/>
                <div 
                  className="section-complete-copy"
                  style={
                    this.state.showMessageWhenCopyLink ?
                    {right: "50px"}
                    :
                    {right: "-200px"}
                  }
                >
                  SKOPIOWANO
                  <span className="section-complete-copy-ok glyphicon glyphicon-ok"/>
                </div>
                <div className="section-upload">
                  <div className="section-upload-contain">
                    <div 
                      className="content-exit"
                      style={{
                        paddingTop: '5px'
                      }}
                    >
                    <span 
                      className="content-exit-text"
                      onClick={() => {
                        this.setState({
                          popUpUploadPlayList: false,
                          numberChoosePlaylist: null,
                        })
                      }
                      }
                    >
                      Zamknij [
                      <span className="content-exit-icon glyphicon glyphicon-remove"/>
                      ]
                    </span>
                    </div>
                    <p className="section-upload-contain-title">
                      Udostępnij znajomemu twoją playliste
                    </p>
                    <div className="section-upload-contain-number">
                      {window.location.href}/    
                      {this.props.actuallyUser.playList[
                          this.state.numberChoosePlaylist
                        ].uniqueNumber}
                    </div>
                    <CopyToClipboard text={this.copyTextUniqueNumberToUploadPLayList()}>
                    <button 
                      className="section-upload-contain-copy"
                      onClick={() => {
                        this.setState({
                          showMessageWhenCopyLink: true,
                        })
                      }}
                      >
                      Kopiuj
                    </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </FadeIn>
              :
              null
            }
            {this.props.actuallyUser ?
              this.props.actuallyUser.playList ?
                this.props.actuallyUser.playList.map((list, index) => {
                  return (
                        <div 
                          className="col-xs-12 col-md-6"
                          key={index}
                        >
                          <div className="playlists-item animated zoomIn">
                            <img 
                              className="img-responsive"
                              alt={index + 'avatar'}
                              src={
                                list.music ?
                                  list.music[0].avatar
                                  :
                                  null 
                                ||
                                require('../../images/iTunes-playlist-purple.png')
                              }
                              style= {{
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "50px",
                                height: "250px",
                                with: "250px",
                              }}
                            />
                            <div className="playlists-item-box">
                              <div className="playlists-buttons-hover animated fadeIn">
                                <h6 className="playlists-title">
                                  {list.namePlayList}
                                </h6>
                                <button 
                                  className="btn btn-default btn-playlists"
                                  type="button"
                                  onClick={() => {
                                    this.setState({
                                      sectionChosenPlayList: true,
                                      numberChoosePlaylist: index,
                                    })
                                  }}
                                >
                                  <i className="fab fa-youtube" />
                                  Przejdź
                                </button>
                                <button  
                                  className="btn btn-default btn-playlists"
                                  type="button"
                                  onClick={() => {
                                    this.setState({
                                      popUpUploadPlayList: true,
                                      numberChoosePlaylist: index,
                                    })
                                  }}
                                >
                                  <i className="fas fa-share-alt" />
                                  Udostępnij
                                </button>
                                <button 
                                  className="btn btn-default btn-playlists"
                                  type="button"
                                  onClick={() => {this.deletePlayList(index)}}
                                >
                                  <i className="fas fa-trash-alt" />
                                  Usuń
                                </button>
                              </div>
                            </div>
                          </div>
                      </div>
                  )
                })
                :
                <div className="playlist-empty">
                  <p className="playlist-empty-text">
                    Aktualnie nie masz żadnej playlisty!
                  </p> 
                  <p className="playlist-empty-text">
                    Dodaj nową playlistę i wczuj się w rytm muzyki!
                  </p>
                </div>
              :
              <div className="playlist-loading">
                <div className="spinner">
                  <div className="double-bounce1"/>
                  <div className="double-bounce2"/>
                </div>
                <p className="playlist-loading-text">Wczytuje...</p>
              </div>
            }    
          </div>
        }
      </Layout>
    );
  }
}

export default YourPlaylists;