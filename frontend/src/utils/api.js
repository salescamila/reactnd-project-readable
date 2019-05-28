import {
  generateUID,
  _getAllCategories,
  _getGategory,
  _getAllPosts,
  _savePost,
  _getPost,
  _votePost,
  _editPost,
  _deletePost,
  _getAllComments,
  _saveComment,
  _getComment,
  _voteComment,
  _editComment,
  _deleteComment
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getAllCategories(),
    _getAllPosts(),
    _getAllComments(),
  ]).then(([categories, posts, comments]) => ({
    categories,
    posts,
    comments
  }))
}

//Get all of the categories available for the app.
export function getAllCategories () {
  return Promise.all([
    _getAllCategories(),
  ]).then(([categories]) => ({
    categories
  }))
}

//Get all of the posts for a particular category
export function getCategory (categoryId) {
  return Promise.all([
    _getGategory(categoryId),
  ]).then(([categoryPosts]) => ({
    categoryPosts
  }))
}

//Get all of the posts.
export function getAllPosts () {
  return Promise.all([
    _getAllPosts(),
  ]).then(([posts]) => ({
    posts
  }))
}

//Add a new post
export function savePost (post) {
  const formattedPost = {
    ...post,
    id: generateUID(),
    timestamp: Date.now(),
  }
  return _savePost(formattedPost)
}

//Get the details of a single post
export function getSinglePost (postId) {
  return Promise.all([
    _getPost(postId),
    _getAllComments(postId),
  ]).then(([post, comments]) => ({
    post,
    comments
  }))
}

//Used for voting on a post
export function votePost (postId, vote) {
  return _votePost(postId, vote)
}

//Edit the details of an existing post
export function editPost (postId, post) {
  return _editPost(postId, post)
}

//deletePost
//Sets the deleted flag for a post to 'true'.
//Sets the parentDeleted flag for all child comments to 'true'.
export function deletePost (postId) {
  return _editPost(postId)
}

//Get all the comments for a single post
export function getAllComments (postId) {
  return Promise.all([
    _getAllComments(postId),
  ]).then(([comments]) => ({
    comments
  }))
}

//Add a comment to a post
export function saveComment (comment) {
  const formattedComment = {
    ...post,
    id: generateUID(),
    timestamp: Date.now(),
  }
  return _savePost(formattedComment)
}

//Get the details for a single comment
export function getComment (commentId) {
  return Promise.all([
    _getComment(commentId),
  ]).then(([comment]) => ({
    comment
  }))
}

//Used for voting on a comment.
export function voteComment (commentId, vote) {
  return _votePost(commentId, vote)
}

//Edit the details of an existing comment
export function editComment (commentId, comment) {
  return _editComment(commentId, comment)
}

//Sets a comment's deleted flag to 'true'
export function deleteComment (commentId) {
  return _editComment(commentId)
}