import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="site-menu">
                <ul>
                    <li><Link className="menu-link" to="/search">Szukaj</Link></li>
                    <li><Link className="menu-link" to="/dashboard">Dashborad</Link></li>
                    <li><Link className="menu-link" to="/yourPlaylists">Twoje playlisty</Link></li>
                    <li><Link className="menu-link" to="/signIn">Zaloguj</Link></li>
                    <li><Link className="menu-link" to="/signUp">Zarejestruj</Link></li>
                    <li><Link className="menu-link" to="/results">Wyniki wyszukiwania</Link></li>
                    <li><Link className="menu-link" to="/playlist">Playlsita -nazwa</Link></li>
                    <li><Link className="menu-link" to="/chat">Chat</Link></li>
                    <li><Link className="menu-link" to="/player">Player</Link></li>
                    <li><Link className="menu-link" to="/notFound">404</Link></li>
                </ul>
            </div>
        );
    }
}