export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

// create new post

export function addPost({ post }){
  return {
    type: ADD_POST,
    post,
  }
}

// delete post
export function deletePost({ post }){
  return {
    type: DELETE_POST,
    post,
  }
}

// edit post
export function updatePost({ post }){
  return {
    type: UPDATE_POST,
    post,
  }
}
