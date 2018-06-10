
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo_wektor.svg';



export default class Header extends Component {
    
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
                        <Link className="navbar-text" to="/">Zaloguj/Wyloguj</Link>
                    </div>
                
                </div>
            </div>
        );
    }
}
