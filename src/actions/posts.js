import * as API from './../utils/api'

export const RETRIEVE_POST = 'RETRIEVE_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const CHANGE_SORT = 'CHANGE_SORT'

// get all posts
function retrievePost(json) {
  return {
    type: RETRIEVE_POST,
    posts: json,
  }
}


// create new post
export function addPost({ post }){
  return {
    type: ADD_POST,
    post,
  }
}

// delete post
export function doDeletePost({ json }, id){
  return {
    type: DELETE_POST,
    id,
    result: json,
  }
}

export function changeSort(sortby){
  return {
    type: CHANGE_SORT,
    sortby: sortby
  }
}

// all post
export function bootPosts() {

  return function (dispatch) {

    return API.fetchPosts().then(json => dispatch(retrievePost(json))
      )
  }
}

export function deletePost(id) {
  return function (dispatch){
    return API.deletePost(id).then(json => dispatch(doDeletePost(json, id))
      )
  }
}
