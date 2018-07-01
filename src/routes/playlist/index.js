import React, { PureComponent } from 'react';

import './style.css';

import Layout from '../../components/layout';

class Playlist extends PureComponent {
  render() {
    return (
      <Layout>
      <div className="content">
        <div>
          <h2>Playlista nr 1</h2>
          <button type="button" className="btn btn-default btn-playlist-head">
            <i class="fas fa-share-alt"></i>Udostepnij
          </button>
          <button type="button" className="btn btn-default btn-playlist-head">
            <i className="fab fa-youtube"></i>Graj playliste
          </button>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe
                        src="https://www.youtube.com/embed/qGRt_t24jjI"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe 
                        src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe 
                        src="https://www.youtube.com/embed/CsUS-jRB6Cc"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe 
                        src="https://www.youtube.com/embed/qGRt_t24jjI"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe 
                        src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="playlist-item animated bounceInRight">
                  <div className="embed-responsive embed-responsive-4by3">
                      <iframe 
                        src="https://www.youtube.com/embed/CsUS-jRB6Cc"></iframe>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Usuń
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

export default Playlist;