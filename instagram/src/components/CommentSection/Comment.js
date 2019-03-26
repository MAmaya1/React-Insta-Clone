import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p><strong>{props.username}</strong> {props.text}</p>
        </div>
    )
}

// Prop Types

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;