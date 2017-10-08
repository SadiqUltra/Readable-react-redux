import {
  RETRIEVE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments'

const initalCommentState = {
  comments: []
}

function comments(state = initalCommentState, action){

  switch (action.type) {
    case RETRIEVE_COMMENT:
    console.log('comments-reddd', action.comments)

      return {
        ...state,
        comments: action.comments,
        // [action.postId]: action.comments
      }

    case ADD_COMMENT:
      return {
        ...state
      }

    default:
      return state
  }
}


export default comments
