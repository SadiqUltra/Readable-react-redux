import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from './../actions/posts'

class Post extends Component {

  render(){
    return (
      <div className='container'>
        <h2>Title</h2>
        <p>Author: <em>Sadiq</em> </p>
        <p>Published at: 20 OCT 2017</p>
        <p>Body</p>
        <hr/>
        <p className="list-group-item-text">Vote: 20 (UP) (DOWN)</p>
        <hr/>

        <Link to='1/edit' className='btn btn-xs btn-info'>Edit</Link>
        <button className="btn btn-xs btn-danger">Delete</button>

        <h2>Comments</h2>
        Add a Comment
        <form className="form-horizontal">
        <fieldset>
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

        <div className="list-group">
          <div className="list-group-item">
            <h4 className="list-group-item-heading">Name</h4>
            <p className="list-group-item-text">Comment body</p>
            <p className="list-group-item-text">Vote: 20 (UP) (DOWN)</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ post }) {
  return {
    post: post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
