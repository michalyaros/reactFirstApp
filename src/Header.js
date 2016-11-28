import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Bookmarks Board</h2>
                </div>
            </div>
        );
    }
}

export default Header;