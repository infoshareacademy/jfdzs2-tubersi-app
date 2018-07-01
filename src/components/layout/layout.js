import React, { PureComponent, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";

import './layout.css';

class Layout extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
        visible: false
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
          <Header handleClick={this.handleClick}/>
          <Menu handleClick={this.handleClick} menuVisibility={this.state.visible}/>
          <div className="layout">
            {this.props.children}
          </div> 
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Layout;