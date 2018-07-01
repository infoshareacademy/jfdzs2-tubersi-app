import React, { PureComponent} from 'react';

import Layout from '../../components/layout';
import ReactPlayer from 'react-player'

import './style.css';

class Player extends PureComponent {
  render() {
    return (
      <Layout>
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="player-wrapper">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                         className='react-player'
                         playing={false}
                         width='100%'
                         height='100%'
                         controls
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