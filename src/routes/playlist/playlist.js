import React, { PureComponent } from 'react';
import './playlist.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Playlist extends PureComponent {
  render() {
    return (
      <div>
        <Header/>
          <div className="container-fluid">
            <div className="row">
              <Menu/>
            
              <div className="col-md-9">
              Obrabiany komponent
              </div>
                  
              </div>
          </div>
        <Footer/> 
      </div>
    );
  }
}

export default Playlist;