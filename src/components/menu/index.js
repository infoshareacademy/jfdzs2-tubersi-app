import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css'

class Menu extends Component {
    render() {
        var visibility = "menu";
        if (this.props.menuVisibility) {
            visibility = "menu menu-mobile"        
        }
        return (
            <div 
                onClick={this.props.handleClick}
                className={visibility}>
                <ul>
                    <Link className="menu-link" to="/"><li><i className="fas fa-chart-line"></i><span>Dashboard</span></li></Link>
                    <Link className="menu-link" to="/search"><li><i className="fas fa-search"></i><span>Szukaj</span></li></Link>
                    <Link className="menu-link" to="/your-playlist"><li><i className="fas fa-list"></i><span>Playlisty</span></li></Link>
                    <Link className="menu-link" to="/chat"><li><i className="fas fa-comments"></i><span>Chat</span></li></Link>
                    <Link className="menu-link" to="/keyboard-controls"><li><i className="fas fa-keyboard"></i><span>Sterowanie</span></li></Link>
                    <div className="menu-link menu-link-sign-out" onClick={this.props.changeStatus}><li><i className="fas fa-sign-out-alt"></i><span>Wyloguj</span></li></div>
                </ul> 
            </div>
        );
    }
}

const mapStateToProps = status => {
    return {
        status,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        changeStatus: () => dispatch({ type: 'OFFLINE'}),
    };
  };
  
export default connect (mapStateToProps, mapDispatchToProps)(Menu);
