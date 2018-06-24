import React, { PureComponent} from 'react';
// odowłanie do css z playlist/playlist.css - lista  /tam zmieniamy style dla 
import '../playlist/playlist.css';



class SearchResults extends PureComponent {
  render() {
    return (
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12" className="playlist">
            <h1>Wyniki wyszukiwania</h1>

            <div className="row playlist-item animated bounceInRight">
            <div className="col-md-6 playlist-item-video">
              <div className=" embed-responsive embed-responsive-4by3">
                  <iframe 
                    class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
              </div>
            </div>
              <div className="col-md-6">
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="fas fa-plus"></i>Dodaj do nowej playlisty
                </button>
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="far fa-list-alt"></i>Dodaj do playlisty nr 1
                </button>
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="far fa-list-alt"></i>Dodaj do playlisty nr 2
                </button>
              </div>
            
           </div>


           <div className="row playlist-item animated bounceInRight">
            <div className="col-md-6 playlist-item-video">
              <div className=" embed-responsive embed-responsive-4by3">
                  <iframe 
                    class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/Ur_tXqaNXOI"></iframe>
              </div>
            </div>
              <div className="col-md-6">
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="fas fa-plus"></i>Dodaj do nowej playlisty
                </button>
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="far fa-list-alt"></i>Dodaj do playlisty nr 1
                </button>
                <button 
                  type="button" 
                  className="btn btn-default btn-lg btn-playlist-item">
                  <i class="far fa-list-alt"></i>Dodaj do playlisty nr 2
                </button>
              </div>
            
           </div>
            
        </div>
        
        </div>
      </div>
    );
  }
}

export default SearchResults;