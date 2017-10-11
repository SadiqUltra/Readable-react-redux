import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'
import serializeForm from 'form-serialize'
import sortBy from 'sort-by'

import history from './../utils/history'
import Comment from './Comment'
import { deletePost, upVote, downVote, updatePost } from './../actions/posts'
import { fetchComments, createComment } from './../actions/comments'

class Post extends Component {

  handleSubmitComment = (e) => {
        e.preventDefault()
        const comment = serializeForm(e.target, { hash: true })
        this.props.createComment(comment, this.props.postId)
  }

  componentDidMount(){
    const comments = this.props.getComments(this.props.postId)
  }

  render(){
    const  post  = this.props.posts.filter(post => post.id === this.props.postId)[0]
    if(post === undefined) return (
      <div className='container'>Loading ...</div>
    )
    else {

      return (
      <div className='container'>
        <h2>{post.title}</h2>
        <p>Author: <em>{post.author}</em> </p>
        <p>Published at: <Timestamp time={post.timestamp/1000} format='full' /></p>
        <p>{post.body}</p>
        <hr/>
        <p className="list-group-item-text">Vote: <span>{post.voteScore} </span>
          <button className="btn btn-xs btn-success" onClick={() => this.props.upVote(post.id)}>Up</button>
          <button className="btn btn-xs btn-danger" onClick={() => this.props.downVote(post.id)}>Down</button>
        </p>
        <hr/>

        <Link to={`/post/${post.category}/${post.id}/edit`} className='btn btn-xs btn-info'>Edit</Link>
        <button className="btn btn-xs btn-danger" onClick={() => this.props.deletePost(post.id)}>Delete</button>

        <h2>Comments ({this.props.comments.length})</h2>
        Add a Comment

        <form onSubmit={this.handleSubmitComment} className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <div className="col-md-4">
              <input type="text" className="form-control input-sm" id="author" placeholder='Enter Your Name' name="author"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4">
              <textarea className="form-control" id="body" name="body"></textarea>
            </div>
          </div>

          <div className="form-group">
          <div className="col-md-4">
            <button id="submit" name="submit" className="btn btn-xs btn-info">submit</button>
          </div>
          </div>

        </fieldset>
        </form>

        {this.props.comments.sort(sortBy('-timestamp')).map(comment => <Comment key={comment.id} comment={comment} />)}

      </div>
    )}
  }
}

function mapStateToProps ({ posts, comments }) {
  return {
    // console.log('ownProps', ownProps.postId);
    posts: posts.posts,
    comments: comments.comments
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    deletePost: (id) => {
      // console.log('ownProps.history', ownProps)
      dispatch(deletePost(id))
      ownProps.history.push('/')
    },
    upVote: (id) => dispatch(upVote(id)),
    downVote: (id) => dispatch(downVote(id)),
    getComments: (id) => dispatch(fetchComments(id)),
    createComment: (comment, postId) => dispatch(createComment(comment, postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
