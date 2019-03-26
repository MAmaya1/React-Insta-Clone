import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="post">
                <div className="user-tag">
                    <img src={this.props.thumbnailUrl} alt="profile"/>
                    <h2>{this.props.username}</h2>
                </div>
                <img src={this.props.imageUrl} alt="post"/>
                <div className="post-icons">
                    <i className="far fa-heart" onClick={this.addLikes}></i><i className="far fa-comment"></i>
                </div>
                <p className="likes"><strong>{this.state.likes} likes</strong></p>
            </div>
        );
    }
}

// Prop Types

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;