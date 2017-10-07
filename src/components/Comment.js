import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'

import history from './../utils/history'
// add comments action
import { deletePost, upVote, downVote, fetchComments, updatePost } from './../actions/posts'

class Comment extends Component {
  render(){
    return(
      <div className="list-group">
        <div className="list-group-item">
          <h4 className="list-group-item-heading">Name</h4>
          <p className="list-group-item-text">Comment body</p>
          <p className="list-group-item-text">Vote: <span>20 </span>
            <button className="btn btn-xs btn-success">Up</button>
            <button className="btn btn-xs btn-danger">Down</button>
          </p>
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ posts }) {
  // console.log('ownProps', ownProps.postId);
  return {
    posts: posts.posts
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {

    upVote: (id) => dispatch(upVote(id)),
    downVote: (id) => dispatch(downVote(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
