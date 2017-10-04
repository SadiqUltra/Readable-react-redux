import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'

import { deletePost } from './../actions/posts'


class PostsList extends Component {

  render(){

    return (
      <div className="container">
        <h2>Posts List</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Post</th>
              <th>Votes</th>
              <th>Published at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {this.props.posts.filter(post => (this.props.category === undefined || post.category === this.props.category))
              .map((post) => {
                if(post.deleted !== false) return
              // console.log('id', post.id);
              return (
                <tr key={post.id}>
                  <td>
                    <h4><Link to={'/post/'+post.id}>{post.title}</Link></h4>
                    <p>{post.body}</p>
                  </td>
                  <td>
                    <h4>{post.voteScore}</h4>
                  </td>
                  <td>
                    <h4><Timestamp time={post.timestamp/1000} format='full' /></h4>
                  </td>
                  <td>
                    <button className='btn btn-sm btn-info'>Edit</button>
                    <button className='btn btn-sm btn-danger' onClick={() => this.props.deletePost(post.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}


          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: posts.posts,
    sort: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
