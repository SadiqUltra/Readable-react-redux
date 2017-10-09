import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'

import history from './../utils/history'
// add comments action
import { deleteComment, upVote, downVote, updateComment } from './../actions/comments'

class Comment extends Component {

  render(){
    const { comment } = this.props

    return(
      <div className="list-group">
        <div className="list-group-item">
          <h4 className="list-group-item-heading">{comment.author}</h4>


            <div>
              <p className="list-group-item-text">{comment.body}</p>

              <button className="btn btn-xs btn-danger" onClick={() => this.props.deleteComment(comment.id)}  >Delete</button>
              <button className="btn btn-xs btn-info" onClick={this.toggleEdit}>Edit</button>
            </div>
            // TODO: add modal
            <div>
              <p>
                <textarea className="form-control" id="body" name="body" defaultValue={comment.body} />
              </p>
              <p>
                <button className="btn btn-xs btn-success">Update</button>
                <button className="btn btn-xs btn-danger" onClick={this.toggleEdit}>Cancel</button>
              </p>
            </div>

          <br />

          <p className="list-group-item-text">Vote: <span>{comment.voteScore} </span>
            <button className="btn btn-xs btn-success">Up</button>
            <button className="btn btn-xs btn-danger">Down</button>
          </p>
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ }, ownProps) {
  return {
    comment: ownProps.comment
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {

    // upVote: (id) => dispatch(upVote(id)),
    // downVote: (id) => dispatch(downVote(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateComment: (comment) => dispatch(updateComment(comment)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
