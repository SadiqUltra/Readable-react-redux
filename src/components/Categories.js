import React, { Component } from 'react'

class Categories extends Component {

  render(){
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Categories Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><h4>New Category</h4></td>
              <td>
                <button className='btn btn-sm btn-info'>Edit</button>
                <button className='btn btn-sm btn-success'>Save</button>
                <button className='btn btn-sm btn-warning'>Cancel</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default Categories
