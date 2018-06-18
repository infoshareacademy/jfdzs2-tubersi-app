
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo_wektor.svg';



export default class Header extends Component {
    
    render() {
        return (

            <nav class="navbar">

                <img src={Logo} alt="logo" className="logo-img"/>       
                <Link className="navbar-left text" to="/">Tubersi</Link>
                <Link to="/" className="btn btn-default navbar-btn"><i class="fas fa-sign-out-alt"></i> Wyloguj </Link>

            </nav>
            
        );
    }
}
