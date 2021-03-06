import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../App.css';

import PostForm from './PostForm'
import EditPost from './EditPost'
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
            <Link className="navbar-brand navbar-right" to='/post/new'>New Post</Link>
          </div>
        </nav>
        <Route exact path='/' render={() => (
          <div>
            <Categories />
            <PostsList />
          </div>
        )}/>

        <Route exact path='/post/new' render={(props) => (
          <PostForm {...props}/>
        )}/>

        <Route exact path='/post/:category/:id/edit' render={(props) => (
          <EditPost {...props} postId={props.match.params.id} />
        )}/>



        <Route exact path='/post/:category/:id' render={(props) => (
          <Post {...props} postId={props.match.params.id} />
        )}/>

        <Route exact path='/:category' render={(props) => (
          <div>
            <Categories {...props} category={props.match.params.category} />
            <PostsList {...props} category={props.match.params.category} />
          </div>
        )}/>

      </div>
    );
  }
}

export default App;
