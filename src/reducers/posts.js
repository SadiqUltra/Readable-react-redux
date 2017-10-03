import {
  RETRIEVE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST
} from '../actions/posts'


const initalPostState = {
  posts: [],
  comments:[],
  sortCategory: 'voteScore',
  sortOrder: 'asc'
}

function posts(state = initalPostState, action){
  switch (action.type) {
    case RETRIEVE_POST:
      return {
        ...state,
        posts: action.posts,
      }
    case ADD_POST:
      return {
        ...state,

      }
    case DELETE_POST:
      return {
        ...state,

      }
    case UPDATE_POST:
      return {
        ...state,

      }
      // break;
    default:
      return state
  }
}

export default posts
