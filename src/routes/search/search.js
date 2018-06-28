import React, { PureComponent, Fragment} from 'react';
import './search.css';

const API = 'AIzaSyBkYpYX86eK2MmpEYTvcvB8Oth1Qfiwxjc'
const maxResults = 10;
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
        // console.log(finalURL);


        return (
        <Fragment>
           <div className="content">
               <div class="row">
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

                {this.state.resultYoutube.map((link, i)=>{
                    // console.log(link);
                    var frame = <div key={i}><iframe width="560" height="315" src={link} frameBorder="10" allowFullScreen></iframe></div>
                    return frame;
                  })
                }

                {this.frame}


               <div className="">
                <h1>Youtube</h1>

            
            </div>

            </div>



        </Fragment>
          
        );
    }
}