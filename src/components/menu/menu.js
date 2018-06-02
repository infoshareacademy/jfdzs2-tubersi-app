import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Menu/Lista podstron do obrobienia</h2>
                <ul>
                    <li><Link to="/search">Szukaj</Link></li>
                    <li><Link to="/dashboard">Dashborad</Link></li>
                    <li><Link to="/yourPlaylists">Twoje playlisty</Link></li>
                    <li><Link to="/signIn">Zaloguj</Link></li>
                    <li><Link to="/signUp">Zarejestruj</Link></li>
                    <li><Link to="/results">Wyniki wyszukiwania</Link></li>
                    <li><Link to="/playlist">Playlsita -nazwa</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/player">Player</Link></li>
                    <li><Link to="/notFound">404</Link></li>
                </ul>
            </div>
        );
    }
}