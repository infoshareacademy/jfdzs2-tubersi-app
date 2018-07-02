import React, {PureComponent } from 'react';

import Layout from '../../components/layout';

import './style.css';

class YourPlaylists extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      actuallyUser: null,
    }
  }

  componentDidMount() {
    if(this.props.dataBaseUsers) {
      this.setActuallyUser();
    }
  }

  componentDidUpdate() {
    if(!this.state.actuallyUser) {
       this.setActuallyUser();
    }
  }

  setActuallyUser = () => {
    const retrievedObject = localStorage.getItem('tubersi');
    var statusTubersi = JSON.parse(retrievedObject);
    this.setState({
      actuallyUser: this.props.dataBaseUsers.find((user) => {
        return user.email === statusTubersi.email; 
      })
    })
  }

  render() {
    return (
      <Layout>
      <div className="content-playlists">
        <div className="content-playlist-title">
          <h1 className="content-playlist-title-text">
            TWOJA PLAYLISTA
          </h1>
          <button className="content-playlists-options-add">
            <i className="fas fa-plus" />
            Dodaj
          </button>
        </div>
        {this.state.actuallyUser ?
          this.state.actuallyUser.playList ?
            this.state.actuallyUser.playList.map((list, index) => {
              return (
                <div 
                  className="col-xs-12 col-md-6"
                  key={index}
                >
                  <div className="playlists-item animated zoomIn">
                    <div className="playlists-item-box">
                      <div className="playlists-buttons-hover animated fadeIn">
                        <h3 className="playlists-title">Nazwa playlisty nr 1</h3>
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
            <div class="spinner">
              <div class="double-bounce1"/>
              <div class="double-bounce2"/>
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