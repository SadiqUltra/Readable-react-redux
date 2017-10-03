import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

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
                <h4>
                {this.props.categories.map((category) => {
                  if(category.path === this.props.category)
                    return <Link to={'/categories/'+category.path} className='btn btn-sm btn-info'>{category.name}</Link>

                  return <Link to={'/categories/'+category.path} className='btn btn-sm'>{category.name}</Link>
                })}
                </h4>
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
