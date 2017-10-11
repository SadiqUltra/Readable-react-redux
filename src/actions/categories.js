import * as API from './../utils/api'

import {
  RETRIEVE_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from '../constants'

// get all posts
function retrieveCategory(json) {
  return {
    type: RETRIEVE_CATEGORY,
    categories: json,
  }
}

// create new category
export function addCategory({ category }){
  return {
    type: ADD_CATEGORY,
    category,
  }
}

// delete category
export function deleteCategory({ category }){
  return {
    type: DELETE_CATEGORY,
    category,
  }
}

// edit category
export function updateCategory({ category }){
  return {
    type: UPDATE_CATEGORY,
    category,
  }
}

// all Categories
export function bootCategories() {

  return function (dispatch) {

    return API.fetchAllCategories().then(json => dispatch(retrieveCategory(json))
      )
  }
}
