import { combineReducers } from 'redux'

import categories from './categories'

import comments from './comments'

import posts from './posts'



// exporting both food and calendar
export default combineReducers({
  categories,
  // comments,
  posts,
})
