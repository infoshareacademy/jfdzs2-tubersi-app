import React, { PureComponent} from 'react';

import Footer from "../footer";
import Header from "../header";
import Menu from "../menu";

import './style.css';

class Layout extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
        visible: false,
        firebase: null,
        database: null,
        
    };
  }

  handleClick = (e) => {
    this.toggleMenu();
  }

  toggleMenu = () => {
    this.setState(
      {visible: !this.state.visible}
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header 
            handleClick={this.handleClick}/>
          <Menu 
            handleClick={this.handleClick} 
            menuVisibility={this.state.visible}/>
          <div className="layout">
            {this.props.children}
          </div> 
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;