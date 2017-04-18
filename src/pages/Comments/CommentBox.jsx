import React, { Component } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
    state = {
        data: [
            {author: 'Pete Hunt', text: 'This is one comment'},
            {author: 'Jordan Walke', text: 'This is *another* comment'}
        ]
    }

    handleCommentSubmit = comment => {
        const data = this.state.data;
        data.push(comment);

        this.setState({
            data
        })
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}