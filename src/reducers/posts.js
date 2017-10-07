import {
  RETRIEVE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_SORT,
  UP_VOTE,
} from '../actions/posts'


const initalPostState = {
  posts: [],
  comments:[],
  sortBy: '-voteScore',
  // sortOrder: '-'
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
      console.log(action);
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === action.id)
            return Object.assign({}, post, {deleted: action.result.ok})
          return post
        })

      }
    case UPDATE_POST:
      return {
        ...state,

      }
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: action.sortby

      }
    case UP_VOTE:
      return {
        ...state,
        posts: state.posts.map( post => post.id === action.id ? action.post : post )

      }
    default:
      return state
  }
}

export default posts
