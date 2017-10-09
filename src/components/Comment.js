import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import Timestamp from 'react-timestamp'

import history from './../utils/history'
// add comments action
import { deleteComment, upVote, downVote, editComment, updateComment } from './../actions/comments'

class Comment extends Component {

  handleUpdateComment = (e) => {
        e.preventDefault()
        const comment = serializeForm(e.target, { hash: true })
        this.props.updateComment(comment, this.props.postId)
  }
  render(){
    const { comment } = this.props

    return(
      <div className="list-group">
        <div className="list-group-item">

            {( ! this.props.isEditComment &&
              <div>
                <h4 className="list-group-item-heading">{comment.author}</h4>

                <p className="list-group-item-text">{comment.body}</p>

                <button className="btn btn-xs btn-danger" onClick={() => this.props.deleteComment(comment.id)}  >Delete</button>
                <button className="btn btn-xs btn-info" onClick={() => this.props.editComment(comment.id)}>Edit</button>
              </div>
            )}

            {(  this.props.isEditComment &&
            <form onSubmit={this.handleUpdateComment}>
              <input type="hidden" name='id' id='id' defaultValue={comment.id} />
              <input type="hidden" name='timestamp' id='timestamp' defaultValue={comment.timestamp} />
              <input type="hidden" name='parentId' id='parentId' defaultValue={comment.parentId} />
              <p>
                <input type="text" className="form-control input-md" id="author" defaultValue={comment.author} name="author"/>
              </p>
              <p>
                <textarea className="form-control" id="body" name="body" defaultValue={comment.body} />
              </p>
              <p>
                <button id="submit" name="submit" className="btn btn-xs btn-success">Update</button>
                <button className="btn btn-xs btn-danger" onClick={() => this.props.editComment(false)}>Cancel</button>
              </p>
            </form>
          )}

          <br />

          <p className="list-group-item-text">Vote: <span>{comment.voteScore} </span>
            <button className="btn btn-xs btn-success" onClick={() => this.props.upVote(comment.id)}>Up</button>
            <button className="btn btn-xs btn-danger" onClick={() => this.props.downVote(comment.id)}>Down</button>
          </p>
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ comments }, ownProps) {
  return {
    comment: ownProps.comment,
    isEditComment: comments.editCommentId === ownProps.comment.id
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {

    upVote: (id) => dispatch(upVote(id)),
    downVote: (id) => dispatch(downVote(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    editComment: (id) => dispatch(editComment(id)),
    updateComment: (comment) => dispatch(updateComment(comment)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
