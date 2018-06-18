import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <Link className="menu-link" to="/dashboard"><li><i class="fas fa-chart-line"></i><span>Dashborad</span></li></Link>
                    <Link className="menu-link" to="/search"><li><i class="fas fa-search"></i><span>Szukaj</span></li></Link>
                    <Link className="menu-link" to="/yourPlaylists"><li><i class="fas fa-list"></i><span>Twoje playlisty</span></li></Link>
                    <Link className="menu-link" to="/chat"><li><i class="fas fa-comments"></i><span>Chat</span></li></Link>
                    <Link className="menu-link" to="/playlist"><li><span>Playlista-nazwa</span></li></Link>
                    {/* Linki ktrore nie beda finalnie wywietlane */}
                    <Link className="menu-link" to="/results"><li><span>Wynik wyszukiwania</span></li></Link>
                    <Link className="menu-link" to="/player"><li><span>Player</span></li></Link>
                    <Link className="menu-link" to="/signIn"><li><span>Zaloguj</span></li></Link>
                    <Link className="menu-link" to="/signUp"><li><span>Zarejestruj</span></li></Link>
                    <Link className="menu-link" to="/notFound"><li><span>404</span></li></Link>
                </ul> 
            </div>
        );
    }
}
