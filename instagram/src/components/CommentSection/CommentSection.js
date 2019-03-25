import React from 'react';
import Comment from '../Comment/Comment'

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.comments.map(comment => (
                <Comment 
                    username={comment.username}
                    text={comment.text}
                />
            ))}
        </div>
    )
}

export default CommentSection;