import React, {PureComponent } from 'react';

import Layout from '../../components/layout';

import './style.css';

class YourPlaylists extends PureComponent {
  render() {
    return (
      <Layout>
      <div className="content-playlists">
        <div className="row">
        <h1>Nazwa playlisty</h1>
          <div className="col-xs-12 col-md-6">
            <div className="playlists-item animated zoomIn">
              <div className="playlists-item-box">
                  <div className="playlists-buttons-hover animated fadeIn">
                  <h3 className="playlists-title">Nazwa playlisty nr 1</h3>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fab fa-youtube"></i>Przejdź
                  </button>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fas fa-share-alt"></i>Udostepnij
                  </button>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="playlists-item animated zoomIn">
              <div className="playlists-item-box">
                  <div className="playlists-buttons-hover animated fadeIn">
                  <h3 className="playlists-title">Nazwa playlisty nr 1</h3>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fab fa-youtube"></i>Przejdź
                  </button>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fas fa-share-alt"></i>Udostepnij
                  </button>
                  <button type="button" className="btn btn-default btn-playlists">
                    <i className="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    );
  }
}

export default YourPlaylists;