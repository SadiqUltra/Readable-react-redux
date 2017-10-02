export const RETRIEVE_POST = 'RETRIEVE_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

// get all posts
function retrievePost(json) {
  return {
    type: RETRIEVE_POST,
    posts: json,
  }
}


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

//

const api = "http://localhost:5001"
// Generate a unique token
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  'Authorization': token
}

// all post
export function fetchPosts() {

  return function (dispatch) {

    return fetch(`${api}/posts`, {headers})
      .then(response => response.json())
      .then(json => dispatch(retrievePost(json))
      )
  }
}
