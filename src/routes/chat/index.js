import React, { PureComponent } from 'react';

import './style.css';

import Layout from '../../components/layout';

class Chat extends PureComponent {
  render() {
    return (
      <Layout>
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h1>chat</h1>
              <p>lorem ibsum ble bl ble ble</p>
            </div>
          </div>
        </div>
    </Layout>
    );
  }
}

export default Chat;