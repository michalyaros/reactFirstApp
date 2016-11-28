import React, { Component } from 'react';
import Bookmark from './Bookmark';
import './styles/BookmarksList.css'


class BookmarksList extends Component {
    render() {
        var rows = [];
        this.props.bookmarks.forEach((bookmark) => {
            rows.push(<Bookmark key={bookmark.url} url={bookmark.url} description={bookmark.description} />);
        });
        return (
            <ul className="list">
                {rows}
            </ul>
        );
    }
}

export default BookmarksList;