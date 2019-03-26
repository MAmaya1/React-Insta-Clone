import React from 'react';
import Comment from './Comment';
import AddComment from '../AddComment/AddComment'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentsArray: props.comments,
            inputValue: ''
        }
    }

    // Update Input Value Function

    updateInputValue = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    // Add New Comment Function

    addNewComment = event => {
        event.preventDefault();
        console.log(this.state.inputValue);
        const newComment = {
            id: Date.now(),
            username: 'fozcat',
            text: this.state.inputValue
        }

        this.setState({
            commentsArray: [...this.state.commentsArray, newComment],
            inputValue: ''
        })
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.commentsArray.map(comment => (
                    <Comment 
                        key={comment.id}
                        username={comment.username}
                        text={comment.text}
                    />
                ))}
                <p className="timestamp">{this.props.timestamp}</p>
                <AddComment
                    updateInputValue={this.updateInputValue} 
                    addNewComment={this.addNewComment}/>
            </div>
        )
    }
}

// Prop Types

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;