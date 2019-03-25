import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.comments.map(comment => (
                <Comment 
                    key={comment.id}
                    username={comment.username}
                    text={comment.text}
                />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;