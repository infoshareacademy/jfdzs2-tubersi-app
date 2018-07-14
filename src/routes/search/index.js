import './style.css';

import React, { PureComponent } from 'react';
import FadeIn from 'react-fade-in';

import Layout from '../../components/layout';

const API = 'AIzaSyBkYpYX86eK2MmpEYTvcvB8Oth1Qfiwxjc'
const type = 'video'

export default class Search extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            resultYoutube: null,
            idVideos: null,
            pictureAvatar: null,
            titleVideo: null,
            searchTitle: '',
            maxResults: 0,
            showFiltrQuality: false,
            qualityHigh: false,
            qualityStandard: false,
            qualityAny: true,
            quality: 'any',
            newSearch: true,
            visiblePopUpAddVideo: false,
            choosePlayList: 0,
            durationVideo: [],
            sortVideo: false,
        };
        this.searchVideo = this.searchVideo.bind(this);
        this.addVideoToPlayList = this.addVideoToPlayList.bind(this);
        this.getTimeAllVideo = this.getTimeAllVideo.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.maxResults !== this.state.maxResults || !this.state.newSearch) {
            this.searchVideo();
            this.setState({
                newSearch: true,
            });
        }
        
        if(this.state.durationVideo.length !== 0) {
           if(this.state.durationVideo.length === this.state.maxResults && this.state.sortVideo) {
               this.sortVideo();
           }
        }
    }

    sortVideo = () => {
        let idVideos = this.state.idVideos;
        let mixedDuration = this.state.durationVideo;
        let sortsVideo = [];
        idVideos.forEach((video) => {
            sortsVideo.push(
                mixedDuration.find((mixVideo) => {
                    return video === mixVideo.id;
                })
            )
        })
        let durationVideo = 
            sortsVideo.map((video) => {
                return video.duration;
        })
        this.setState({
            sortVideo: false,
            durationVideo,
        });
    }

    handleChange = (event) => {
      this.setState({
        searchTitle: event.target.value
      });
    }
    
    searchVideo() {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&maxResults=${this.state.maxResults}&q=${this.state.searchTitle}&type=${type}&${type}Definition=${this.state.quality}`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            const pictureAvatar = responseJson.items.map(obj => obj.snippet.thumbnails.high.url);
            const titleVideo = responseJson.items.map(obj => obj.snippet.title);
            const idVideos = responseJson.items.map(obj => obj.id.videoId);
            this.setState({
                resultYoutube,
                pictureAvatar,
                titleVideo,
                durationVideo: [],
                idVideos,
                sortVideo: true,
            });
            responseJson.items.map(obj => this.getTimeAllVideo(obj.id.videoId));
        })
        .catch((error) => {
            console.error(error);
        });
    }

    getTimeAllVideo(videoId) {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API}&part=contentDetails`)
            .then((response)=> response.json())
            .then((responseJson) => {
                this.setState({
                    durationVideo : [
                        ...this.state.durationVideo, 
                        {
                            duration: responseJson.items[0].contentDetails.duration,
                            id: responseJson.items[0].id,
                        }
                    ]
                });
            });
    }

    showMoreVideo = () => {
        this.setState({
            maxResults: this.state.maxResults + 9,
        });
    }

    setQualityVideo = (e) => {
        if(e.target.name === "any") {
            this.setState({
                qualityHigh: false,
                qualityStandard: false,
                qualityAny: true,
                quality: 'any',
            });
        }
        else if(e.target.name === 'standard') {
            this.setState({
                qualityHigh: false,
                qualityStandard: true,
                qualityAny: false,
                quality: 'standard',
            });
        }
        else {
            this.setState({
                qualityHigh: true,
                qualityStandard: false,
                qualityAny: false,
                quality: 'high',
            });
        } 
    }

    changePlayList = (e) => {
        this.setState({
            choosePlayList: e.target.value,
        });
    }

    addVideoToPlayList(index) {
        let newVideo = this.createDataVideo(index);
        let userVideo;
        let database = 
            this.props.firebase
                .database().ref('users');
        if(!this.props.actuallyUser
                .playList[
                    this.state.choosePlayList
                ].music) {
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

    deleteVideo(index) {
        let filterVideoToDelete;
        let database = 
            this.props.firebase
                .database().ref('users');
        filterVideoToDelete = 
            this.props.actuallyUser
            .playList[
                this.state.choosePlayList
            ]
            .music.filter((music) => {
                return this.state.titleVideo [
                    index
                ] !== music.title;
            })
        database.child(this.props.actuallyUser.id)
            .child('playList')
            .child(this.state.choosePlayList)
            .child('music')
            .set(filterVideoToDelete);  
    }

    createDataVideo(index) {
        return {
            avatar: this.state.pictureAvatar [
                index
            ],
            urlVideo: this.state.resultYoutube [
                index
            ],
            title: this.state.titleVideo [
                index
            ],
            duration: this.state.durationVideo [
                index
            ],
            idVideo: this.state.idVideos [
                index
            ],
            data: this.getData(),
        }
    }

    getData() {
        const DATA = new Date();
        let day = DATA.getDay() + 1;
        let month = DATA.getMonth() + 1;
        let year = DATA.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return day + '-' + month + '-' + year;
    }

    renderButonAddVideo(index) {
        return (
            <button 
                className="btn btn-default btn-playlist"
                type="button"
                onClick={() => {this.addVideoToPlayList(index)}}
            >
                <i className="fas fa-plus" />
                Dodaj
            </button>
        )
    }

    renderButtonRemoveVideo(index) {
        return (
            <button 
                className="btn btn-default btn-playlist"
                type="button"
                onClick={() => {this.deleteVideo(index)}}
                style={{
                    backgroundColor: "red",
                    color: "white",
                }}
            >
                <i className="fas fa-trash-alt" />
                Usuń
            </button>
        )
    }

    checkAlreadyMusic(index) {
        return this.props.actuallyUser.playList[
            this.state.choosePlayList
        ]
        .music.find((music) => {
            return music.title === this.state.titleVideo [
                index
            ]
        }) ? this.renderButtonRemoveVideo(index) : this.renderButonAddVideo(index);
    }
    
    render() {
        return (
        <Layout>
            <div className="search-content content animated bounceInRight">
               <div className="row">
                    {this.props.actuallyUser ?
                        this.props.actuallyUser.playList ?
                            <React.Fragment>
                                <div className="search-content-information">
                                    <h2 className="search-content-information-title">
                                        <i className="fas fa-search" />
                                        Znajdź utwór i dodaj go do playlisty!
                                    </h2>
                                    <p className="search-playlist-content-text">
                                        Wybierz Playlistę:
                                    </p>
                                    <select 
                                        className="form-control search-option-playlist" 
                                        id="exampleSelect1"
                                        onChange={this.changePlayList}
                                    >
                                        {this.props.actuallyUser
                                            .playList.map((list, index) => {
                                                return <option 
                                                            key={index}
                                                            value={index}
                                                       >
                                                            {list.namePlayList}
                                                       </option>
                                        })}
                                    </select>
                                    <div className="search-content-search">
                                        <input  
                                            className="search-content-search-input"
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
                                                    Wybierz jakość!
                                                </p>
                                                <div className="search-filter-contain-checkboxs">
                                                    <span className="search-filter-contain-text">
                                                        Niska
                                                    </span> 
                                                    <input 
                                                        className="search-filter-contain-checkbox"
                                                        type="checkbox"
                                                        name="any"
                                                        checked={this.state.qualityAny}
                                                        onChange={this.setQualityVideo}
                                                    />
                                                    <span className="search-filter-contain-text">
                                                        Średnia
                                                    </span>
                                                    <input 
                                                        className="search-filter-contain-checkbox"
                                                        type="checkbox"
                                                        name="standard"
                                                        checked={this.state.qualityStandard}
                                                        onChange={this.setQualityVideo}
                                                    />
                                                    <span className="search-filter-contain-text">
                                                        Wysoka
                                                    </span>
                                                    <input 
                                                        className="search-filter-contain-checkbox"
                                                        type="checkbox"
                                                        name="high"
                                                        checked={this.state.qualityHigh}
                                                        onChange={this.setQualityVideo}         
                                                    />
                                                </div>
                                            </div>
                                        </FadeIn>
                                        :
                                        null
                                    }
                                    <div 
                                        className="search-filter-toggle"
                                        onClick={()=>{this.setState({
                                            showFiltrQuality: !this.state.showFiltrQuality,
                                        })}}
                                    >
                                        <span 
                                            className="search-filter-toggle-arrow-left glyphicon glyphicon-chevron-up"
                                            style={
                                                this.state.showFiltrQuality ?
                                                {transform: "rotate(180deg)"}
                                                :{transform: "rotate(0deg)"}
                                            }
                                        />          
                                        <span className="search-filter-toggle-title">
                                            Filtry
                                        </span>
                                        <span 
                                            className="search-filter-toggle-arrow-right glyphicon glyphicon-chevron-up"
                                            style={
                                                this.state.showFiltrQuality ?
                                                    {transform: "rotate(180deg)"}
                                                    :{transform: "rotate(0deg)"}
                                            }
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                            :
                            <div className="search-empty-playlist animated bounceInRight">
                                <div className="search-empty-playlist-contain">
                                    <i className="fas fa-info-circle" />
                                    <p className="search-empty-text">
                                        Aby skorzystać z wyszukiwarki musisz miec playlistę
                                    </p>
                                    <p className="search-empty-text">
                                        Aktualnie nie posiadasz żadnej playlisty!
                                    </p>
                                    <p className="search-empty-text">
                                        Przejdź do zakładki PLAYLISTY
                                    </p>
                                    <p className="search-empty-text">
                                        Utwórz nową a następnie wróć i dodaj muzykę"
                                    </p>
                                </div>
                            </div>
                        :
                        null
                   }
               </div>
               <div className="row">
                    {this.state.resultYoutube ?
                        this.state.resultYoutube.map((link, index)=> {
                        return (
                            <div 
                                className="col-sm-6 col-md-4"
                                key={index} 
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="playlist-item animated bounceInRight">
                                            <div className="embed-responsive embed-responsive-4by3">
                                                <iframe 
                                                    width="560" 
                                                    height="315" 
                                                    src={link} 
                                                    frameBorder="10" 
                                                    allowFullScreen
                                                    title={link}
                                                />
                                            </div>
                                            {this.props.actuallyUser.playList[
                                                this.state.choosePlayList
                                                ].music ?
                                                    this.checkAlreadyMusic(index)
                                                    :
                                                    this.renderButonAddVideo(index)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) 
                        })
                        :
                        null
                    }
                </div>
                {this.state.resultYoutube ? 
                     <button 
                        className="search-show-more col-lg-4 col-lg-offset-4"
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