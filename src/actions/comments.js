import * as API from './../utils/api'
import uuidv1 from 'uuid'

export const RETRIEVE_COMMENT = 'RETRIEVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

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
export function doAddComment(comment){
  console.log(comment);
  return {
    type: ADD_COMMENT,
    comment,
  }
}

// delete comment
export function doDeleteComment( json, id ){
  return {
    type: DELETE_COMMENT,
    result: json,
    id
  }
}

// update comment
export function doUpdateComment( comment ){
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}
// up vote
export function doUpVote(json, id){
    return {
      type: UP_VOTE_COMMENT,
      id,
      comment: json
    }
}


// down vote
export function doDownVote(json, id){
    return {
      type: DOWN_VOTE_COMMENT,
      id,
      comment: json
    }
}


// fetch Comments

export function fetchComments(postId) {

  return function (dispatch) {

    return API.fetchComments(postId).then(json => dispatch(retrieveComments(json, postId) ) )
  }
}

// add comment
export function createComment(comment, parentId) {
  comment.id = uuidv1()
  comment.timestamp = Date.now()
  comment.parentId = parentId

  return function (dispatch) {

    return API.createComment(comment).then(json => dispatch(doAddComment(comment) ) )
  }
}

// deleteComment
export function deleteComment(id) {

  return function (dispatch) {

    return API.deleteComment(id).then(json => dispatch(doDeleteComment(json, id) ) )
  }
}

// update Comment
export function updateComment(id, timestamp, details) {
  return function (dispatch){
    return API.updateComment(id, timestamp, details).then(json => dispatch(doUpdateComment(json)) )
  }
}

// up vote
export function upVote(id) {
  return function (dispatch){
    return API.voteComment(id, true).then(json => dispatch(doUpVote(json, id)) )
  }
}

// down vote
export function downVote(id) {
  return function (dispatch){
    return API.voteComment(id, false).then(json => dispatch(doDownVote(json, id)) )
  }
}
