import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class PostForm extends Component {

  render(){
    return (
      <form className="form-horizontal">
      <fieldset>

        <legend>Create New Post</legend>

        <div className="form-group">
          <label className="col-md-4 control-label" for="textinput">Title</label>
          <div className="col-md-4">
          <input id="textinput" name="textinput" type="text" placeholder="Post Title" className="form-control input-md"/>

        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label" for="categories">Categories</label>
        <div className="col-md-4">
          <select id="categories" name="categories" className="form-control">
            {this.props.categories.map(category => <option value={category.path}>{category.name}</option> )}
          </select>
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label" for="body">Body</label>
        <div className="col-md-4">
          <textarea className="form-control" id="body" name="body"> </textarea>
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label" for="submit"></label>
        <div className="col-md-4">
          <button id="submit" name="submit" className="btn btn-info">submit</button>
        </div>
        </div>

        </fieldset>
        </form>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories: categories.categories,
  }
}

export default connect(
  mapStateToProps,
  undefined
)(PostForm)
