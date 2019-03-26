import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post-container">
            <Post 
                username={props.username}
                thumbnailUrl={props.thumbnailUrl}
                imageUrl={props.imageUrl}
                likes={props.likes}
            />
            <CommentSection
                comments={props.comments}
                timestamp={props.timestamp}
            />
        </div>
    );
}

// Prop Types

PostContainer.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ),
}

export default PostContainer;