import {
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
    case 'expression':
      return {
        ...state,

      }
      break;
    default:
      return state
  }
}

export default posts
