//import Post from "../components/Post";

const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': "whatever"
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

//Get all of the categories available for the app
export const _getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(categories => categories)

//Get all of the posts for a particular category
export const _getGategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(categoryPosts => categoryPosts)

//Get all of the posts
export const _getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts)

//Add a new post {id, timestamp, title, body, author, category}
export const _savePost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...post })
    }).then(res=>res.json())
      .then(post=>post)
      .catch(error =>{
        console.log('Error in _savePost...',error)
      })

//Get the details of a single post
export const _getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(post => post)

//Used for voting on a post {option: upVote/downVote}
export const _votePost = (postId, vote) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...vote })
    }).then(res=>res.json())
      .then(posts=>posts)
      .catch(error =>{
        console.log('Error in _votePost...',error)
      })

//Edit the details of an existing post {title,body}
export const _editPost = (postId, post) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...post })
    }).then(res=>res.json())
      .catch(error =>{
        console.log('Error in _votePost...',error)
      })

//Sets the deleted flag for a post to 'true'.
//Sets the parentDeleted flag for all child comments to 'true'.
export const _deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: { ...headers },
    }).then(res=>console.log(res))
      .catch(error =>{
        console.log('Error in _deletePost...',error)
      })

//Get all the comments for a single post
export const _getAllComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(comments => comments)

//Add a comment to a post {id, timestamp, body, author, parentId}
export const _saveComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...comment })
    }).then(res=>res.json())
      .then(comment=>comment)
      .catch(error =>{
        console.log('Error in _saveComment...',error)
      })

//Get the details for a single comment
export const _getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(comment => comment)

//Used for voting on a comment. {option: upVote/downVote}
export const _voteComment = (commentId, vote) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...vote })
    }).then(res=>res.json())
      .then(comment=>comment)
      .catch(error =>{
        console.log('Error in _voteComment...',error)
      })

//Edit the details of an existing comment {timestamp, body}
export const _editComment = (commentId, comment) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ ...comment })
    }).then(res=>res.json())
      .catch(error =>{
        console.log('Error in _editComment...',error)
      })

//Sets a comment's deleted flag to 'true'
export const _deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: { ...headers },
    }).then(res=>res.json())
      .catch(error =>{
        console.log('Error in _deleteComment...',error)
      })




/*
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
*/