
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo_wektor.svg';



export default class Header extends Component {
    
    render() {
        return (
            <div className="header">

                <button className="btn-toggle"></button>

                <Link className="brand-logo" to="/">
                    <img src={Logo} alt="logo" className="logo-img"/>
                    <p className="navbar-text" href="">Tubersi
                    </p>
                </Link>

                <span className="navbar-text">Nazwa podstrony</span>

                <span>
                    <Link className="navbar-text" to="/signIn">Zaloguj | </Link>
                    
                    <Link className="navbar-text" to="/">Wyloguj</Link>
              </span>
                
            </div>
        );
    }
}
