import './style.css';

import React, { Fragment, PureComponent } from 'react';
import FadeIn from 'react-fade-in';

import Layout from '../../components/layout';

const API = 'AIzaSyBkYpYX86eK2MmpEYTvcvB8Oth1Qfiwxjc'
const type = 'video'

export default class Search extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            resultYoutube: null,
            pictureAvatar: null,
            searchTitle: '',
            maxResults: 0,
            showFiltrQuality: false,
            qualityHigh: false,
            qualityStandard: false,
            qualityAny: true,
            quality: 'any',
            newSearch: true,
            visiblePopUpAddVideo: false,
            chooseVideo: null,
            choosePlayList: 0,
        };
        this.searchVideo = this.searchVideo.bind(this);
        this.addVideoToPlayList = this.addVideoToPlayList.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.maxResults !== this.state.maxResults || !this.state.newSearch) {
            this.searchVideo();
            this.setState({
                newSearch: true,
            })
        }
        console.log(this.state.choosePlayList);
    }

    handleChange = (event) => {
      this.setState({
        searchTitle: event.target.value
      })
    }
    
  searchVideo() {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&maxResults=${this.state.maxResults}&q=${this.state.searchTitle}&type=${type}&${type}Definition=${this.state.quality}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        const pictureAvatar = responseJson.items.map(obj => obj.snippet.thumbnails.high.url);
        this.setState({
            resultYoutube,
            pictureAvatar,
        });
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

    setQualityVideo = (e) => {
        if(e.target.name === "any") {
            this.setState({
                qualityHigh: false,
                qualityStandard: false,
                qualityAny: true,
                quality: 'any',
            })
        }
        else if(e.target.name === 'standard') {
            this.setState({
                qualityHigh: false,
                qualityStandard: true,
                qualityAny: false,
                quality: 'standard',
            })
        }
        else {
            this.setState({
                qualityHigh: true,
                qualityStandard: false,
                qualityAny: false,
                quality: 'high',
            })
        } 
    }

    chagneViewPopUpAddVideo = (index) => {
        this.setState({
            visiblePopUpAddVideo: !this.state.visiblePopUpAddVideo,
            chooseVideo: index,
        });
    }

    changePlayList = (e) => {
        this.setState({
            choosePlayList: e.target.value,
        });
    }

    addVideoToPlayList() {
        let newVideo = this.createDataVideo();
        let userVideo;
        let database = this.props.firebase.
            database().ref('users');
        if(!this.props.actuallyUser.
                playList[
                    this.state.choosePlayList
                ].music) {
            database.child(this.props.actuallyUser.id)
                .child('playList')
                .child(this.state.choosePlayList)
                .child('image')
                .set(this.state.pictureAvatar[
                    this.state.chooseVideo
                ]);

            userVideo = [
                newVideo
            ]
        }
        else {
            userVideo = this.props.actuallyUser
                .playList[
                    this.state.choosePlayList
                ].music;
            userVideo.push(newVideo);
        }
        
        database.child(this.props.actuallyUser.id)
            .child('playList')
            .child(this.state.choosePlayList)
            .child('music')
            .set(userVideo);
    }

    createDataVideo () {
        return {
            avatar: this.state.pictureAvatar [
                this.state.chooseVideo
            ],
            urlVideo: this.state.resultYoutube[
                this.state.chooseVideo
            ],
        }
    }
    
    render() {
        return (
        <Layout>
           <div className="search-content content">
               {this.state.visiblePopUpAddVideo ?
                <FadeIn>
                    <div 
                        className="search-hide-content" 
                        onClick={() => {this.chagneViewPopUpAddVideo(null)}}
                        />
                    <div className="search-pop-up-content">
                        {this.props.actuallyUser.playList ?
                            <React.Fragment>
                                <div className="search-pop-up-title">
                                    Wybierz playlistę:
                                </div>
                                <div className="form-group">
                                    <select 
                                        className="form-control search-option-playlist" 
                                        id="exampleSelect1"
                                        onChange={this.changePlayList}
                                    >
                                        {this.props.actuallyUser.
                                            playList.map((list, index) => {
                                                return <option 
                                                            key={index}
                                                            value={index}
                                                       >
                                                            {list.namePlayList}
                                                       </option>
                                        })}
                                    </select>
                                </div>
                                <button 
                                    className="btn btn-success search-button-add-video"
                                    onClick={this.addVideoToPlayList}>
                                    Dodaj
                                </button>
                                <button className="btn btn-warning search-button-delete-video">
                                    Usuń
                                </button>            
                            </React.Fragment>
                            :
                            <React.Fragment>
                            <div className="search-empty-playlist">
                                Twoja PLAYLISTA jest pusta przejdź do zakładki : "Twoje playlisty".
                            </div>
                            <div className="search-empty-playlist">
                                A następnie wybierz opcje dodawania i wróć ponownie.
                            </div>
                            </React.Fragment>
                        }
                        <div className="search-pop-up-exit">
                            <button 
                                className="search-pop-up-exit-button"
                                onClick={() => {this.chagneViewPopUpAddVideo(null)}}
                            >
                                Zamknij
                            </button>
                        </div>
                    </div>
                </FadeIn>
                :
                null 
               } 
               <div className="row">
                    <div className="search-content-information">
                        <p className="search-content-information-title">Znajdź utwór i dodaj go do playlisty!</p>
                    </div>
                    <div className="search-content-search">
                        <input  className="search-content-search-input"
                                value={this.state.searchTitle}
                                onChange={this.handleChange}
                                type="text"
                                name="text"
                                placeholder="Szukaj"
                                onKeyDown={(e) => {
                                    if(e.keyCode === 13) {
                                        this.setState({
                                            maxResults: 9,
                                            newSearch: false,
                                        })
                                }
                            }}  
                        />
                        <span className="search-content-row-form-contain">
                            <span className="search-content-row-form-contain-icon glyphicon glyphicon-search"
                                  onClick={() => {
                                      this.setState({
                                          maxResults: 9,
                                          newSearch: false,
                                      })
                                  }}     
                            >
                            </span>
                        </span>
                   </div>
                   {this.state.showFiltrQuality ?
                   <FadeIn>
                   <div className="search-filter-contain">
                        <p className="search-filter-contain-title">
                            Wybierz jakość filmów!
                        </p>
                        <div className="search-filter-contain-checkboxs">
                            <span className="search-filter-contain-text">
                                Niska
                            </span> 
                            <input className="search-filter-contain-checkbox"
                                    type="checkbox"
                                    name="any"
                                    checked={this.state.qualityAny}
                                    onChange={this.setQualityVideo}
                             />
                             <span className="search-filter-contain-text">
                                Średnia
                             </span>
                             <input className="search-filter-contain-checkbox"
                                    type="checkbox"
                                    name="standard"
                                    checked={this.state.qualityStandard}
                                    onChange={this.setQualityVideo}
                             />
                             <span className="search-filter-contain-text">
                                Wysoka
                             </span>
                             <input className="search-filter-contain-checkbox"
                                    type="checkbox"
                                    name="high"
                                    checked={this.state.qualityHigh}
                                    onChange={this.setQualityVideo}         
                             />
                        </div>
                   </div>
                   </FadeIn>
                   :null}
                   <div className="search-filter-toggle"
                        onClick={()=>{this.setState({
                            showFiltrQuality: !this.state.showFiltrQuality,
                        })}}
                   >
                        <span className="search-filter-toggle-arrow-left glyphicon glyphicon-chevron-up"
                              style={
                                  this.state.showFiltrQuality ?
                                  {transform: "rotate(180deg)"}
                                  :{transform: "rotate(0deg)"}
                              }
                        >
                        </span>          
                        <span className="search-filter-toggle-title">
                            Filtry
                        </span>
                        <span className="search-filter-toggle-arrow-right glyphicon glyphicon-chevron-up"
                              style={
                                 this.state.showFiltrQuality ?
                                    {transform: "rotate(180deg)"}
                                    :{transform: "rotate(0deg)"}
                              }
                        >
                        </span>
                   </div>
               </div>
               <div className="row">
                    {this.state.resultYoutube ?
                        this.state.resultYoutube.map((link, index)=> {
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
                                                        onClick={() => {this.chagneViewPopUpAddVideo(index)}}
                                                >
                                                    <i className="fas fa-plus"></i>
                                                    Dodaj
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                    :
                    null}
                </div>
                {this.state.resultYoutube ? 
                     <button className="search-show-more col-lg-4 col-lg-offset-4"
                             onClick={this.showMoreVideo}
                     >
                        Pokaż Więcej
                     </button>
                    :
                    null
                }
            </div>
        </Layout>
          
        );
    }
}