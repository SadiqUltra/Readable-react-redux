import React, { Component } from 'react'

class PostsList extends Component {

  render(){
    return (
      <div className="container">
        <h2>Posts List</h2>
        <div className="list-group">
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">First List Group Item Heading</h4>
            <p className="list-group-item-text">List Group Item Text</p>
          </a>
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">Second List Group Item Heading</h4>
            <p className="list-group-item-text">List Group Item Text</p>
          </a>
          <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">Third List Group Item Heading</h4>
            <p className="list-group-item-text">List Group Item Text</p>
          </a>
        </div>
      </div>
    )
  }
}

export default PostsList



// Title author vote
// 15 character... readmore
