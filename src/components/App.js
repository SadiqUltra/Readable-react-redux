import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../App.css';

import PostForm from './PostForm'
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
            <Link className="navbar-brand navbar-right" to='/new'>New Post</Link>
          </div>
        </nav>
        <Route exact path='/' render={() => (
          <div>
            <Categories />
            <PostsList />
          </div>
        )}/>

        <Route exact path='/new' render={() => (
          <PostForm/>
        )}/>

        <Route exact path='/post/:id' render={() => (
          <Post/>
        )}/>

        <Route exact path='/post/:id/edit' render={() => (
          <PostForm/>
        )}/>

        <Route exact path='/categories/:id' render={() => (
          <PostsList/>
        )}/>

      </div>
    );
  }
}

export default App;
