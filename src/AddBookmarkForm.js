import React, { Component } from 'react';
import './styles/AddBookmarkForm.css';

class AddBookmarkForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (event) {
            this.props.onSubmit(event.target.url.value, event.target.description.value);
            event.preventDefault();
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input name="url" type="text" placeholder="Bookmark URL" className="inputElement"/>
                <input name="description" type="text" placeholder="Bookmark Description" className="inputElement"/>
                <input type="submit" value="Add Bookmark" className="submitBtn"/>
            </form>
        );
    }
}

export default AddBookmarkForm;
