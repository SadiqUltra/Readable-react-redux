import React, { Component } from 'react'

class NewPost extends Component {

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
            <option value="1">Option one</option>
            <option value="2">Option two</option>
          </select>
        </div>
        </div>

        <div className="form-group">
        <label className="col-md-4 control-label" for="body">Body</label>
        <div className="col-md-4">
          <textarea className="form-control" id="body" name="body">Post Body</textarea>
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


export default NewPost;
