import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';

const PostsPage = props => {
    return (
        <div className="page-wrapper">
        <SearchBar updateSearchValue={props.updateSearchValue}/>
        {props.filteredData.map(item => (
            <PostContainer
              key={item.id}
              username={item.username}
              thumbnailUrl={item.thumbnailUrl}
              imageUrl={item.imageUrl}
              likes={item.likes}
              timestamp={item.timestamp}
              comments={item.comments}
            />
          )
        )}
      </div>
    );
}

// Prop Types

PostsPage.propTypes = {
  updateSearchValue: PropTypes.func,
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
        })
      )
    })
  )
}

export default PostsPage;