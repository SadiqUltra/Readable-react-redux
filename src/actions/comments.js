export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const PARENT_DELETED_COMMENT = 'UPDATE_COMMENT'

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

// parentID deleted
export function parentDeletedComment({ comment }){
  return {
    type: PARENT_DELETED_COMMENT,
    comment,
  }
}
