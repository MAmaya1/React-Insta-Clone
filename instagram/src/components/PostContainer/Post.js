import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
            <img src={props.thumbnailUrl} alt="profile"/>
            <p>{props.username}</p>
            <img src={props.imageUrl} alt="post"/>
            <p>{props.likes} likes</p>
        </div>
    );
}

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;