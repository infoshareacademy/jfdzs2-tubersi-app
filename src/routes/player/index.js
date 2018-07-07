import React, { PureComponent} from 'react';
import YouTube from 'react-youtube';

import Layout from '../../components/layout';


import './style.css';

class Player extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "MzuTuSRobaE",
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  func = () => {
    this.setState({
      id: "HMU5U06UwOs"
    })
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };
    return (
      <Layout>
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="player-wrapper">
              <YouTube
                videoId={this.state.id}
                opts={opts}
                onReady={this._onReady}
                onEnd={this.func}
              />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    );

    
  }
}


export default Player;