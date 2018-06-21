import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo_wektor.svg';

import fire from '../../config/fire';


export default class Header extends Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);
    }

    signout(){
        fire.auth().signOut()
    }

    render() {
        return (

            <nav class="navbar">

                <img src={Logo} alt="logo" className="logo-img"/>       
                <Link className="navbar-left text" to="/">Tubersi</Link>
                <button onClick={this.signout} className="btn btn-default navbar-btn"><i class="fas fa-sign-out-alt"></i> Wyloguj </button>

            </nav>
            
        );
    }
}
