import React, { PureComponent} from 'react';
// odowłanie do css z playlist/playlist.css - lista  /tam zmieniamy style dla 
import '../playlist/playlist.css';



class SearchResults extends PureComponent {
  render() {
    return (
      <div className="content">

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
                  <button 
                    type="button" 
                    className="btn btn-default btn-playlist">
                    <i class="fas fa-trash-alt"></i>Dodaj
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



    );
  }
}

export default SearchResults;