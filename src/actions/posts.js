import * as API from './../utils/api'

export const RETRIEVE_POST = 'RETRIEVE_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

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
export function deletePost({ post }){
  return {
    type: DELETE_POST,
    post,
  }
}


// all post
export function bootPosts() {

  return function (dispatch) {

    return API.fetchPosts().then(json => dispatch(retrievePost(json))
      )
  }
}
