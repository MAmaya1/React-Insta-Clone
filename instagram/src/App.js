import React, { Component } from 'react';
import './App.css';

// Import Components

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

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
      dummyData: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  // Update Search Value

  updateSearchValue = event => {
    this.setState({
        searchInput: event.target.value
    })
  }

  // Render

  render() {

    // Filter dummyData

    const filteredData = this.state.dummyData.filter(post => {
        if (post.username.includes(this.state.searchInput)) {
          return true;
        } else {
          return false;
        }
      }
    )

    return (
      <PostsPage
        filteredData={filteredData}
        updateSearchValue={this.updateSearchValue}/>
    );
  }
}

export default App;