import React, { Component } from 'react';
import './App.css';

// Import Components

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

// Import CSS

import './components/Login/login.css';
import './components/CommentSection/commentSection.css';
import './components/PostContainer/postContainer.css';
import './components/CommentSection/commentSection.css'

// High Order Component

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

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
      <ComponentFromWithAuthenticate
        filteredData={filteredData}
        updateSearchValue={this.updateSearchValue}
      />
    );
  }
}

export default App;