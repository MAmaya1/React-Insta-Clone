import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
            <div className="user-tag">
                <img src={props.thumbnailUrl} alt="profile"/>
                <h2>{props.username}</h2>
            </div>
            <img src={props.imageUrl} alt="post"/>
            <div className="post-icons">
                <i className="far fa-heart"></i><i className="far fa-comment"></i>
            </div>
            <p className="likes"><strong>{props.likes} likes</strong></p>
        </div>
    );
}

// Prop Types

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;