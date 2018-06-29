import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
  
    


    render() {
        return (
            <div className="menu menu-mobile">
                <ul>
                    <Link className="menu-link" to="/"><li><i class="fas fa-chart-line"></i><span>Dashboard</span></li></Link>
                    <Link className="menu-link" to="/search"><li><i class="fas fa-search"></i><span>Szukaj</span></li></Link>
                    <Link className="menu-link" to="/yourPlaylists"><li><i class="fas fa-list"></i><span>Twoje playlisty</span></li></Link>
                    <Link className="menu-link" to="/chat"><li><i class="fas fa-comments"></i><span>Chat</span></li></Link>
                    <Link className="menu-link" to="/playlist"><li><span>Playlista-nazwa</span></li></Link>
                    {/* Linki ktrore nie beda finalnie wywietlane w menu */}

                    <Link className="menu-link" to="/player"><li><span>Player</span></li></Link>
                </ul> 
            </div>
        );
    }
}
