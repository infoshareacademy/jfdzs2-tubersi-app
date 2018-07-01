import React, { PureComponent, Fragment} from 'react';
import './search.css';
// import '../playlist/playlist.css';

const API = 'AIzaSyBkYpYX86eK2MmpEYTvcvB8Oth1Qfiwxjc'
const resolution ='high'
const type = 'video'

export default class Search extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            resultYoutube: null,
            searchTitle: '',
            maxResults: 0,
        };
        this.searchVideo = this.searchVideo.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.maxResults !== this.state.maxResults) {
            this.searchVideo();
        }
    }

    handleChange = (event) => {
      this.setState({
        searchTitle: event.target.value
      })
    }
    
  searchVideo() {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&maxResults=${this.state.maxResults}&q=${this.state.searchTitle}&type=${type}&${type}Definition=${resolution}`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultYoutube});
        console.log(this.state.resultYoutube);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    showMoreVideo = () => {
        this.setState({
            maxResults: this.state.maxResults + 9,
        })
    }
    
    render() {
        return (
        <Fragment>
           <div className="search-content content">
               <div className="row">
                   <div className="input-group input-group-lg col-xs-8 col-xs-offset-2">
                        <input
                            className="search-content-row-form-input form-control"
                            value={this.state.searchTitle}
                            onChange={this.handleChange}
                            type="text"
                            name="text"
                            placeholder="Szukaj"
                            onKeyDown={(e) => {
                                if(e.keyCode === 13) {
                                    this.setState({
                                        maxResults: 9,
                                    })
                                }
                            }}  
                        />
                        <span className="search-content-row-form-contain">
                            <span className="search-content-row-form-contain-icon glyphicon glyphicon-search"
                                  onClick={() => {
                                      this.setState({
                                          maxResults: 9,
                                      })
                                  }}     
                            >
                            </span>
                        </span>
                   </div>
               </div>
               <div className="row">
                    {this.state.resultYoutube ?
                        this.state.resultYoutube.map((link, index)=>{
                        return  <div key={index} className="col-sm-6 col-md-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="playlist-item animated bounceInRight">
                                                <div className="embed-responsive embed-responsive-4by3">
                                                    <iframe width="560" 
                                                            height="315" 
                                                            src={link} 
                                                            frameBorder="10" 
                                                            allowFullScreen
                                                            title={link}
                                                    >
                                                    </iframe>
                                                </div>
                                                <button className="btn btn-default btn-playlist"
                                                        type="button"
                                                >
                                                    <i className="fas fa-plus"></i>
                                                    Dodaj
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                    :null}
                </div>
                {this.state.resultYoutube ? 
                     <button className="search-show-more col-lg-4 col-lg-offset-4"
                             onClick={this.showMoreVideo}
                     >
                        Pokaż Więcej
                     </button>
                    :null
                }
            </div>
        </Fragment>
          
        );
    }
}