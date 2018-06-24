import React, {PureComponent } from 'react';
import './yourPlaylists.css';


class YourPlaylists extends PureComponent {
  render() {
    return (
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1>Lista wszystkich playlist</h1>
            <div className="playlist-item">
              <p>Nazwa playlisty nr 1</p>
              <p>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i className="fab fa-youtube"></i>Graj playliste
                </button>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i class="fas fa-share-alt"></i>Udostepnij playlistę
                </button>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i className="fas fa-trash-alt"></i>Usuń playlistę
                </button>
              </p>
            </div>

            <div className="playlist-item">
              <p>Nazwa playlisty nr 2</p>
              <p>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i className="fab fa-youtube"></i>Graj 
                </button>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i class="fas fa-share-alt"></i>Udostepnij
                </button>
                <button type="button" className="btn btn-default btn-lg btn-playlists">
                  <i className="fas fa-trash-alt"></i>Usuń
                </button>
              </p>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default YourPlaylists;