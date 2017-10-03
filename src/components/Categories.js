import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {

  render(){
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.categories.map((category) => {
                  return (
                    <button className='btn btn-sm btn-info'>{category.name}</button>
                  )
                })}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
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
)(Categories)
