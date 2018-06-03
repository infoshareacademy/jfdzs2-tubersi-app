
import React, { Component } from 'react';
import './main.css';
import Menu from "../menu/menu";

export default class Main extends Component {
    render() {
        return (
            <div className="main-background">
                <Menu/>
            </div>
        );
    }
}
