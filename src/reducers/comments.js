import {
  RETRIEVE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  EDIT_COMMENT,
  UPDATE_COMMENT,
  DOWN_VOTE_COMMENT,
} from '../constants'

const initalCommentState = {
  comments: [],
  editCommentId: false
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
    case EDIT_COMMENT:
      return {
        ...state,
        editCommentId: action.id
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map( comment => comment.id === action.comment.id ? action.comment : comment ),
        editCommentId: false
      }

    default:
      return state
  }
}


export default comments
