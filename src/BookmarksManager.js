import React, { Component } from 'react';
import AddBookmarkForm from './AddBookmarkForm';
import BookmarksList from './BookmarksList';
import './styles/BookmarksManager.css'

var bookmarks = [];

class BookmarksManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarksUpdate: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(url, description) {
        bookmarks.push({key: url, url: url, description: description});
        this.setState({
            bookmarksUpdate: true
        })
    }

    render() {
        return (
            <div className="manager">
                <AddBookmarkForm onSubmit={this.handleUserInput}/>
                <BookmarksList bookmarks={bookmarks} />
            </div>
        );
    }
}


export default BookmarksManager;