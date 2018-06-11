
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
            <div className="container-fluid header">
                <div className="row">
                    <div class="col-xs-2 col-md-2">
                      <p className="navbar-text">Menu</p>
                    </div>
                    <div class="col-xs-6 col-md-8">
                        <Link className="brand-logo" to="/">
                            <img src={Logo} alt="logo" className="logo-img"/>
                            <p className="navbar-text" href="">Tubersi
                            </p>
                         </Link></div>
                    <div class="col-xs-4 col-md-2">
                    
                        <p className="navbar-text" onClick={this.signout}>Wyloguj</p>
                    
                    </div>
                
                </div>
            </div>
        );
    }
}
