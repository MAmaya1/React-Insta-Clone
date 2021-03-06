import React from 'react';
import Comment from './Comment';
import AddComment from '../AddComment/AddComment'
import PropTypes from 'prop-types';

import styled from 'styled-components'

// Styled Components

const StyledCommentSection = styled.div`
    padding: 0 20px;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`

const TimeStamp = styled.p`
    color: grey;
    font-size: 0.8rem;

    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`

// CommentSection Constructor

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
        const newComment = {
            id: Date.now(),
            username: localStorage.getItem('username'),
            text: this.state.inputValue
        }

        this.setState({
            commentsArray: [...this.state.commentsArray, newComment],
            inputValue: ''
        })
    }

    // Render

    render() {
        return (
            <StyledCommentSection>
                {this.state.commentsArray.map(comment => (
                    <Comment 
                        key={comment.id}
                        username={comment.username}
                        text={comment.text}
                    />
                ))}
                <TimeStamp>{this.props.timestamp}</TimeStamp>
                <AddComment
                    updateInputValue={this.updateInputValue} 
                    addNewComment={this.addNewComment}/>
            </StyledCommentSection>
        )
    }
}

// Prop Types

CommentSection.propTypes = {
    updateInputValue: PropTypes.func,
    addNewComment: PropTypes.func,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;