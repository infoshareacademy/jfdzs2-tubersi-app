import React, {PureComponent } from 'react';
import FadeIn from 'react-fade-in';

import Layout from '../../components/layout';

import './style.css';

class YourPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popUpAddNewPlayList: false,
      namePlayList: null,
      typePlayList: null,
      descriptionPlayList: null,
    }
    this.addNewPlayList = this.addNewPlayList.bind(this);
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

  addNewPlayList () {  
    let namePlayList = this.setNewDataPlaylist();
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
    })  
  }

  setNewDataPlaylist() {
    return {
      namePlayList: this.state.namePlayList || 'brak',
      typePlayList: this.state.typePlayList || 'brak',
      descriptionPlayList: this.state.descriptionPlayList || 'brak',
    }
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

  render() {
    return (
      <Layout>
        <div className="content-playlists">
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
              <React.Fragment>
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
                        onClick={this.addNewPlayList}
                      >
                        Dodaj
                      </button>
                    </div>
                </div>
              </React.Fragment>
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
                      <img className="img img-responsive"
                        src={
                          list.image 
                          ||
                          require('../../images/empty-playlist.jpg')
                        }
                      />
                      <div className="playlists-item-box">
                        <div className="playlists-buttons-hover animated fadeIn">
                          <h3 className="playlists-title">{list.namePlayList}</h3>
                          <button 
                            className="btn btn-default btn-playlists"
                            type="button"
                          >
                            <i className="fab fa-youtube" />
                            Przejdź
                          </button>
                          <button  
                            className="btn btn-default btn-playlists"
                            type="button"
                          >
                            <i className="fas fa-share-alt" />
                            Udostepnij
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
      </Layout>
    );
  }
}

export default YourPlaylists;