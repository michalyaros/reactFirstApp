import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './Header'
import BookmarksManager from './BookmarksManager'

ReactDOM.render(<Header/>, document.getElementById('header'));

ReactDOM.render(<BookmarksManager />, document.getElementById('root'));

