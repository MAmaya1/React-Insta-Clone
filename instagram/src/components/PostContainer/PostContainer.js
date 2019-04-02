import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// Styled Components

const StyledPostContainer = styled.div`
    margin-bottom: 30px;
    border: 1px solid lightgrey;
    line-height: 1.2;
`

// Post Container Component

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