import {
  RETRIEVE_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from '../actions/categories'

const initalPostState = {
  categories: []
}



function categories(state = initalPostState, action){
  switch (action.type) {
    case RETRIEVE_CATEGORY:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

export default categories
