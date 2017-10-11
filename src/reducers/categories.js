import {
  RETRIEVE_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from '../constants'

const initalCategoryState = {
  categories: []
}



function categories(state = initalCategoryState, action){
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
