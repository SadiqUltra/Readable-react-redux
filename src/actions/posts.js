import * as API from './../utils/api'
import uuidv1 from 'uuid'

export const RETRIEVE_POST = 'RETRIEVE_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const CHANGE_SORT = 'CHANGE_SORT'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'

// get all posts
function retrievePost(json) {
  return {
    type: RETRIEVE_POST,
    posts: json,
  }
}


// create new post
export function doAddPost(post){
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

// change sorting
export function changeSort(sortby){
  return {
    type: CHANGE_SORT,
    sortby: sortby
  }
}


// up vote
export function doUpVote(json, id){
    return {
      type: UP_VOTE,
      id,
      post: json
    }
}


// down vote
export function doDownVote(json, id){
    return {
      type: UP_VOTE,
      id,
      post: json
    }
}



// all post
export function bootPosts() {

  return function (dispatch) {

    return API.fetchPosts().then(json => dispatch(retrievePost(json))
      )
  }
}

// delete post
export function deletePost(id) {
  return function (dispatch){
    return API.deletePost(id).then(json => dispatch(doDeletePost(json, id))
      )
  }
}


// up vote
export function upVote(id) {
  return function (dispatch){
    return API.votePost(id, true).then(json => dispatch(doUpVote(json, id))
      )
  }
}

// down vote
export function downVote(id) {
  return function (dispatch){
    return API.votePost(id, false).then(json => dispatch(doDownVote(json, id))
      )
  }
}

// add post
export function addPost(post) {
  post.id = uuidv1()
  post.timestamp = Date.now()
  post.deleted = false
  return function (dispatch){
    return API.createPost(post).then(json => dispatch(doAddPost(json))
      )
  }
}
