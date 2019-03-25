import React from 'react';
import Post from '../Post/Post'
import CommentSection from '../CommentSection/CommentSection'


const PostContainer = props => {
    return (
        <div className="post-container">
            <Post 
                username={props.username}
                thumbnailUrl={props.thumbnailUrl}
                imageUrl={props.imageUrl}
                likes={props.likes}
                timestamp={props.timestamp}
            />
            <CommentSection
                    comments={props.comments}
            />
        </div>
    );
}

export default PostContainer;