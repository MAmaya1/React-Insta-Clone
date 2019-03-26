import React, { Component } from 'react';
import './App.css';

// Import Components

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

// Import CSS

import './components/SearchBar/searchBar.css';
import './components/CommentSection/commentSection.css';
import './components/PostContainer/postContainer.css';
import './components/CommentSection/commentSection.css'

// App Constructor

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  // Render

  render() {
    return (
      <div className="page-wrapper">
        <SearchBar/>
        {this.state.dummyData.map(item => (
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
}

export default App;