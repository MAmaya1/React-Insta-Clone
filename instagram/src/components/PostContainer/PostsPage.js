import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import withAuthenticate from '../Authentication/withAuthenticate';

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

export default withAuthenticate(PostsPage);