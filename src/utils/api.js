import randomize from 'randomatic'

let token = localStorage.token
if (!token)
  token = localStorage.token  = randomize('*', 10) // any key is acceptable

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const api = 'http://localhost:5001'

// ---- post api ----

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const createPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())


export const fetchPostDetail = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const votePost = (postId, isUp) => {
  const body = {option: isUp ? 'upVote':'downVote'}
  return fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}


export const updatePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}


export const deletePost = (postId) =>{
  return fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers
  })
}

// ---- comment api ----
export const fetchComments = (postId) =>{
  return fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
}

export const createComment = (body) =>{
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const fetchCommentDetail = (commentId) =>{
  return fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const updateComment = (comment) =>{
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
}

export const voteComment = (commentId, isUp) =>{
  const body = {option: isUp ? 'upVote':'downVote'}
  return fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers
  })

// ---- category api ----

export const fetchAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const fetchCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
