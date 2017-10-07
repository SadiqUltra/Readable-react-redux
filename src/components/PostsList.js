import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'
import sortBy from 'sort-by'
import { deletePost, changeSort } from './../actions/posts'


class PostsList extends Component {

  render(){

    return (
      <div className="container">
        <h2>Posts List</h2>
        <div className="form-group">
          <label className="col-md-4 control-label">Sort by</label>
          <div className="col-md-4">
            <select id="categories" name="categories" className="form-control" onChange={event => this.props.changeSort(event.target.value)}>
              <option value="-voteScore">Maximum Votes</option>
              <option value="voteScore">Minimum Votes</option>
              <option value="timestamp">Published at</option>
              <option value="-timestamp">Reverse Published at</option>
            </select>
          </div>
        </div>
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

            {this.props.posts
              .filter(post => ((this.props.category === undefined || post.category === this.props.category) && (post.deleted === false)))
              .sort(sortBy(this.props.sortBy))
              .map((post) => {
              // console.log('id', post.id);
              return (
                <tr key={post.id}>
                  <td>
                    <h4><Link to={'/post/'+post.category+'/'+post.id}>{post.title}</Link></h4>
                    <p>{post.body}</p>
                  </td>
                  <td>
                    <h4>{post.voteScore}</h4>
                  </td>
                  <td>
                    <h4><Timestamp time={post.timestamp/1000} format='full' /></h4>
                  </td>
                  <td>
                    <Link to={'/post/'+ post.category +'/'+ post.id +'/edit'} className='btn btn-sm btn-info'>Edit</Link>
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
    sortBy: posts.sortBy,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    changeSort: (sortByValue) => dispatch(changeSort(sortByValue))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
