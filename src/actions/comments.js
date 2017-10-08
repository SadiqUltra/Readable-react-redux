import * as API from './../utils/api'
import uuidv1 from 'uuid'

export const RETRIEVE_COMMENT = 'RETRIEVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

// create new comment
export function retrieveComments(json, postId){
  console.log('comments-actions:', json)
  return {
    type: RETRIEVE_COMMENT,
    comments: json,
    postId,
  }
}

// create new comment
export function addComment({ comment }){
  return {
    type: ADD_COMMENT,
    comment,
  }
}

// delete comment
export function deleteComment({ comment }){
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

// update comment
export function updateComment({ comment }){
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

// fetch Comments

export function fetchComments(postId) {

  return function (dispatch) {

    return API.fetchComments(postId).then(json =>{
      console.log('fetchComments==>', json)
       dispatch(retrieveComments(json, postId) )
    })
  }
}
