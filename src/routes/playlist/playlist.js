import React, { PureComponent } from 'react';
import './playlist.css';


class Playlist extends PureComponent {
  render() {
    return (
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12" className="playlist">
            <h1>Playlista</h1>

            <div className="playlist-item">
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe 
                    class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
              </div>
              <button 
                type="button" 
                className="btn btn-default btn-lg btn-playlist-item">
                <i class="fas fa-trash-alt"></i>Usuń z playlisty
              </button>
           </div>
            
            <div className="playlist-item">
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe 
                  class="embed-responsive-item" 
                  src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
              </div>
              <button 
                type="button" 
                className="btn btn-default btn-lg btn-playlist-item">
                <i class="fas fa-trash-alt"></i>Usuń z playlisty
              </button>
            </div>

         
            <div className="playlist-buttons">
              <p>
                <button type="button" className="btn btn-default btn-lg btn-playlist">
                  <i class="fas fa-share-alt"></i>Udostepnij playlistę
                </button>
                <button type="button" className="btn btn-default btn-lg btn-playlist">
                  <i className="fab fa-youtube"></i>Graj playliste
                </button>
              </p>
            </div>        
        </div>
        
        </div>
      </div>
    );
  }
}

export default Playlist;