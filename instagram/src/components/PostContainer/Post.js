import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

// Styled Components

const PostImage = styled.img`
    width: 100%;
`

const UserTag = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 10px;
    }

    h2 {
        font-size: 1.2rem;
    }
`

const PostIcons = styled.div`
    padding: 0 20px;
    margin-top: 14px;
    font-size: 1.4rem;
    cursor: pointer;

    .far {
        margin-right: 10px;
    }
`

const Likes = styled.p`
    padding: 0 20px;
`

// Post Component Constructor

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes
        }
    }

    // Add Likes Function

    addLikes = event => {
        event.preventDefault();
        this.setState({
            likes: this.state.likes + 1
        })
    }

    // Render

    render() {
        return (
            <div>
                <UserTag>
                    <img src={this.props.thumbnailUrl} alt="profile"/>
                    <h2>{this.props.username}</h2>
                </UserTag>
                <PostImage src={this.props.imageUrl} alt="post"/>
                <PostIcons>
                    <i className="far fa-heart" onClick={this.addLikes}></i><i className="far fa-comment"></i>
                </PostIcons>
                <Likes><strong>{this.state.likes} likes</strong></Likes>
            </div>
        );
    }
}

// Prop Types

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    addLikes: PropTypes.func
}

export default Post;