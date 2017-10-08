import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'

import history from './../utils/history'
import { addPost } from './../actions/posts'

class EditPost extends Component {

  handleSubmit = (e) => {
        e.preventDefault()
        const post = serializeForm(e.target, { hash: true })
        this.props.createPost(post)
        this.props.history.push('/')

  }

  render(){
    return (
      <div className='container'>

      <form onSubmit={this.handleSubmit} className="form-horizontal">
      <fieldset>

        <legend>Edit Post</legend>

        <div className="form-group">
          <label className="col-md-4 control-label">Title</label>
          <div className="col-md-4">
          <input id="title" name="title" type="text" placeholder="Post Title" className="form-control input-md" defaultValue="A Title"/>

        </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label">Author</label>
          <div className="col-md-4">
          <input id="author" name="author" type="text" placeholder="Sadiq" className="form-control input-md" defaultValue="Sadiq"/>

        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label">Categories</label>
        <div className="col-md-4">
          <select id="categories" name="categories" className="form-control">
            {this.props.categories.map(category => <option key={category.path} value={category.path}>{category.name}</option> )}
          </select>
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label">Body</label>
        <div className="col-md-4">
          <textarea className="form-control" id="body" name="body"  defaultValue="This is an example .." />
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
    createPost: (post) => {

      dispatch(addPost(post))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
