import React, { PureComponent, Fragment} from 'react';
import './search.css';
// import '../playlist/playlist.css';

const API = 'AIzaSyBkYpYX86eK2MmpEYTvcvB8Oth1Qfiwxjc'
const maxResults = 9;
const resolution ='high'
const type = 'video'

export default class Search extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            resultYoutube: [],
            searchTitle: ''
        };

        this.clicked = this.clicked.bind(this);
    }

handleChange = (event) => {
      this.setState({
        searchTitle: event.target.value
      })
  }
    
clicked(){
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&maxResults=${maxResults}&q=${this.state.searchTitle}&type=${type}&${type}Definition=${resolution}`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultYoutube});
        // console.log(this.state.resultYoutube);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
    render() {
        return (
        <Fragment>
           <div className="content">
               <div className="row">
                   <div className="input-group input-group-lg col-xs-8 col-xs-offset-2">
                        <input
                            className="form-control"
                            value={this.state.searchTitle}
                            onChange={this.handleChange}
                            type="text"
                            name="text"
                            placeholder="Szukaj"
                        />
                        <span className="input-group-btn">
                            <button onClick={this.clicked} className="btn btn-default glyphicon glyphicon-search" type="button"></button>
                        </span>
                   </div>
               </div>

               <div className="row">

               {this.state.resultYoutube.map((link, i)=>{
                        var frame =
                            <div key={1} className="col-sm-6 col-md-4">
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="playlist-item animated bounceInRight">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe width="560" height="315" src={link} frameBorder="10" allowFullScreen></iframe>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-default btn-playlist">
                                        <i class="fas fa-plus"></i>Dodaj
                                    </button>

                                    </div>
                                </div>
                                </div>
                            </div>
                        return frame;
                    })
                    }

                {this.frame}

                </div>
            </div>
        </Fragment>
          
        );
    }
}