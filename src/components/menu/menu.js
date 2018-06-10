import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="col-md-3 site-menu">
                <ul>
                    <Link className="menu-link" to="/search"><li>Szukaj</li></Link>
                    <Link className="menu-link" to="/dashboard"><li>Dashborad</li></Link>
                    <Link className="menu-link" to="/yourPlaylists"><li>Twoje playlisty</li></Link>
                    <Link className="menu-link" to="/signIn"><li>Zaloguj</li></Link>
                    <Link className="menu-link" to="/signUp"><li>Zarejestruj</li></Link>
                    <Link className="menu-link" to="/results"><li>Wyniki wyszukiwania</li></Link>
                    <Link className="menu-link" to="/playlist"><li>Playlsita -nazwa</li></Link>
                    <Link className="menu-link" to="/chat"><li>Chat</li></Link>
                    <Link className="menu-link" to="/player"><li>Player</li></Link>
                    <Link className="menu-link" to="/notFound"><li>404</li></Link>
                </ul>
            </div>
        );
    }
}