import React, { Component } from 'react'
import Link from 'react-router-dom'


class PostsList extends Component {

  render(){
    return (
      <div className="container">
        <h2>Posts List</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Post</th>
              <th>Votes</th>
              <th>Published at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <h4>New Category</h4>
                <p>Some word from body readmore</p>
              </td>
                <td>
                  <h4>654</h4>
                </td>
                <td>
                  <h4>20 oct 2017</h4>
                </td>
              <td>
                <button className='btn btn-sm btn-info'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>

            <tr>
              <td>
                <h4>New Category</h4>
                <p>Some word from body readmore</p>
              </td>
                <td>
                  <h4>654</h4>
                </td>
                <td>
                  <h4>20 oct 2017</h4>
                </td>
              <td>
                <button className='btn btn-sm btn-info'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default PostsList



// Title author vote
// 15 character... readmore
