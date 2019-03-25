import React from 'react';

const Post = props => {
    return (
        <div className="post">
            <img src={props.thumbnailUrl}/>
            <p>{props.username}</p>
            <img src={props.imageUrl}/>
            <p>{props.likes} likes</p>
        </div>
    );
}

export default Post;