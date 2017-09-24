export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

// create new category
export function addCategory({ category }){
  return {
    type: ADD_CATEGORY,
    category,
  }
}

// delete category
export function deleteCategory({ category }){
  return {
    type: DELETE_CATEGORY,
    category,
  }
}

// edit category
export function updateCategory({ category }){
  return {
    type: UPDATE_CATEGORY,
    category,
  }
}
