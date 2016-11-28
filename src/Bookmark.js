import React, { Component } from 'react';
import './styles/Bookmark.css';

class Bookmark extends Component {
    render() {
        return (
            <li className="item">
                <a href={this.props.url} target="_blank" rel="external">{this.props.url}</a>
                <br/>
                {this.props.description}
            </li>
        );
    }
}

export default Bookmark;