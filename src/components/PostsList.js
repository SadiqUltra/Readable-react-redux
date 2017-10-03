import React, { Component } from 'react'
import Link from 'react-router-dom'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'


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

            {this.props.posts.map((post) => {
              // console.log('id', post.id);
              return (
                <tr key={post.id}>
                  <td>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </td>
                    <td>
                      <h4>654</h4>
                    </td>
                    <td>
                      <h4><Timestamp time={post.timestamp/1000} format='full' /></h4>
                    </td>
                  <td>
                    <button className='btn btn-sm btn-info'>Edit</button>
                    <button className='btn btn-sm btn-danger'>Delete</button>
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

export default connect(
  mapStateToProps,
  undefined
)(PostsList)


// Title author vote
// 15 character... readmore
