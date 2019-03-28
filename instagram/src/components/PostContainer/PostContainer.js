import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import styled from 'styled-components'

// Styled Components

const StyledPostContainer = styled.div`
    margin-bottom: 30px;
    border: 1px solid lightgrey;
    line-height: 1.2;

    .user-tag {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }
    
    .post img {
        width: 100%;
    }
    
    .user-tag img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 10px;
    }
    
    .user-tag h2 {
        font-size: 1.2rem;
    }
    
    .post-icons {
        padding: 0 20px;
        margin-top: 14px;
        font-size: 1.4rem;
        cursor: pointer;
    }
    
    .post-icons .far {
        margin-right: 10px;
    }
    
    .likes {
        padding: 0 20px;
    }
`

const PostContainer = props => {
    return (
        <StyledPostContainer>
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
        </StyledPostContainer>
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