import {
  RETRIEVE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
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
        ...state,
        comments: state.comments.concat(action.comment)
      }

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id != action.id)
      }

    case UP_VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments.map( comment => comment.id === action.id ? action.comment : comment )

      }
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments.map( comment => comment.id === action.id ? action.comment : comment )

      }

    default:
      return state
  }
}


export default comments
