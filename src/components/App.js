import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css';

import NewPost from './NewPost'
import Post from './Post'
import PostsList from './PostsList'
import Categories from './Categories'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container">
            <Link className="navbar-brand" to='/'>Home</Link>
            <Link className="navbar-brand" to='/new'>New Post</Link>
            <Link className="navbar-brand" to='/categories'>Categories</Link>
          </div>
        </nav>
        <Route exact path='/' render={() => (
          <PostsList />
        )}/>

        <Route exact path='/new' render={() => (
          <NewPost/>
        )}/>

        <Route exact path='/post/:id' render={() => (
          <Post/>
        )}/>

        <Route exact path='/categories' render={() => (
          <Categories/>
        )}/>
      </div>
    );
  }
}

export default App;
