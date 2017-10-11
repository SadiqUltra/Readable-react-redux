import {
  RETRIEVE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_SORT,
  UP_VOTE,
  BIND_COMMENTS,
  DOWN_VOTE,
} from '../actions/posts'


const initalPostState = {
  posts: [],
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
        posts: state.posts.concat(action.post)
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
        posts: state.posts.map(post => {
          if(post.id === action.post.id)
            return action.post
          return post
        })

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
    case DOWN_VOTE:
      return {
        ...state,
        posts: state.posts.map( post => post.id === action.id ? action.post : post )

      }
    case BIND_COMMENTS:
      console.log('action.comments', action.comments)
      return {
        ...state,
        posts: state.posts.map( post => {
          if(post.id === action.postId){
            post.comments = action.comments
          }
          return post
        } )

      }
    default:
      return state
  }
}

export default posts
