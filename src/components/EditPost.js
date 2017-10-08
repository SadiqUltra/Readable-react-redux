import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'

import history from './../utils/history'
import { updatePost } from './../actions/posts'

class EditPost extends Component {

  handleSubmit = (e) => {
        e.preventDefault()
        const post = serializeForm(e.target, { hash: true })
        console.log(post)
        post.timestamp = Number(post.timestamp)
        post.deleted = post.deleted == 1 ? true: false
        post.voteScore = Number(post.voteScore)
        this.props.updatePost(post)
        this.props.history.push('/')

  }

  render(){
    const  post  = this.props.posts.filter(post => post.id === this.props.postId)[0]
    if(post === undefined) return (
      <div className='container'>Loading ...</div>
    )
    return (
      <div className='container'>

      <form onSubmit={this.handleSubmit} className="form-horizontal">
      <input type="hidden" name="id" defaultValue={post.id} />
      <input type="hidden" name="deleted" defaultValue={Number(post.deleted)} />
      <input type="hidden" name="timestamp" defaultValue={post.timestamp} />
      <input type="hidden" name="voteScore" defaultValue={post.voteScore} />
      <fieldset>

        <legend>Edit Post</legend>

        <div className="form-group">
          <label className="col-md-4 control-label">Title</label>
          <div className="col-md-4">
          <input id="title" name="title" type="text" placeholder="Post Title" className="form-control input-md" defaultValue={post.title}/>

        </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label">Author</label>
          <div className="col-md-4">
          <input id="author" name="author" type="text" placeholder="Sadiq" className="form-control input-md" defaultValue={post.author}/>

        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label">Categories</label>
        <div className="col-md-4">
          <select id="categories" name="category" className="form-control" defaultValue={post.category}>
            {this.props.categories.map(category => <option key={category.path} value={category.path}>{category.name}</option> )}
          </select>
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label">Body</label>
        <div className="col-md-4">
          <textarea className="form-control" id="body" name="body"  defaultValue={post.body} />
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label"></label>
        <div className="col-md-4">
          <button className="btn btn-info">submit</button>
        </div>
        </div>

        </fieldset>
        </form>
        </div>
    )
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories: categories.categories,
    posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updatePost: (post) => {

      dispatch(updatePost(post))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
